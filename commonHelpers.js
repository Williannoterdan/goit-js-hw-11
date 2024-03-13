import{i as n,S as c}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const d=document.querySelector("ul[data-galery]");let u=`<li class="gallery" onclick="return false">
<div class="loader"></div>
                </li>`;function p(i){if(i.length>0)return d.insertAdjacentHTML("afterbegin",u),fetch(`https://pixabay.com/api/?key=41882079-7b8447de07a92fa31409d09e7&q="${i}"&image_type=photo&orientation=horizontal&safesearch=true`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()});n.error({title:"❌",message:"Ned word"})}function m(i,r){i.then(a=>{r.insertAdjacentHTML("afterbegin",'<div class="loader"></div>');let s=a.hits;s.length<1&&iziToast.error({title:"❌",message:"Rejected"});let t=s.map(e=>`<li class="gallery" onclick="return false">
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
                </li>`).join("");r.insertAdjacentHTML("afterbegin",t)})}const f=document.querySelector("button[data-search]"),g=document.querySelector("input[data-search]"),o=document.querySelector("ul[data-galery]");f.addEventListener("click",()=>{o.innerHTML="",m(p(g.value),o)});document.addEventListener("click",i=>{new c(".gallery a",{captions:!0,captionSelector:"img",captionsData:"alt",captionDelay:250})});
//# sourceMappingURL=commonHelpers.js.map
