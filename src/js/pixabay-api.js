import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
const gallery = document.querySelector('ul[data-galery]');
let loadImitatior = `<li class="gallery" onclick="return false">
<div class="loader"></div>
                </li>`;
                

export default function fetchImage(text) {
  if (text.length > 0) {
    gallery.insertAdjacentHTML('afterbegin', loadImitatior)
    let date = fetch(
      `https://pixabay.com/api/?key=41882079-7b8447de07a92fa31409d09e7&q="${text}"&image_type=photo&orientation=horizontal&safesearch=true`
    )
      .then(response => {
        document.body;
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      })
    
    return date;
  }
  else {
    iziToast.error({
      title: '❌',
      message: `Ned word`,
    });
  }
}
