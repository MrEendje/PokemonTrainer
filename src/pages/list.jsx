import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const types = ["grass", "fire", "water", "electric", "poison", "flying", "normal", "fighting", "psychic", "rock"];

function List() {
  // State
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");


  // Zoekfilter
  const filtered = pokemons.filter((pokemon) => {
    const matchSearch =
      pokemon.name.includes(search.toLowerCase()) ||
      String(pokemon.id) === search;

    const matchType =
      selectedType === "" ||
      pokemon.types.some((t) => t.type.name === selectedType);

    return matchSearch && matchType;
  });


  // Data ophalen
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((res) => res.json())
      .then((data) => {
        const request = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        );
        return Promise.all(request);
      })
      .then((details) => setPokemons(details));
  }, []);

  return (
    <div className="list-page">
      {/* Filter */}
      <aside className="filters">
        <h2>Filters</h2>
        <p className="filter-label">Type</p>
        <div className="type-buttons">
          {types.map((type) => (
            <button
              key={type}
              className={selectedType === type ? "type-button active" : "type-button"}
              onClick={() => setSelectedType(selectedType === type ? "" : type)}
            >
              {type}
            </button>
          ))}
        </div>

      </aside>
      {/* Inhoud */}
      <main className="list-content">
        {/* Titel */}
        <div className="list-title">
          <h1>Pokemon Lijst</h1>
          <p>{filtered.length} resultaten</p>
        </div>

        {/* Zoekbalk */}
        <input
          className="search"
          type="text"
          placeholder="Zoek op naam of nummer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Lijst */}
        <ul className="pokemon-grid">
          {filtered.map((pokemon) => (
            // Card
            <li key={pokemon.name} className={`pokemon-card ${pokemon.types[0].type.name}`}>
              <Link to={`/detail/${pokemon.id}`} className="card-link">
                {/* Image */}
                <div className="card-image">
                  <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name} />
                </div>
                {/* Naam */}
                <h3 className="card-name">{pokemon.name}</h3>
                {/* Type */}
                <p className="card-type">
                  {pokemon.types.map((t) => t.type.name).join(", ")}
                </p>
              </Link>

            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default List;
