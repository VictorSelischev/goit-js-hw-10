document.querySelector("#search-box");const t=document.querySelector(".country-list");document.querySelector(".country-info");var n;t.style.padding=0,(n="https://restcountries.com/v2/all?fields=name,capital,population,flags,languages",fetch(n).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()}))).then((n=>{console.log(n),function(n){const o=n.map((t=>`<li style="list-style: none; margin-bottom: 10px; margin-left: 10px">\n      <img src="${t.flags.svg}" alt="Флаг ${t.name}" width=25>\n      <span style="font-size: 28px; margin-bottom: 10px"><b>${t.name}</b></span>\n      <p style="margin-bottom: 10px"><b>Capital</b>: ${t.capital}</p>\n      <p style="margin-bottom: 10px"><b>Population</b>: ${t.population}</p>\n      <p style="margin-bottom: 10px"><b>Languages</b>: ${t.languages}</p>\n        </li>`)).join("");t.innerHTML=o}(n)})).catch((t=>console.log(t)));
//# sourceMappingURL=index.17818302.js.map
