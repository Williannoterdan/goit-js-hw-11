import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export default function gleriBig() {
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
});
lightbox.on('show.simplelightbox', function () {
  console.log('ddd');
});
}