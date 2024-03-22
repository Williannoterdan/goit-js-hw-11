import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';

export default function fetchImage(text) {
  if (text.length > 0) {
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
