import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import Admin from "./Pages/Admin";
import { CartProvider } from "./Context/CartContext";
import withAuthProtection from "./hoc/withAuthProtection";
import './App.css';

const ProtectedAdmin = withAuthProtection(Admin); 

const App = () => {
  const [user, setUser] = useState(null);

  

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <CartProvider>
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<ProtectedAdmin />} /> 
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
