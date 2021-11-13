import { example } from "./data.js";
import data from "./data/pokemon/pokemon.js";

const pokeArr = data.pokemon;
console.log(example, data);
const container = document.querySelector("#cardContainer");

const drawCard = (pokemon) => {
  return `<li>
    <figure>
      <img src="${pokemon.img}" alt="${pokemon.name} picture">
    </figure>
    <div class="pokemon-info">
      <p>#${pokemon.num}</p>
      <h5>${pokemon.name}</h5>
      <div>
        ${pokemon.type.map(type => `<span class="${type}-btn">${type}<span>`)}
      </div>
    </div>
  </li>`;
};

window.addEventListener("load", () => {
  pokeArr.map((pokemon) => {
    container.innerHTML += drawCard(pokemon);
  });
});
