import React from "react";
import { Navigate } from "react-router-dom";
import withAuthProtection from "../hoc/withAuthProtection"; 

const Admin = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user || user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4"> Admin Dashboard</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h5>Manage Products</h5>
            <p>Add, update, or delete products.</p>
            <button className="btn btn-primary btn-sm">Go to Products</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h5>Manage Users</h5>
            <p>View customer list and roles.</p>
            <button className="btn btn-primary btn-sm">Go to Users</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h5>Manage Orders</h5>
            <p>Track order status and history.</p>
            <button className="btn btn-primary btn-sm">Go to Orders</button>
          </div>
        </div>
      </div>

      <div className="card mt-5 p-4 bg-light">
        <h4>Sales Overview</h4>
        <ul>
          <li>Total Products: 120</li>
          <li>Total Users: 55</li>
          <li>Orders This Month: 38</li>
        </ul>
      </div>
    </div>
  );
};

export default withAuthProtection(Admin);
