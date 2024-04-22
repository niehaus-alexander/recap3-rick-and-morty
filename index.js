import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States


const searchQuery = "";
const maxPage = 1;
const page = 1;
const pageUrl = "https://rickandmortyapi.com/api/character";




async function fetchData()  {

const response = await fetch(pageUrl)
const data = await response.json();
data.results.forEach((person) => {
  console.log(person.episode.length);
  
  const input = CharacterCard(person.image, person.name, person.episode.length, person.status, person.type);
  
  cardContainer.append(input);

})};



fetchData();

