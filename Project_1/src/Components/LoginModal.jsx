// src/components/LoginModal.jsx
import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { AuthContext } from '../context/AuthContext';

const LoginModal = ({ onClose }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (!foundUser) {
      setError("Invalid credentials");
      return;
    }
    login(foundUser);
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
      <div className="bg-white p-4 rounded shadow" style={{ maxWidth: 400, width: '90%' }}>
        <h5 className="mb-3">🔐 Login</h5>
        {error && <div className="alert alert-danger py-1">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-2">
            <label>Email</label>
            <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="mb-2">
            <label>Password</label>
            <div className="input-group">
              <input type={showPwd ? 'text' : 'password'} className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
              <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPwd(p => !p)}>{showPwd ? '🙈' : '👁️'}</button>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-primary" type="submit">Login</button>
            <button className="btn btn-outline-secondary" onClick={onClose} type="button">Cancel</button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default LoginModal;
