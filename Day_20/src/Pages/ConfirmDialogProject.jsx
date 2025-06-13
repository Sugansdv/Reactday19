import React, { useState } from 'react';
import ConfirmationDialog from '../Components/ConfirmationDialog';

const ConfirmDialogProject = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [status, setStatus] = useState('No action taken.');

  const handleDelete = () => setShowConfirm(true);
  const confirmDelete = () => {
    setStatus('Item deleted successfully.');
    setShowConfirm(false);
  };
  const cancelDelete = () => {
    setStatus('Deletion cancelled.');
    setShowConfirm(false);
  };

  return (
    <div className="container mt-5 text-center">
      <h4>Mini Project 3: Confirmation Dialog</h4>
      <p>Status: <strong>{status}</strong></p>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete Item
      </button>

      {showConfirm && (
        <ConfirmationDialog
          message="Are you sure you want to delete this item?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default ConfirmDialogProject;
