function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e,o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function m(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=m(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var e=r.test(t);return e||u.test(t)?f(t.slice(2),e?2:8):i.test(t)?NaN:+t}e=function(t,n,e){var o,i,r,u,f,a,c=0,l=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(n){var e=o,r=i;return o=i=void 0,c=n,u=t.apply(r,e)}function h(t){return c=t,f=setTimeout(w,n),l?b(t):u}function j(t){var e=t-a;return void 0===a||e>=n||e<0||s&&t-c>=r}function w(){var t=v();if(j(t))return T(t);f=setTimeout(w,function(t){var e=n-(t-a);return s?p(e,r-(t-c)):e}(t))}function T(t){return f=void 0,g&&o?b(t):(o=i=void 0,u)}function x(){var t=v(),e=j(t);if(o=arguments,i=this,a=t,e){if(void 0===f)return h(a);if(s)return f=setTimeout(w,n),b(a)}return void 0===f&&(f=setTimeout(w,n)),u}return n=y(n)||0,m(e)&&(l=!!e.leading,r=(s="maxWait"in e)?d(y(e.maxWait)||0,n):r,g="trailing"in e?!!e.trailing:g),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=i=f=void 0},x.flush=function(){return void 0===f?u:T(v())},x};const g=document.querySelector("#search-box"),b=document.querySelector(".country-list");document.querySelector(".country-info");b.style.padding=0,g.addEventListener("input",t(e)((function(t){const n=t.target.value.trim();if(""===n)return void(b.innerHTML="");(e=n,fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,capital,population,flags,languages`).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()}))).then((t=>{console.log(t),function(t){const n=t.map((t=>`<li style="list-style: none; margin-bottom: 10px; margin-left: 10px">\n      <img src="${t.flags.svg}" alt="Флаг ${t.name.official}" width=25>\n      <span>${t.name.official}</span>\n        </li>`)).join("");b.innerHTML=n}(t)})).catch((t=>console.log(t)));var e}),300));
//# sourceMappingURL=index.84851a8e.js.map
