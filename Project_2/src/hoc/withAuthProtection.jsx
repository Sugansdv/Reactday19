
import React from "react";
import { Navigate } from "react-router-dom";
const withAuthProtection = (Component) => {
  return (props) => {
    const isAuthenticated = localStorage.getItem("auth") === "true";
    const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
    return isAuthenticated && user?.role === "admin" ? (
      <Component {...props} />
    ) : (
      <Navigate to="/" />
    );
  };
};

export default withAuthProtection;
