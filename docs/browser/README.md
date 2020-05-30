# In Browser

## Keyman web

Swanalekha is available to use online from <a href="https://keymanweb.com/#ml-IN,Keyboard_swanalekha_malayalam">keymanweb
    website.</a>

## Swanalekha JavaScript version
Press
<kbd>control+m</kbd>  to enable and disable swanalekha.
<script src="/js/swanalekha-ml.js"></script>
<textarea id="exampletxt"></textarea>
 <script>
window.onload = function () {
    let element = document.getElementById('exampletxt');
    new Swanalekha(element, {
        enabled: true
    });
};
</script>
<style>
    #exampletxt{
        width: 100%;
        height: 20vh;
        font-size: 1.2em;
        font-family:"Manjari", sans-serif;
    }
    .swanalekha { border-left: 3px solid #cc0000; }
</style>
### Usage

To use this transliteration scheme in your webpage, include the following line your html
pages.

```<script src="https://swanalekha.smc.org.in/js/swanalekha-ml.js"></script>```

Then bind swanalekha to textareas and input fields. Example:

```
new Swanalekha( document.getElementById( 'id-of-input-field' ) );
```

By default, the swanalekha input method is not enabled. It is enabled when users press  control+m in the input field. If you want the input method enabled by default, pass it as an option.

```
new Swanalekha( document.getElementById( 'id-of-input-field' ), {
enabled:true
} );
```

Once enabled, the input field will have a class swanalekha. This class can be used for providing
any kind of
visual indication that input method is enabled. This page uses the following style to indicate
swanalekha
is enabled.

```.swanalekha { border-left: 3px solid #cc0000; }```

If you want to use Swanalekha in contenteditable elements, please include this js file in the
page.

```<script src="https://swanalekha.smc.org.in/js/rangy-core.js"></script>```

## Browser extensions

::: warning
Not actively maintained.
:::

Swanalekha is available as browser extension for Firefox and Chrome

![](/img/swanalekha-web-fb.jpg)
![](/img/swanakekha-web-gmail.jpg)
![](/img/swanakekha-web-whatsapp.jpg)

* <a class="btn btn-download" href="https://addons.mozilla.org/en-US/firefox/addon/swanalekha-ml/">Firefox extension</a>
* <a class="btn btn-download" href="https://chrome.google.com/webstore/detail/%E0%B4%B8%E0%B5%8D%E0%B4%B5%E0%B4%A8%E0%B4%B2%E0%B5%87%E0%B4%96-swanalekha/najmphaghaibepbadmhjbngnkfehichf">Chrome extension</a>