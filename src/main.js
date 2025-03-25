import { fetchImages } from './js/pixabay-api.js';
import {
  showErrorMessage,
  createMarkup,
  showLoadingIndicator,
  hideLoadingIndicator,
} from './js/render-functions.js';

const searchform = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

searchform.addEventListener('submit', toSearch);

async function toSearch(event) {
  event.preventDefault();

  showLoadingIndicator();

  const inputValue = event.target.elements['search-text'].value.trim();

  if (!inputValue) {
    showErrorMessage('You forgot important data');
    return;
  }

  try {
    const hits = await fetchImages(inputValue);
    if (!hits.length) {
      showErrorMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
    createMarkup(hits, gallery);
  } catch (error) {
    showErrorMessage('Failed to load images. Please try again!');
  } finally {
    hideLoadingIndicator();
  }
}
