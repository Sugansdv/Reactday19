import React from "react";

const withPermissions = (Component, permissionKey) => {
  return function ProtectedComponent(props) {
    let user = null;

    try {
      user = JSON.parse(localStorage.getItem("user"));
    } catch (error) {
      console.error("Invalid user data in localStorage");
    }

    if (!user) {
      return (
        <div className="alert alert-warning m-4">
          You must be logged in to access this page.
        </div>
      );
    }

    const permissions = {
      admin: ["canEditLead"],
      user: [],
    };

    const hasPermission = permissions[user.role]?.includes(permissionKey);

    if (!hasPermission) {
      return (
        <div className="alert alert-danger m-4">
          Access Denied: You do not have permission to view this page.
        </div>
      );
    }

    return <Component {...props} />;
  };
};

export default withPermissions;
