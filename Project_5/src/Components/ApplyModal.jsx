import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function ApplyModal({ job, onClose }) {
  const [resume, setResume] = useState(null);
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!resume) {
      alert("Please upload your resume.");
      return;
    }

    const applications = JSON.parse(localStorage.getItem("applications")) || [];
    const user = JSON.parse(localStorage.getItem("user"));

    applications.push({
      jobId: job.id,
      jobTitle: job.title,
      applicantName: user.name,
      note,
      resumeName: resume.name,
      appliedAt: new Date().toISOString()
    });

    localStorage.setItem("applications", JSON.stringify(applications));
    setSubmitted(true);
  };

  return ReactDOM.createPortal(
    <div className="modal d-block bg-dark bg-opacity-75">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4">
          {submitted ? (
            <>
              <h5 className="text-success">Application Submitted!</h5>
              <p>Your application for <strong>{job.title}</strong> was successfully submitted.</p>
              <button className="btn btn-outline-primary" onClick={onClose}>Close</button>
            </>
          ) : (
            <>
              <h5 className="mb-3">Apply for: {job.title}</h5>
              <div className="mb-3">
                <label className="form-label">Upload Resume (PDF, DOCX)</label>
                <input
                  type="file"
                  className="form-control"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResume(e.target.files[0])}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Note to Employer (optional)</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Write a brief note..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                ></textarea>
              </div>
              <div className="d-flex justify-content-between">
                <button className="btn btn-success" onClick={handleSubmit}>Submit Application</button>
                <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
