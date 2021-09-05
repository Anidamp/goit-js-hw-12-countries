const BASE_URL = 'https://restcountries.eu/rest/v2/name';

function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/${searchQuery}`).then(r => {
    console.log(r);
    if (!r.ok) {
      throw new Error(r.status);
    }
    return r.json();
  });
}

export default { fetchCountries };
