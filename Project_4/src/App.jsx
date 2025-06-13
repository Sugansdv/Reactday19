// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import './App.css';
import LeadsLayout from "./Pages/LeadsLayout";
import LeadsList from "./Pages/LeadsList";
import EditLead from "./Pages/EditLead";
import Deals from "./Pages/Deals";
import Contacts from "./Pages/Contacts";
import Settings from "./Pages/Settings";

import withPermissions from "./hoc/withPermissions";

const EditLeadWithPermission = withPermissions(EditLead, "canEditLead");

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          {/* ✅ Nested Routes for Leads */}
          <Route path="/leads" element={<LeadsLayout />}>
            <Route index element={<LeadsList />} />
            <Route path=":id/edit" element={<EditLeadWithPermission />} />
          </Route>

          {/* Other Top-Level Routes */}
          <Route path="/deals" element={<Deals />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="*" element={<h4>404 - Page Not Found</h4>} />
        </Routes>
      </div>
    </Router>
  );
}
