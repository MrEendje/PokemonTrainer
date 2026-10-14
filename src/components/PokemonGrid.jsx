import PokemonCard from "./PokemonCard";

function PokemonGrid({ pokemons, favorites, onToggleFavorite }) {
  return (
    <ul className="pokemon-grid">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          types={pokemon.types.map((t) => t.type.name)}
          isFavorite={favorites.includes(pokemon.id)}
          onToggleFavorite={() => onToggleFavorite(pokemon.id)}
        />
      ))}
    </ul>
  );
}

export default PokemonGrid;
