import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import PokemonGrid from "../components/PokemonGrid";
import { generations } from "../data/filters";


function List() {
  // State
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedGen, setSelectedGen] = useState("");
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [onlyFavorites, setOnlyFavorites] = useState(false);


  // Zoekfilter
  const filtered = pokemons.filter((pokemon) => {
    const matchSearch =
      pokemon.name.includes(search.toLowerCase()) ||
      String(pokemon.id) === search;

    const matchType =
      selectedType === "" ||
      pokemon.types.some((t) => t.type.name === selectedType);
    const gen = generations[selectedGen];
    const matchGen =
      selectedGen === "" ||
      (pokemon.id >= gen.min && pokemon.id <= gen.max);
    const matchFavorite =
      !onlyFavorites ||
      favorites.includes(pokemon.id);
    return matchSearch && matchType && matchGen && matchFavorite;
  });


  // Data ophalen
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1050")
      .then((res) => res.json())
      .then((data) => {
        const request = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        );
        return Promise.all(request);
      })
      .then((details) => setPokemons(details));
  }, []);

  // Favorieten opslaan
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Favoriet aan/uit
  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  return (
    <div className="list-page">
      {/* Filter */}
      <Filters
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        selectedGen={selectedGen}
        onGenChange={setSelectedGen}
        onlyFavorites={onlyFavorites}
        onOnlyFavoritesChange={setOnlyFavorites}
      />
      {/* Inhoud */}
      <main className="list-content">
        {/* Titel */}
        <div className="list-title">
          <h1>Pokemon Lijst</h1>
          <p>{filtered.length} resultaten</p>
        </div>

        {/* Zoekbalk */}
        <SearchBar value={search} onChange={setSearch} />

        {/* Lijst */}
        {pokemons.length === 0 ? (
          <p>Laden...</p>
        ) : (
          <PokemonGrid
            pokemons={filtered}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </main>
    </div>
  );
}

export default List;
