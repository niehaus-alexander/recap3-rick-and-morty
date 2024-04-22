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
const searchBarInput = document.querySelector('[data-js="input"]');
// States

let searchQuery = "";
const maxPage = 1;
let currentPage = 1;

fetchData(1);

async function fetchData(page) {
  console.log(page);
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const data = await response.json();
  data.results.forEach((person) => {
    // console.log(person.episode.length);

    const input = CharacterCard(
      person.image,
      person.name,
      person.episode.length,
      person.status,
      person.type
    );

    cardContainer.append(input);
  });
}

nextButton.addEventListener("click", () => {
  cardContainer.innerHTML = "";
  currentPage++;
  if (currentPage <= 42) {
    console.log(currentPage);
    fetchData(currentPage);
    pagination.textContent = `${currentPage} / 42`;
  } else {
    alert("out of range");
    currentPage--;
    fetchData(currentPage);
  }
});

prevButton.addEventListener("click", () => {
  cardContainer.innerHTML = "";
  currentPage--;

  if (currentPage >= 1) {
    console.log(currentPage);
    fetchData(currentPage);
    pagination.textContent = `${currentPage} / 42`;
  } else {
    alert("out of range");
    currentPage++;
    fetchData(currentPage);
  }
});

// __________________SEARCH BAR ___________________

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  cardContainer.innerHTML = "";
  searchQuery = searchBarInput.value;
  fetchInput(searchQuery);
});

async function fetchInput(searchQuery) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?name=${searchQuery}`
  );
  const person = await response.json();
  const personCard = person.results;
  personCard.forEach((person) => {
    const personCard = CharacterCard(
      person.image,
      person.name,
      person.episode.length,
      person.status,
      person.type
    );
    cardContainer.append(personCard);
  });
}
fetchInput();
