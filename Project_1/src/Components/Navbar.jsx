import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/Navbar.css'; 
import { AuthContext } from '../context/AuthContext';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <>
      <nav className="navbar">
        <div className="logo ms-5">
          <NavLink to="/" className="logo-text">MyBlog</NavLink>
        </div>

        <ul className="nav-links me-5">
          <li><NavLink exact="true" className="nav-link" to="/">Home</NavLink></li>
          <li><NavLink className="nav-link" to="/john/posts">Sugan's Posts</NavLink></li>
          <li><NavLink className="nav-link" to="/about">About</NavLink></li>
      <li>
          {currentUser ? (
  <>
    <li className="nav-item d-flex align-items-center me-3">
      <span className="nav-link" style={{ color: 'yellow' }}>Hello! {currentUser.name}</span>
    </li>
    <li className="nav-item">
      <button className="btn btn-sm btn-danger" onClick={logout}>Logout</button>
    </li>
  </>
) : (
  <li className="nav-item d-flex">
    <button className="log-btn btn btn-sm btn-outline-primary me-4" onClick={() => setShowLogin(true)}>Login</button>
    <button className="log-btn btn btn-sm btn-outline-success" onClick={() => setShowRegister(true)}>Register</button>
  </li>
)}
          </li>
        </ul>
      </nav>
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </>
  );
};

export default Navbar;
