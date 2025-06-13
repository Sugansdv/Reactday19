
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default function ApplyModal({ job, onClose }) {
  const [resume, setResume] = useState(null);

  const handleSubmit = () => {
    alert("Applied with resume!");
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="modal d-block bg-dark bg-opacity-75">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-3">
          <h5>Apply for: {job.title}</h5>
          <input type="file" onChange={(e) => setResume(e.target.files[0])} />
          <div className="mt-3">
            <button className="btn btn-success me-2" onClick={handleSubmit}>Submit</button>
            <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
