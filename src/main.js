
import fetchImage from './js/pixabay-api';
import renderImage from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const search = document.querySelector('button[data-search]');
const texSearch = document.querySelector('input[data-search]');
const gallery = document.querySelector('ul[data-galery]');
search.addEventListener('click', () => {
  gallery.innerHTML = '';
  renderImage(fetchImage(texSearch.value), gallery);
        
  
});
document.addEventListener('click', event => {


const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
});


});


