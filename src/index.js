import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
countryList.style.padding = 0;

inputRef.addEventListener('input', debounce(handleFindCountryInput, DEBOUNCE_DELAY));



// ================================
// FUNCTION

function handleFindCountryInput(event) {
  // console.log(event);

  const nameCountry = event.target.value.trim();
  
    if (nameCountry === '') {
    countryList.innerHTML = '';
    return;
  }

  fetchCountries(nameCountry)
    .then(country => {
      console.log(country);
      renderCountriesList(country);
    })
    .catch(error => console.log(error));
  
}


function renderCountriesList(users) {
  const markup = users
    .map(user => {
      return `<li style="list-style: none; margin-bottom: 10px; margin-left: 10px">
      <img src="${user.flags.svg}" alt="Флаг ${user.name.official}" width=25>
      <span>${user.name.official}</span>
        </li>`;
    })
    .join('');
  countryList.innerHTML = markup;
}

function renderCountryInfo(users) {
  const markup = users
    .map(user => {
      return `<li style="list-style: none; margin-bottom: 10px; margin-left: 10px">
      <img src="${user.flags.svg}" alt="Флаг ${user.name.official}" width=25>
      <span style="font-size: 28px; margin-bottom: 10px"><b>${user.name.official}</b></span>
      <p style="margin-bottom: 10px"><b>Capital</b>: ${user.capital}</p>
      <p style="margin-bottom: 10px"><b>Population</b>: ${user.population}</p>
      <p style="margin-bottom: 10px"><b>Languages</b>: ${user.languages}</p>
        </li>`;
    })
    .join('');
  countryList.innerHTML = markup;
}


