import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import TeamCard from "../components/TeamCard";

function Home() {
  const [teams, setTeams] = useState(
    () => JSON.parse(localStorage.getItem("teams")) || []
  );
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);

  function addTeam() {
    setTeams([...teams, { id: Date.now(), name: "Nieuw Team", pokemon: [] }]);
  }

  function deleteTeam(id) {
    setTeams(teams.filter((team) => team.id !== id));
  }

  const pokemonInTeams = teams.reduce((total, team) => total + team.pokemon.length, 0);
  const totalSlots = teams.length * 6;

  return (
    <div className="home">
      <h1 className="home-title">Welkom terug, Trainer</h1>
      <p className="home-subtitle">Hier is een overzicht van je teams en Pokémon.</p>

      <div className="stats">
        <StatCard label="Teams" value={teams.length} text="Actieve teams" />
        <StatCard
          label="Pokémon in teams"
          value={pokemonInTeams}
          text={`Van ${totalSlots} mogelijke plekken`}
        />
        <StatCard label="Favorieten" value={favorites.length} text="Opgeslagen Pokémon" />
      </div>

      <div className="section-header">
        <h2>Mijn Teams</h2>
        <button className="new-team-button" onClick={addTeam}>+ Nieuw Team</button>
      </div>

      {teams.length === 0 ? (
        <p className="home-subtitle">Je hebt nog geen teams. Maak er een aan!</p>
      ) : (
        <div className="team-grid">
          {teams.map((team) => (
            <TeamCard
              key={team.id}
              name={team.name}
              pokemon={team.pokemon}
              onDelete={() => deleteTeam(team.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
