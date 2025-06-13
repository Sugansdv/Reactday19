import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default function LoginModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existing = users.find(u => u.email === email && u.password === password);
    if (existing) {
      localStorage.setItem("user", JSON.stringify(existing));
      window.location.reload();
    } else {
      alert("Invalid credentials");
    }
  };

  return ReactDOM.createPortal(
    <div className="modal d-block bg-dark bg-opacity-75">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-3">
          <h5>Login</h5>
          <input type="email" className="form-control my-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <input type="password" className="form-control my-2" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
          <button className="btn btn-secondary w-100 mt-2" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>,
    document.body
  );
}
