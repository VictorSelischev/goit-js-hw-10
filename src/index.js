import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

countryList.style.padding = 0;


fetchCountries('https://restcountries.com/v2/all?fields=name,capital,population,flags,languages')
.then(country => {
    console.log(country);
    renderUserList(country);
  })
  .catch(error => console.log(error));







// ================================
// FUNCTION



function renderUserList(users) {
  const markup = users
    .map(user => {
      // return `<li style="list-style: none; margin-bottom: 10px; margin-left: 10px">
      // <img src="${user.flags.svg}" alt="Флаг ${user.name}" width=25>
      // <span>${user.name}</span>
      //   </li>`;
      return `<li style="list-style: none; margin-bottom: 10px; margin-left: 10px">
      <img src="${user.flags.svg}" alt="Флаг ${user.name}" width=25>
      <span style="font-size: 28px; margin-bottom: 10px"><b>${user.name}</b></span>
      <p style="margin-bottom: 10px"><b>Capital</b>: ${user.capital}</p>
      <p style="margin-bottom: 10px"><b>Population</b>: ${user.population}</p>
      <p style="margin-bottom: 10px"><b>Languages</b>: ${user.languages}</p>
        </li>`;
    })
    .join('');
  countryList.innerHTML = markup;
}


