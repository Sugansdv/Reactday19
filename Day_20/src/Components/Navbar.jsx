import { NavLink } from 'react-router-dom';
import '../assets/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo ms-5">
        <NavLink to="/" className="logo-text">Suganya S</NavLink>
      </div>
      <ul className="nav-links me-5">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Task">Tasks</NavLink></li>
        <li><NavLink to="/modal">Project 1</NavLink></li>
        <li><NavLink to="/tooltip">Project 2</NavLink></li>
        <li><NavLink to="/dialogue">Project 3</NavLink></li>
        <li><NavLink to="/lightbox">Project 4</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;