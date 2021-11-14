import { example } from "./data.js";
import data from "./data/pokemon/pokemon.js";

const pokeArr = data.pokemon;
console.log(example, data);
const container = document.querySelector("#cardContainer");

const drawExtendedCard = (pokemon) => {
  const container = document.createElement('article');

  container.innerHTML = `<article>
    <h2>${pokemon.name}</h2>
    <span>#${pokemon.num}</span>
    <section>
      <img src="${pokemon.img}" alt="imagen">
      <div>
        <p>${pokemon.about}</p>
        <div>
          <ul>
            <li>
              <span>Height</span>
              <span>${pokemon.size.height}</span>
            </li>
            <li>
              <span>Weight</span>
              <span>${pokemon.size.weight}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <button>Explore More Pokémon</button>
  </article>`

return container;
};

const drawCard = (pokemon) => {
  const card = document.createElement("li");
  card.className = "pokemonCard";

  card.innerHTML = `
  <figure>
    <img src="${pokemon.img}" alt="${pokemon.name} picture">
  </figure>
  <div class="pokemon-info">
    <p>#${pokemon.num}</p>
    <h5>${pokemon.name}</h5>
    <div class="abilities">
      ${pokemon.type.map(
        (type) => `<span class="type-tag ${type}-tag">${type}<span>`
      )}
    </div>
  </div>`;

  card.addEventListener("click", () => {
    console.log(pokemon);
    container.innerHTML = '';
    container.appendChild(drawExtendedCard(pokemon));
  });

  return card;
};



window.addEventListener("load", () => {
  pokeArr.map((pokemon) => {
    container.appendChild(drawCard(pokemon));
  });
});
