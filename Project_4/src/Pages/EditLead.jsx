import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";

export default function EditLead() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lead, setLead] = useState({ name: "", email: "", company: "", status: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get(`/leads/${id}`)
      .then((res) => {
        setLead(res.data);
        setLoading(false);
      })
      .catch(() => {
        alert("Lead not found");
        navigate("/leads");
      });
  }, [id, navigate]);

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance.put(`/leads/${id}`, lead)
      .then(() => {
        alert("Lead updated successfully!");
        navigate("/leads");
      })
      .catch(() => alert("Update failed"));
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-4">
      <h3>Edit Lead</h3>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label>Name</label>
          <input name="name" className="form-control" value={lead.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input name="email" className="form-control" value={lead.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Company</label>
          <input name="company" className="form-control" value={lead.company} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Status</label>
          <input name="status" className="form-control" value={lead.status} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Update Lead</button>
      </form>
    </div>
  );
}
