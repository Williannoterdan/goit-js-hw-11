const search = document.querySelector('button[data-search]');
const texSearch = document.querySelector('input[data-search]');
const imageList = document.querySelector('ul[data-galery]');
console.log('imageList', imageList);
search.addEventListener('click', () => {
  console.log('LK');
  console.log(texSearch.value);

  fetch(
    `https://pixabay.com/api/?key=41882079-7b8447de07a92fa31409d09e7&q="${texSearch.value}"&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(re => {
      console.log(re.hits);
      for (const his of re.hits) {
        console.log(his.previewURL);
        imageList.insertAdjacentHTML(
          'afterbegin',
          `<li class="gallery-item" onclick="return false">
                    <a class="gallery-link" href="" > 
                    <img
                        class="gallery-image"
                        src="${his.largeImageURL}"
                        date-largeiimmage="${his.largeImageURL}"
                        alt="${his.tags}"/>
                        <div class="desription">
                      <div>
                       <ul class="desription-ul">
                        <li><p class="detal-description">Likes</p></li>
                        <li><p class="detal-namber>${his.likes}</p></li>
                        </ul>
                        <ul class="desription-ul">
                        <li><p class="detal-description">Views</p></li>
                        <li><p>${his.views}</p></li>
                        </ul>
                        <ul class="desription-ul">
                        <li><p class="detal-description">Comments</p></li>
                        <li><p> ${his.views}</p></li>
                        </ul>
                        <ul class="desription-ul">
                        <li><p class="detal-description">Downloads</p></li>
                        <li><p> ${his.downloads}</p></li>
                        </ul>
                        </div>
                      </div>  
                     </a>
                </li>`
        );
      }
    });
});
