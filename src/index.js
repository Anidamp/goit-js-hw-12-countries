import './sass/main.scss';

import _ from 'lodash';
import cardOneCountry from './templates/oneCountry.hbs';
import cardCountries from './templates/listCountries.hbs';
import API from './js/fetch';
import { showError, showCatchError } from './js/pnotify';
import getRefs from './js/getRefs';

const refs = getRefs();

function searchCountry(e) {
  e.preventDefault();
  const searchQuery = e.target.value;
  API.fetchCountries(searchQuery).then(checkCardCountry).catch(showCatchError);
  resetDOM();
}

refs.input.addEventListener('input', _.debounce(searchCountry, 500));

function resetDOM() {
  refs.card.innerHTML = '';
}

function checkCardCountry(arr) {
  const length = arr.length;
  if (length > 10) {
    showError(length);
    return;
  }
  if (length === 1) {
    refs.card.innerHTML = cardOneCountry(arr);
    return;
  }
  refs.card.innerHTML = cardCountries(arr);
}
