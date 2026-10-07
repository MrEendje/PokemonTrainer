import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List() {
  // Alle Pokémon met hun details (komt uit de API)
  const [pokemons, setPokemons] = useState([]);
  // Wat de gebruiker in de zoekbalk typt
  const [search, setSearch] = useState("");

  // Alleen de Pokémon die passen bij de zoektekst (op naam of nummer)
  const filtered = pokemons.filter((pokemon) =>
    pokemon.name.includes(search.toLowerCase()) ||
    String(pokemon.id) === search
  );

  // Draait één keer als de pagina laadt ([] = geen dependencies)
  useEffect(() => {
    // 1. Haal de lijst op (geeft per Pokémon alleen name + url)
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1500")
      .then((res) => res.json())
      .then((data) => {
        // 2. Haal voor elke Pokémon de details op via zijn eigen url
        const request = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        );
        // 3. Wacht tot alle requests klaar zijn
        return Promise.all(request);
      })
      // 4. Sla alle details op in state
      .then((details) => setPokemons(details));
  }, []);

  return (
    <div>
      <h1>Pokémon Lijst</h1>
      <p>{filtered.length} resultaten</p>

      {/* Zoekbalk: elke letter die je typt komt in "search" */}
      <input
        type="text"
        placeholder="Zoek op naam of nummer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {/* Maak van elke gefilterde Pokémon een <li> */}
        {filtered.map((pokemon) => (
          <li key={pokemon.name}>
            {/* Klik = naar de detailpagina met het id in de url */}
            <Link to={`/detail/${pokemon.id}`}>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name} />
              {pokemon.name}
              {/* Types als tekst, bijv. "grass, poison" */}
              <p>
                {pokemon.types.map((t) => t.type.name).join(", ")}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
