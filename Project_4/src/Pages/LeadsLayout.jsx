import React from "react";
import { Outlet, Link } from "react-router-dom";

const LeadsLayout = () => {
  return (
    <div>
      <h2 className="mb-3">Leads Section</h2>

      <nav>
        <Link to="/leads" className="btn btn-outline-primary btn-sm me-2">
          Leads List
        </Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
};

export default LeadsLayout; 