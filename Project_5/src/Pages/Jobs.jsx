import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchJobs } from "../api/axiosInstance"; 

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchJobs()
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch(() => {
        setError("❌ Failed to load jobs");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-4">Loading jobs...</div>;
  if (error) return <div className="text-danger text-center mt-4">{error}</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Available Jobs</h2>
      {jobs.map((job) => (
        <div key={job.id} className="card mb-3">
          <div className="card-body">
            <h5>{job.title}</h5>
            <h6 className="text-muted">{job.companyName}</h6>
            <p>{job.description}</p>
            <Link to={`/jobs/${job.id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
