const t={buttonStart:document.querySelector("[data-start]"),buttonStop:document.querySelector("[data-stop]")};t.buttonStop.disabled=!0;let o=null;t.buttonStart.addEventListener("click",(function(e){o=setInterval((()=>document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`),1e3),t.buttonStop.disabled=!1,t.buttonStart.disabled=!0})),t.buttonStop.addEventListener("click",(function(e){clearInterval(o),t.buttonStart.disabled=!1,t.buttonStop.disabled=!0}));
//# sourceMappingURL=01-color-switcher.aef2c902.js.map