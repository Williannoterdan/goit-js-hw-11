import{S as n}from"./assets/vendor-ef88c69a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=document.querySelector("button[data-search]"),o=document.querySelector("input[data-search]"),c=document.querySelector("ul[data-galery]");d.addEventListener("click",()=>{console.log(o.value),fetch(`https://pixabay.com/api/?key=41882079-7b8447de07a92fa31409d09e7&q="${o.value}"&image_type=photo&orientation=horizontal&safesearch=true`).then(a=>{if(!a.ok)throw new Error(a.status);return console.log(a),a.json()}).then(a=>{let s=a.hits;console.log(s),c.innerHTML="",c.insertAdjacentHTML("afterbegin",s.map(r=>`<li class="gallery" onclick="return false">
                    <a class="gallery-link" href="${r.largeImageURL}" > 
                    <img
                        class="gallery-image"
                        
              class="gallery-image"
              src="${r.largeImageURL}"
              date-largeiimmage="${r.largeImageURL}"
              alt="${r.tags}"/ 
                    />
                     
                     <div class="desription">
                          <div>
                             <p class="detal-description">Likes</p>
                             <p class="detal-namber">${r.likes}</p>
                          </div>
                          <div>
                              <p class="detal-description">Views</p>
                              <p class="detal-namber">${r.views}</p>
                          </div>
                          <div>
                              <p class="detal-description">Comments</p>
                              <p class="detal-namber">${r.views}</p>

                          </div>
                          <div>
                              <p class="detal-description">Downloads</p>
                              <p class="detal-namber">${r.downloads}</p>
                          </div>
                        </div>
                  </a>
                </li>`).join("")),new n(".gallery a",{})})});
//# sourceMappingURL=commonHelpers.js.map
