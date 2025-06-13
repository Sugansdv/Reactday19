import React from "react";

const withPermissions = (Component, requiredPermission) => {
  return (props) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const hasPermission = user?.permissions?.includes(requiredPermission);

    if (!hasPermission) return <p>Access Denied</p>;

    return <Component {...props} />;
  };
};

export default withPermissions;
