import { Link } from "react-router-dom";

function PokemonCard({ id, name, image, types, isFavorite, onToggleFavorite }) {
  return (
    <li className={`pokemon-card ${types[0]}`}>
      <button
        className={isFavorite ? "fav-button active" : "fav-button"}
        onClick={onToggleFavorite}
      >
        {isFavorite ? "★" : "☆"}
      </button>
      <Link to={`/detail/${id}`} className="card-link">
        <div className="card-image">
          <img src={image} alt={name} />
        </div>
        <h3 className="card-name">{name}</h3>
        <p className="card-type">{types.join(", ")}</p>
      </Link>
    </li>
  );
}

export default PokemonCard;
