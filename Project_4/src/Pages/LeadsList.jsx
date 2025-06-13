import React, { useEffect, useState } from "react";
import axios from "../axiosInstance"; 

export default function LeadsList() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/users") 
      .then((res) => {
        console.log("✅ API data:", res.data);
        setLeads(res.data.data || res.data); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error loading leads:", err.message);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="alert alert-info">Loading leads...</div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <div>
      <h3>Leads</h3>
      {leads.length === 0 ? (
        <div className="alert alert-warning">No leads found.</div>
      ) : (
        <ul className="list-group">
          {leads.map((lead) => (
            <li key={lead.id} className="list-group-item">
              <strong>{lead.name || `${lead.first_name} ${lead.last_name}`}</strong> <br />
              {lead.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
