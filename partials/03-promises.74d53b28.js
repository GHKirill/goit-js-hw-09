function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");let u=null;const l={form:document.querySelector("form"),inputs:document.querySelectorAll("input"),button:document.querySelector("button")};function d(e,t){return new Promise(((o,n)=>{Math.random()>.3?setTimeout((()=>o({position:e,delay:t})),t):setTimeout((()=>n({position:e,delay:t})),t)}))}[...l.inputs].forEach((e=>e.style.width="100px")),l.form.addEventListener("submit",(function(t){const o=Number(l.form.delay.value),n=Number(l.form.step.value),r=Number(l.form.amount.value);t.preventDefault();for(let t=0;t<r;t+=1){d(t+1,o+n*t).then((({position:t,delay:o})=>{e(i).Notify.success(`Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`Rejected promise ${t} in ${o}ms`)})),u=o+n*r+2500}s=u,l.button.disabled=!0,setTimeout((()=>l.button.disabled=!1),s);var s}));
//# sourceMappingURL=03-promises.74d53b28.js.map
