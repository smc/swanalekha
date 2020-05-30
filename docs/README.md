---
home: true
heroImage: /hero.png
actionText: Get Started →
actionLink: /guide/
footer: A project from Swathanthra Malayalam Computing | GPL Licensed | Copyright © 2008-present Santhosh Thottingal
---
<div class="features">
  <div class="feature">
    <h2>Save time. Learn with confidence.</h2>
    <p>To start using Swanalekha you don't need to learn any key mapping. Start with the common manglish you  are familiar with.</p>
  </div>
   <div class="feature">
    <h2>Free and opensource</h2>
    <p>Swanalekha is free and opensource. It works offline and does not collect any of your data.</p>
  </div>
  <div class="feature">
    <h2>Available in desktops and mobile</h2>
    <p>With the SMC's Indic keyboard, the same input method is available in your android mobile. You don't need to learn another input method for mobile.</p>
  </div>
</div>

## Try it right now!

Press <kbd>control+m</kbd>  to enable and disable swanalekha.
<script src="/js/swanalekha-ml.js"></script>
<textarea id="tryit"></textarea>
 <script>
window.onload = function () {
    let element = document.getElementById('tryit');
    new Swanalekha(element, {
        enabled: true
    });
};
</script>
<style>
    #tryit{
        width: 100%;
        height: 20vh;
        font-size: 1.2em;
        font-family:"Manjari", sans-serif;
    }
    .swanalekha { border-left: 3px solid #cc0000; }
</style>

## Contributors

* Santhosh Thottingal
* Ramesh Kunnappully - Keyman version
* Anoop Panavalappil - Browser extensions
* Jishnu Mohan - Indic keyboard
