import { Link, NavLink } from 'react-router-dom';

function Nav() {
  return (
    <header className="header">
      <Link to="/" className="logo">Pokémon Team Manager</Link>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/list">Pokémon Lijst</NavLink>
        <NavLink to="/teams">Teams & Favorieten</NavLink>
      </nav>
    </header>
  );
}

export default Nav;
