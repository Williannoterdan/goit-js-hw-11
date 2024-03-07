
import fetchImage from './js/pixabay-api';
import gleriBig from "./js/render-functions";

const search = document.querySelector('button[data-search]');
const texSearch = document.querySelector('input[data-search]');
const gallery = document.querySelector('ul[data-galery]');
search.addEventListener('click', () => {
  gallery.innerHTML = '';
  console.log(texSearch.value);
  fetchImage(texSearch.value).then(galeryHtml => {
    gallery.insertAdjacentHTML('afterbegin', galeryHtml);
  });

        
  
});
document.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

gleriBig();
});


