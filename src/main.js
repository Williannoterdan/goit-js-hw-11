
import SimpleLightbox from 'simplelightbox';

const search = document.querySelector('button[data-search]');
const texSearch = document.querySelector('input[data-search]');
const gallery = document.querySelector('ul[data-galery]');
search.addEventListener('click', () => {

  console.log(texSearch.value);
  fetch(
    `https://pixabay.com/api/?key=41882079-7b8447de07a92fa31409d09e7&q="${texSearch.value}"&image_type=photo&orientation=horizontal&safesearch=true`
  )
    
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      console.log(response);
      return response.json();
    })
    .then(response => {
      let images = response.hits;
      console.log(images);
        gallery.innerHTML="";
      gallery.insertAdjacentHTML(
        'afterbegin',
        images
          .map(
            x =>
              `<li class="gallery" onclick="return false">
                    <a class="gallery-link" href="${x.largeImageURL}" > 
                    <img
                        class="gallery-image"
                        
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
          .join('')
      );
            
            var lightbox = new SimpleLightbox('.gallery a', {
              /* options */
            });
    })

    
});

