import React from "react";

export default function LeadDetailSidebar({ lead, onClose }) {
  if (!lead) return null;

  return (
    <div
      className="position-fixed top-0 end-0 bg-light border-start p-4 shadow"
      style={{ width: "300px", height: "100vh", zIndex: 1050 }}
    >
      <button className="btn btn-sm btn-outline-danger mb-3" onClick={onClose}>
        Close
      </button>
      <h5>Lead Details</h5>
      <hr />
      <p><strong>Name:</strong> {lead.name}</p>
      <p><strong>Email:</strong> {lead.email}</p>
      <p><strong>Company:</strong> {lead.company}</p>
      <p><strong>Status:</strong> {lead.status}</p>
    </div>
  );
}
