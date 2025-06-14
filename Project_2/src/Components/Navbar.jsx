import { NavLink, Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import '../assets/Navbar.css'; 
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const { cartItems } = useCart();
  const [user, setUser] = useState(null);


  

  return (
    <nav className="navbar">
      <div className="logo ms-5">
        <NavLink to="/" className="logo-text">DV_Shop</NavLink>
      </div>

      <ul className="nav-links me-5">
        <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/products">Products</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/cart">Cart ({cartItems.length})</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/admin">Admin</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
