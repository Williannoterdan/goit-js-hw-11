(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const c=document.querySelector("button[data-search]"),r=document.querySelector("input[data-search]"),a=document.querySelector("ul[data-galery]");console.log("imageList",a);c.addEventListener("click",()=>{console.log("LK"),console.log(r.value),fetch(`https://pixabay.com/api/?key=41882079-7b8447de07a92fa31409d09e7&q="${r.value}"&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{console.log(t.hits);for(const l of t.hits)console.log(l.previewURL),a.insertAdjacentHTML("afterbegin",`<li class="gallery-item" onclick="return false" >
            <a class="gallery-link"  href="${l.largeImageURL}"> 
              <img
              class="gallery-image"
              src="${l.largeImageURL}"
              date-largeiimmage="${l.largeImageURL}"
              alt="${l.tags}"/>
                <div class="desription">
                  <ul class="desription-ul">
                          <div>
                            <ul>
                             <li><p class="detal-description">Likes</p></li>
                             <li><p class="detal-namber">${l.likes}</p></li>
                            </ul>
                          </div>
                          <div>
                             <ul class="desription-ul">
                              <li><p class="detal-description">Views</p></li>
                              <li><p>${l.views}</p></li>
                             </ul>
                          </div>
                          <div>
                            <ul class="desription-ul">
                              <li><p class="detal-description">Comments</p></li>
                              <li><p> ${l.views}</p></li>
                            </ul>
                          </div>
                          <div>
                            <ul class="desription-ul">
                              <li><p class="detal-description">Downloads</p></li>
                              <li><p> ${l.downloads}</p></li>
                          </div>
                  </ul>
                </div>  
            </a>
          </li>`)})});
//# sourceMappingURL=commonHelpers.js.map
