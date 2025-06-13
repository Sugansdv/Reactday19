import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function withRole(Component, allowedRole) {
  return function RoleProtected(props) {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user')) || {};
    
    if (user.role !== allowedRole) {
      navigate('/');
      return null;
    }

    return <Component {...props} />;
  };
}