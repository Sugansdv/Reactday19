import React from "react";
import { Navigate } from "react-router-dom";

const withAuth = (Component) => {
  return function AuthWrapper(props) {
    const user = JSON.parse(localStorage.getItem("user"));
    return user ? <Component {...props} /> : <Navigate to="/" />;
  };
};

export default withAuth;