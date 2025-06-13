import React from 'react';
import { NavLink } from 'react-router-dom';

import '../assets/Navbar.css';
const Navbar = () => {
 return (
    <nav className="navbar">
      <div className="logo ms-5">
        <NavLink to="/" className="logo-text">Edu</NavLink>
      </div>

      <ul className="nav-links me-5">
        <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
         <li className="nav-item">
            <NavLink className="nav-link" to="/courses">Courses</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
          </li>
      </ul>
    </nav>
  );
};

export default Navbar;
