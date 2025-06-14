import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import "../assets/Navbar.css";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar d-flex justify-content-between align-items-center px-4 py-2 bg-dark">
        <div className="logo">
          <NavLink to="/leads" className="logo-text text-white text-decoration-none fs-4">
            JobPortal
          </NavLink>
        </div>

        <ul className="nav-links list-unstyled d-flex mb-0">
          <li className="nav-item me-3">
            <NavLink className="nav-link text-white" to="/jobs">
              Jobs
            </NavLink>
          </li>
        </ul>

        <div>
          {user ? (
            <div className="text-white">
              Hello, {user.name}
              <button className="btn btn-sm btn-danger ms-3" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <>
              <button className="btn btn-outline-light me-2" onClick={() => setShowLogin(true)}>
                Login
              </button>
              <button className="btn btn-outline-light" onClick={() => setShowRegister(true)}>
                Register
              </button>
            </>
          )}
        </div>
      </nav>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </>
  );
};

export default Navbar;
