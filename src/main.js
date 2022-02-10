import { reduceData, filterData, sortData } from "./data.js";
import data from "./data/pokemon/pokemon.js";

const pokeArr = data.pokemon;
let filters = [];

const container = document.querySelector("#cardContainer");
const filterBtn = document.querySelector("#filter");
const orderBtn = document.querySelector("#order");

const drawExtendedCard = (pokemon) => {
  const card = document.createElement("article");
  card.className = "extended-card";

  card.innerHTML = `<section class="card-title">
      <h2>${pokemon.name} <span>#${pokemon.num}</span></h2>
    </section>
    <section class="card-body">
      <figure>
        <img src="${pokemon.img}" alt="imagen">
      </figure>
      <div class="card-info">
        <p class="card-about">${pokemon.about}</p>
        <div class="details">
          <p>
            <span>Height</span>
            <span>${pokemon.size.height}</span>
          </p>
          <p>
            <span>Weight</span>
            <span>${pokemon.size.weight}</span>
          </p>
          <p>
            <span>Generation</span>
            <span>${pokemon.generation.name}</span>
          </p>
        </div>
      </div>
    </section>
    <section class="card-types">
      <h3>Type</h3>
      ${pokemon.type.map(
        (type) => `<span class="type-tag ${type}-tag">${type}<span>`
      )}
      <h4>Resistant</h4>
      ${pokemon.resistant.map(
        (type) => `<span class="type-tag ${type}-tag">${type}<span>`
      )}
      <h4>Weaknesses</h4>
      ${pokemon.weaknesses.map(
        (type) => `<span class="type-tag ${type}-tag">${type}<span>`
      )}
    </section>
    <button>Explore More Pokémon</button>`;

  card.querySelector("button").addEventListener("click", () => {
    container.innerHTML = "";
    pokeArr.map((data) => {
      container.appendChild(drawCard(data));
    });
  });

  return card;
};

const drawCard = (pokemon) => {
  const card = document.createElement("li");
  card.className = "basic-card";

  card.innerHTML = `
  <figure>
    <img src="${pokemon.img}" alt="${pokemon.name} picture">
  </figure>
  <section>
    <p>#${pokemon.num}</p>
    <h5>${pokemon.name}</h5>
    <div class="abilities">
      ${pokemon.type.map(
        (element) => `<span class="type-tag ${element}-tag">${element}<span>`
      )}
    </div>
  </section>`;

  card.addEventListener("click", () => {
    container.innerHTML = "";
    container.appendChild(drawExtendedCard(pokemon));
  });

  return card;
};

window.addEventListener("load", () => {
  pokeArr.map((pokemon) => {
    filters.push(pokemon.type);
    container.appendChild(drawCard(pokemon));
  });
  filters = reduceData(filters.flat());
  filters.map(
    (type) => (filterBtn.innerHTML += `<option value=${type}>${type}</option>`)
  );
});

filterBtn.addEventListener("change", (e) => {
  const newData = filterData(pokeArr, e.target.value);
  container.innerHTML = "";
  newData.map((pokemon) => container.appendChild(drawCard(pokemon)));
});

orderBtn.addEventListener("change", (e) => {
  let sortBy = e.target.value;
  const newData = ["low", "high"].includes(sortBy)
    ? sortData(pokeArr, "num", sortBy)
    : sortData(pokeArr, "name", sortBy);
  container.innerHTML = "";
  newData.map((pokemon) => container.appendChild(drawCard(pokemon)));
});
