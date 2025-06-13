import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchJobById } from "../api/axiosInstance"; 

export default function JobDetail() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchJobById(jobId)
      .then(setJob)
      .catch(() => setError("Job not found."));
  }, [jobId]);

  if (error) return <div className="text-danger mt-4">{error}</div>;
  if (!job) return <div className="mt-4">Loading job details...</div>;

  return (
    <div className="container mt-4">
      <h2>{job.title}</h2>
      <h5 className="text-muted">{job.companyName}</h5>
      <p>{job.description}</p>
    </div>
  );
}
