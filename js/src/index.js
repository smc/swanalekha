/*
 * Copyright (c) 2021 Santhosh Thottingal <santhosh.thottingal@gmail.com>
 * Released under the terms of the MIT license.
 */

import rules from './rules.json'
import { replaceTextInCE, getCECaretPosition } from './contenteditable'

/**
 * Bind swanalekha to the input field
 */
class Swanalekha {
  constructor (element, options = {
    enabled: false
  }) {
    this.rules = rules
    this.patternStart = 0
    this.element = element
    this.patten = ''
    this.tabCount = 0
    this.enabled = options.enabled

    if (this.enabled) {
      this.enable()
    }

    this.listen()
  }

  isToggleEvent (event) {
    // 77 - The letter M, for Ctrl+M
    const keyCode = event.keyCode || event.which
    return (keyCode === 77 && event.ctrlKey)
  }

  keyPressHandler (event) {
    if (this.enabled) {
      return this.process(event)
    } else {
      return true
    }
  }

  enable () {
    this.enabled = true
    this.element.className = this.element.className + ' swanalekha'
  }

  disable () {
    this.enabled = false
    this.element.className = this.element.className.replace('swanalekha', '')
  }

  toggle () {
    if (this.enabled) {
      this.disable()
    } else {
      this.enable()
    }
  }

  keyDownHandler (event) {
    if (this.isToggleEvent(event)) {
      this.toggle()

      event.preventDefault()
      event.stopPropagation()
      return false
    } else {
      const keyCode = event.keyCode || event.which
      if (keyCode === 9) { // backspace
        this.keyPressHandler(event)
      }
    }
  }

  listen () {
    this.element.onkeydown = this.keyDownHandler.bind(this)
    this.element.onkeypress = this.keyPressHandler.bind(this)
  }

  isContentEditable () {
    return this.element.getAttribute('contenteditable')
  }

  /**
  * Returns an array [start, end] of the beginning
  * and the end of the current selection in $element
  */
  getCaretPosition (element) {
    let start = 0; let end = 0

    if (this.isContentEditable()) {
      return getCECaretPosition(element)
    }

    if (typeof element.selectionStart === 'number' && typeof element.selectionEnd === 'number') {
      start = element.selectionStart
      end = element.selectionEnd
    }

    return [start, end]
  }

  replaceText (replacement, start, end) {
    if (this.isContentEditable()) {
      return replaceTextInCE(this.element, replacement, start, end)
    }

    // IE9+ and all other browsers
    const scrollTop = this.element.scrollTop

    // This could be made better if range selection worked on browsers.
    // But for complex scripts, browsers place cursor in unexpected places
    // and it's not possible to fix cursor programmatically.
    // Ref Bug https://bugs.webkit.org/show_bug.cgi?id=66630
    this.element.value = this.element.value.substring(0, start) + replacement + this.element.value.substring(end, this.element.value.length)
    // restore scroll
    this.element.scrollTop = scrollTop
    // set selection
    this.element.selectionStart = this.element.selectionEnd = start + replacement.length
  }

  process (event) {
    const kCode = event.keyCode || event.which

    if (kCode == 8) { // backspace
      this.pattern = this.pattern.replace(/aAeEiIoOuU0-9/g, '')
      this.tabCount = 1
      return
    }
    if (event.ctrlKey || event.altKey || event.metaKey) {
      return true
    }
    const transliteration = this.transliterate(kCode, event)
    if (transliteration) {
      const pos = this.getCaretPosition(this.element)
      const start = this.patternStart
      const end = pos[1]
      this.replaceText(transliteration, start, end)
      return false
    }
    if (kCode === 9) {
      return false
    }
    if (this.tabCount > 1) {
      event.preventDefault()
    }
    return true
  }

  transliterate (kCode) {
    const char = String.fromCharCode(kCode)

    if (kCode === 9) { /* Tab key */
      this.tabCount++
      if (this.pattern !== null || this.pattern !== '') {
        if (this.tabCount === 2) {
          this.pattern = this.pattern + this.tabCount
        } else {
          if (this.rules[this.pattern.substring(0, this.pattern.length - 1) + this.tabCount]) {
            this.pattern = this.pattern.substring(0, this.pattern.length - 1) + this.tabCount
          } else {
            this.tabCount = 1
            this.pattern = this.pattern.substring(0, this.pattern.length - 1)
          }
        }
      }
    } else {
      this.pattern = this.pattern + char
    }
    if (this.pattern.length > 5) {
      this.pattern = ''
      this.tabCount = 1
    }

    let mal = this.rules[this.pattern]
    if (!mal) {
      // Diverge point
      this.pattern = char
      this.tabCount = 1
      this.patternStart = this.getCaretPosition(this.element)[0]
      mal = this.rules[this.pattern]
    }
    return mal
  }
}

export default Swanalekha
