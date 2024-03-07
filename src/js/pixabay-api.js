import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';

export default function fetchImage(text) {
  let didi = fetch(
    `https://pixabay.com/api/?key=41882079-7b8447de07a92fa31409d09e7&q="${text}"&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      document.body;
      if (!response.ok) {
        throw new Error(response.status);
      }
      console.log(response);
      return response.json();
    })
    .then(response => {
      let images = response.hits;
      if (images.length < 1) {
        iziToast.error({
          title: '❌',
          message: `Rejected`,
        });
      }
      console.log(images);

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

      //   gallery.insertAdjacentHTML('afterbegin', galeryHtml);

      //   var lightbox = new SimpleLightbox('.gallery a', {
      //     /* options */
      //   });

      return galeryHtml;
    });
  return didi;
}
