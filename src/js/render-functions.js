
import 'simplelightbox/dist/simple-lightbox.min.css';

export default function renderImage(imagesResorch, gallery) {
  imagesResorch.then(response => {
    let images = response.hits;
    if (images.length < 1) {
      iziToast.error({
        title: '❌',
        message: `Rejected`,
      });
    }
    let galeryHtml = images
      .map(
        x =>
          `<li class="gallery" onclick="return false" >
                      <div class="loader position"></div>      
                    <a class="gallery-link" href="${x.largeImageURL}" > 
                    <img                      
              class="gallery-off"
              src="${x.largeImageURL}"
              date-largeiimmage="${x.largeImageURL}"
              alt="${x.tags}"
                    />
   
                     <div class="desription gallery-off">
                          <div>
                             <p class="detal-description">Likes</p>
                             <p class="detal-namber">${x.likes}</p>
                          </div>
                          <div>
                              <p class="detal-description">Views</p>
                              <p class="detal-namber">${x.views}</p>
                          </div>
                          <div>
                              <p class="detal-description">Comments</p>
                              <p class="detal-namber">${x.views}</p>

                          </div>
                          <div>
                              <p class="detal-description">Downloads</p>
                              <p class="detal-namber">${x.downloads}</p>
                          </div>
                        </div>
                  </a>
                </li>`
      )
      .join('');
    gallery.insertAdjacentHTML('afterbegin', galeryHtml);
    let imgControl = document.querySelectorAll('img');
    let loadControl = document.querySelectorAll('.loader');
        let descControl = document.querySelectorAll('.desription');
    let counter = 0;
    for (const img of imgControl) { 
         img.onload = function () {
           counter += 1;
           console.log(counter);
               if (counter == 20) {
                 console.log('Finish loaded');
                 for (const load of loadControl) {
                   load.removeAttribute('class');
                   
                 }
                 for (const desc of descControl) {
                   desc.removeAttribute("class")
                              desc.setAttribute('class', 'desription');
                 }
                 for (const img of imgControl) {
                                    img.removeAttribute('class');
                   img.setAttribute('class', 'gallery-image');
                   
                 }

                 console.log(img.attributes);
               }
      };     
    }
  });
}
