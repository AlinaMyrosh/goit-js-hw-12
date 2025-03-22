import { fetchImages } from './js/pixabay-api.js';
import {
  showErrorMessage,
  createMarkup,
  showLoadingIndicator,
  hideLoadingIndicator,
} from './js/render-functions.js';

const searchform = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

searchform.addEventListener('submit', toSearch);

function toSearch(event) {
  event.preventDefault();

  showLoadingIndicator();

  const inputValue = event.target.elements['search-text'].value.trim();

  if (!inputValue) {
    showErrorMessage('You forgot important data');
    return;
  }

  fetchImages(inputValue)
    .then(hits => {
      if (!hits.length) {
        showErrorMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      hideLoadingIndicator();
      createMarkup(hits, gallery);
    })
    .catch(error => console.log(error));
}
