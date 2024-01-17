const search = document.querySelector('button[data-search]');
const texSearch = document.querySelector('input[data-search]');
const imageList = document.querySelector('ul[data-galery]');

search.addEventListener('click', (e) => {
    console.log('LK');
    console.log(texSearch.value);
     
    fetch(
      `https://pixabay.com/api/?key=41882079-7b8447de07a92fa31409d09e7&q="${texSearch.value}"&image_type=photo&orientation=horizontal&safesearch=true`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response;

      })
});



   
      