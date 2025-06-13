import React from "react";

export default function LeadDetailSidebar({ lead, onClose }) {
  return (
    <div className="card border-primary shadow">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Lead Detail</h5>
        <button className="btn btn-sm btn-danger" onClick={onClose}>×</button>
      </div>
      <div className="card-body">
        <p><strong>Name:</strong> {lead.name}</p>
        <p><strong>Email:</strong> {lead.email}</p>
        <p><strong>Status:</strong> {lead.status}</p>
        <p><strong>Source:</strong> {lead.source}</p>
      </div>
    </div>
  );
}
