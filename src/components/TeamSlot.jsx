import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TeamSlot({ id }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [id]);

  if (!pokemon) return <div className="team-slot" />;

  return (
    <Link to={`/detail/${id}`} className="team-slot">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </Link>
  );
}

export default TeamSlot;
