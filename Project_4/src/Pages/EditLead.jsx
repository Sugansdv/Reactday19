import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axiosInstance";

function EditLead() {
  const { id } = useParams();
  const [lead, setLead] = useState({ name: "", email: "" });

  useEffect(() => {
    axios.get(`/leads/${id}`).then((res) => setLead(res.data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/leads/${id}`, lead).then(() => alert("Lead updated!"));
  };

  return (
    <div className="container mt-4">
      <h3>Edit Lead</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          value={lead.name}
          onChange={(e) => setLead({ ...lead, name: e.target.value })}
          placeholder="Name"
        />
        <input
          className="form-control my-2"
          value={lead.email}
          onChange={(e) => setLead({ ...lead, email: e.target.value })}
          placeholder="Email"
        />
        <button className="btn btn-success" type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditLead;
