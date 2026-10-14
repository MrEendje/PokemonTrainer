import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welkom bij de Pokemon Team Manager</h1>
      <Link to="/list">Bekijk alle Pokémon</Link>
    </div>
  );
}

export default Home;
