import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/Navbar.css';

const Navbar = () => {
 return (
    <nav className="navbar">
      <div className="logo ms-5">
        <NavLink to="/leads" className="logo-text">CRM</NavLink>
      </div>

      <ul className="nav-links me-5">
        <li className="nav-item"><NavLink to="/leads" className="nav-link">Leads</NavLink></li>
          <li className="nav-item"><NavLink to="/deals" className="nav-link">Deals</NavLink></li>
          <li className="nav-item"><NavLink to="/contacts" className="nav-link">Contacts</NavLink></li>
          <li className="nav-item"><NavLink to="/settings" className="nav-link">Settings</NavLink></li>
          <li className="nav-item"><NavLink to="/login" className="nav-link">Login</NavLink></li>
        </ul>
    </nav>
  );
};

export default Navbar;





