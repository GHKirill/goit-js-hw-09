!function(){var t={buttonStart:document.querySelector("[data-start]"),buttonStop:document.querySelector("[data-stop]")};t.buttonStop.disabled=!0;var o=null;t.buttonStart.addEventListener("click",(function(n){o=setInterval((function(){return document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.buttonStop.disabled=!1,t.buttonStart.disabled=!0})),t.buttonStop.addEventListener("click",(function(n){clearInterval(o),t.buttonStart.disabled=!1,t.buttonStop.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.4e41104f.js.map