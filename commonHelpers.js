import{i as f,S as m}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(i){if(i.length>0)return fetch(`https://pixabay.com/api/?key=41882079-7b8447de07a92fa31409d09e7&q="${i}"&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()});f.error({title:"❌",message:"Ned word"})}function g(i,s){i.then(r=>{let a=r.hits;a.length<1&&iziToast.error({title:"❌",message:"Rejected"});let e=a.map(o=>`<li class="gallery" onclick="return false" >
                      <div class="loader position"></div>      
                    <a class="gallery-link" href="${o.largeImageURL}" > 
                    <img                      
              class="gallery-off"
              src="${o.largeImageURL}"
              date-largeiimmage="${o.largeImageURL}"
              alt="${o.tags}"
                    />
   
                     <div class="desription gallery-off">
                          <div>
                             <p class="detal-description">Likes</p>
                             <p class="detal-namber">${o.likes}</p>
                          </div>
                          <div>
                              <p class="detal-description">Views</p>
                              <p class="detal-namber">${o.views}</p>
                          </div>
                          <div>
                              <p class="detal-description">Comments</p>
                              <p class="detal-namber">${o.views}</p>

                          </div>
                          <div>
                              <p class="detal-description">Downloads</p>
                              <p class="detal-namber">${o.downloads}</p>
                          </div>
                        </div>
                  </a>
                </li>`).join("");s.insertAdjacentHTML("afterbegin",e);let t=document.querySelectorAll("img"),n=document.querySelectorAll(".loader"),u=document.querySelectorAll(".desription"),c=0;for(const o of t)o.onload=function(){if(c+=1,console.log(c),c==20){console.log("Finish loaded");for(const l of n)l.removeAttribute("class");for(const l of u)l.removeAttribute("class"),l.setAttribute("class","desription");for(const l of t)l.removeAttribute("class"),l.setAttribute("class","gallery-image");console.log(o.attributes)}}})}const y=document.querySelector("button[data-search]"),h=document.querySelector("input[data-search]"),d=document.querySelector("ul[data-galery]");y.addEventListener("click",()=>{d.innerHTML="",g(p(h.value),d),window.onload=function(){console.log("Loaded1")}});window.onload=function(){console.log("Loaded2")};document.addEventListener("click",i=>{window.onload=function(){console.log("Loaded3")},new m(".gallery a",{captions:!0,captionSelector:"img",captionsData:"alt",captionDelay:250})});
//# sourceMappingURL=commonHelpers.js.map
