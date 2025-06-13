import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default function RegisterModal({ onClose }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleRegister = () => {
    if (!form.name || !form.email || !form.password) {
      alert("All fields are required");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful");
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="modal d-block bg-dark bg-opacity-75">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-3">
          <h5>Register</h5>
          <input type="text" className="form-control my-2" placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
          <input type="email" className="form-control my-2" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
          <input type="password" className="form-control my-2" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
          <button className="btn btn-success w-100" onClick={handleRegister}>Register</button>
          <button className="btn btn-secondary w-100 mt-2" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>,
    document.body
  );
}
