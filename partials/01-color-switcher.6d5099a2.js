!function(){var t={buttonStart:document.querySelector("[data-start]"),buttonStop:document.querySelector("[data-stop]")};var o=null;t.buttonStart.addEventListener("click",(function(n){o=setInterval((function(){return document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.buttonStart.disabled=!0})),t.buttonStop.addEventListener("click",(function(n){clearInterval(o),t.buttonStart.disabled=!1,document.body.style.backgroundColor="#fff"}))}();
//# sourceMappingURL=01-color-switcher.6d5099a2.js.map