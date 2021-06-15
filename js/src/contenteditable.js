import rangy from 'rangy'

function getCECaretPosition (element) {
  let charIndex = 0
  let start = 0
  let end = 0
  let foundStart = false
  let foundEnd = false

  const sel = rangy.getSelection()

  const traverseTextNodes = (node, range) => {
    if (node.nodeType === Node.TEXT_NODE) {
      if (!foundStart && node === range.startContainer) {
        start = charIndex + range.startOffset
        foundStart = true
      }

      if (foundStart && node === range.endContainer) {
        end = charIndex + range.endOffset
        foundEnd = true
      }

      charIndex += node.length
    } else {
      const childNodesCount = node.childNodes.length

      for (let i = 0; i < childNodesCount; ++i) {
        traverseTextNodes(node.childNodes[i], range)
        if (foundEnd) {
          break
        }
      }
    }
  }

  if (sel.rangeCount) {
    traverseTextNodes(element, sel.getRangeAt(0))
  }

  return [start, end]
}

function setCaretPositionWithCorrection (element, position) {
  let startCorrection = 0
  let endCorrection = 0

  setCECaretPosition(element, position)
  let currentPosition = getCECaretPosition(element)
  // see Bug https://bugs.webkit.org/show_bug.cgi?id=66630
  while (position.start !== currentPosition[0]) {
    position.start -= 1 // go back one more position.
    if (position.start < 0) {
      // never go beyond 0
      break
    }
    setCECaretPosition(element, position)
    currentPosition = getCECaretPosition(element)
    startCorrection += 1
  }

  while (position.end !== currentPosition[1]) {
    position.end += 1 // go forward one more position.
    setCECaretPosition(element, position)
    currentPosition = getCECaretPosition(element)
    endCorrection += 1
    if (endCorrection > 10) {
      // XXX avoid rare case of infinite loop here.
      break
    }
  }

  return [startCorrection, endCorrection]
}

/**
 * Set the caret position in the div.
 * @param {Element} element The content editable div element
 * @param {number} position an object with start and end properties.
 */
function setCECaretPosition (element, position) {
  let nextCharIndex
  let charIndex = 0
  const range = rangy.createRange()
  let foundStart = false
  let foundEnd = false

  range.collapseToPoint(element, 0)

  const traverseTextNodes = (node) => {
    if (node.nodeType === 3) {
      nextCharIndex = charIndex + node.length

      if (!foundStart && position.start >= charIndex && position.start <= nextCharIndex) {
        range.setStart(node, position.start - charIndex)
        foundStart = true
      }

      if (foundStart && position.end >= charIndex && position.end <= nextCharIndex) {
        range.setEnd(node, position.end - charIndex)
        foundEnd = true
      }

      charIndex = nextCharIndex
    } else {
      for (let i = 0, len = node.childNodes.length; i < len; ++i) {
        traverseTextNodes(node.childNodes[i])
        if (foundEnd) {
          rangy.getSelection().setSingleRange(range)
          break
        }
      }
    }
  }

  traverseTextNodes(element)
}

function replaceTextInCE (element, replacement, start, end) {
  const correction = setCaretPositionWithCorrection(element, { start, end })

  const selection = rangy.getSelection()
  const range = selection.getRangeAt(0)

  if (correction[0] > 0) {
    replacement = selection.toString().substring(0, correction[0]) + replacement
  }

  const textNode = document.createTextNode(replacement)
  range.deleteContents()
  range.insertNode(textNode)
  range.commonAncestorContainer.normalize()
  start = end = start + replacement.length - correction[0]
  setCaretPositionWithCorrection(element, { start, end })
}

export {
  replaceTextInCE,
  getCECaretPosition
}
