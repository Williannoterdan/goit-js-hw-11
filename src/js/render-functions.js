
import 'simplelightbox/dist/simple-lightbox.min.css';


export default function renderImage(imagesResorch, gallery) {
  imagesResorch  
    .then(response => {
        gallery.insertAdjacentHTML('afterbegin', `<div class="loader"></div>`);
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
          `<li class="gallery" onclick="return false">
                    <a class="gallery-link" href="${x.largeImageURL}" > 
                    <img                      
              class="gallery-image"
              src="${x.largeImageURL}"
              date-largeiimmage="${x.largeImageURL}"
              alt="${x.tags}"/ 
                    />
                     
                     <div class="desription">
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
  });
}


