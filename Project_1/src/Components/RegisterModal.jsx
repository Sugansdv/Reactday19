import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const RegisterModal = ({ onClose }) => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, password } = user;
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    if (existingUsers.some(u => u.email === email)) {
      setError("Email already exists");
      return;
    }

    existingUsers.push(user);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    alert("Registration successful! You can now log in.");
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
      <div className="bg-white p-4 rounded shadow" style={{ maxWidth: 400, width: '90%' }}>
        <h5 className="mb-3">📝 Register</h5>
        {error && <div className="alert alert-danger py-1">{error}</div>}
        <form onSubmit={handleRegister}>
          <div className="mb-2">
            <label>Name</label>
            <input className="form-control" value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} required />
          </div>
          <div className="mb-2">
            <label>Email</label>
            <input type="email" className="form-control" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} required />
          </div>
          <div className="mb-2">
            <label>Password</label>
            <div className="input-group">
              <input type={showPwd ? 'text' : 'password'} className="form-control" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} required />
              <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPwd(p => !p)}>{showPwd ? '🙈' : '👁️'}</button>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-primary" type="submit">Register</button>
            <button className="btn btn-outline-secondary" onClick={onClose} type="button">Cancel</button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default RegisterModal;
