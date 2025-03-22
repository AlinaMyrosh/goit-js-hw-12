import axios from 'axios';

const API_KEY = '49461257-d92cdcbbc0ac75fcae3d36a6d';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(inputValue) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: inputValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data.hits;
    });
}
