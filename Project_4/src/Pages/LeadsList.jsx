import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import LeadDetailSidebar from "../Components/LeadDetailSidebar";

export default function LeadsList() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState(null);

  useEffect(() => {
    axiosInstance.get("/leads")
      .then((res) => {
        setLeads(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleView = (lead) => setSelectedLead(lead);
  const handleClose = () => setSelectedLead(null);

  if (loading) return <div className="text-center mt-5">Loading leads...</div>;

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Leads</h3>
      {leads.length === 0 ? (
        <p>No leads found.</p>
      ) : (
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.company}</td>
                <td>{lead.status}</td>
                <td>
                  <button
                    className="btn btn-sm btn-info me-2"
                    onClick={() => handleView(lead)}
                  >
                    View
                  </button>
                  <Link
                    to={`/leads/${lead.id}/edit`}
                    className="btn btn-sm btn-warning"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedLead && (
        <LeadDetailSidebar lead={selectedLead} onClose={handleClose} />
      )}
    </div>
  );
}
