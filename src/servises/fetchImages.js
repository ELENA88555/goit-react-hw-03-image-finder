const BASE_URL = 'https://pixabay.com/api/';
const KEY = '34967862-fbd8ecc1f4086b9a9b18def97';

export const fetchImages = (searchImg, page = 1) => {
  return fetch(
    `${BASE_URL}?q=${searchImg}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
