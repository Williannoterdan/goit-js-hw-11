import{i as n,S as d}from"./assets/vendor-39d661cd.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p=document.querySelector("button[data-search]"),o=document.querySelector("input[data-search]"),c=document.querySelector("ul[data-galery]");p.addEventListener("click",()=>{console.log(o.value),fetch(`https://pixabay.com/api/?key=41882079-7b8447de07a92fa31409d09e7&q="${o.value}"&image_type=photo&orientation=horizontal&safesearch=true`).then(a=>{if(!a.ok)throw new Error(a.status);return console.log(a),a.json()}).then(a=>{let s=a.hits;s.length<1&&n.error({title:"❌",message:"Rejected"}),console.log(s),c.innerHTML="";let i=s.map(t=>`<li class="gallery" onclick="return false">
                    <a class="gallery-link" href="${t.largeImageURL}" > 
                    <img
                        class="gallery-image"
                        
              class="gallery-image"
              src="${t.largeImageURL}"
              date-largeiimmage="${t.largeImageURL}"
              alt="${t.tags}"/ 
                    />
                     
                     <div class="desription">
                          <div>
                             <p class="detal-description">Likes</p>
                             <p class="detal-namber">${t.likes}</p>
                          </div>
                          <div>
                              <p class="detal-description">Views</p>
                              <p class="detal-namber">${t.views}</p>
                          </div>
                          <div>
                              <p class="detal-description">Comments</p>
                              <p class="detal-namber">${t.views}</p>

                          </div>
                          <div>
                              <p class="detal-description">Downloads</p>
                              <p class="detal-namber">${t.downloads}</p>
                          </div>
                        </div>
                  </a>
                </li>`).join("");c.insertAdjacentHTML("afterbegin",i),new d(".gallery a",{})})});
//# sourceMappingURL=commonHelpers.js.map
