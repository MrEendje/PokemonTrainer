import TeamSlot from "./TeamSlot";

const TEAM_SIZE = 6;

function TeamCard({ name, pokemon, onDelete }) {
  const slots = Array.from({ length: TEAM_SIZE }, (_, index) => pokemon[index]);

  return (
    <div className="team-card">
      <div className="team-card-header">
        <h3>{name}</h3>
        <button className="delete-button" onClick={onDelete}>Verwijderen</button>
      </div>
      <div className="team-slots">
        {slots.map((id, index) =>
          id ? (
            <TeamSlot key={index} id={id} />
          ) : (
            <div key={index} className="team-slot empty">+</div>
          )
        )}
      </div>
      <p className="team-count">{pokemon.length}/{TEAM_SIZE} Pokémon</p>
    </div>
  );
}

export default TeamCard;
