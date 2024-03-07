import{i as c,S as d}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();function u(r){return fetch(`https://pixabay.com/api/?key=41882079-7b8447de07a92fa31409d09e7&q="${r}"&image_type=photo&orientation=horizontal&safesearch=true`).then(i=>{if(!i.ok)throw new Error(i.status);return console.log(i),i.json()}).then(i=>{let a=i.hits;return a.length<1&&c.error({title:"❌",message:"Rejected"}),console.log(a),a.map(e=>`<li class="gallery" onclick="return false">
                    <a class="gallery-link" href="${e.largeImageURL}" > 
                    <img                      
              class="gallery-image"
              src="${e.largeImageURL}"
              date-largeiimmage="${e.largeImageURL}"
              alt="${e.tags}"/ 
                    />
                     
                     <div class="desription">
                          <div>
                             <p class="detal-description">Likes</p>
                             <p class="detal-namber">${e.likes}</p>
                          </div>
                          <div>
                              <p class="detal-description">Views</p>
                              <p class="detal-namber">${e.views}</p>
                          </div>
                          <div>
                              <p class="detal-description">Comments</p>
                              <p class="detal-namber">${e.views}</p>

                          </div>
                          <div>
                              <p class="detal-description">Downloads</p>
                              <p class="detal-namber">${e.downloads}</p>
                          </div>
                        </div>
                  </a>
                </li>`).join("")})}function p(){new d(".gallery a",{captions:!0,captionSelector:"img",captionsData:"alt",captionDelay:250}).on("show.simplelightbox",function(){console.log("ddd")})}const g=document.querySelector("button[data-search]"),s=document.querySelector("input[data-search]"),n=document.querySelector("ul[data-galery]");g.addEventListener("click",()=>{n.innerHTML="",console.log(s.value),u(s.value).then(r=>{n.insertAdjacentHTML("afterbegin",r)})});document.addEventListener("click",r=>{r.preventDefault(),r.target.nodeName==="IMG"&&p()});
//# sourceMappingURL=commonHelpers.js.map
