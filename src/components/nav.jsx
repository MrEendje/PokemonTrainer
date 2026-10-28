import { Link, NavLink } from 'react-router-dom';
import PokeballIcon from './PokeballIcon';

function Nav() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <PokeballIcon size={30} />
        Pokémon Team Manager
      </Link>

      <div className="header-right">
        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/list">Pokémon Lijst</NavLink>
          <NavLink to="/teams">Teams & Favorieten</NavLink>
        </nav>

        <div className="avatar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Nav;
