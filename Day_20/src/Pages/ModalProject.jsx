import React, { useState } from 'react';
import ModalPopup from '../Components/ModelPopup';

const ModalProject = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container mt-5 text-center">
      <h3>Mini Project 1: Modal Popup</h3>
      <button className="btn btn-primary mt-3" onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      {showModal && (
        <ModalPopup onClose={() => setShowModal(false)}>
          <p>This is a modal popup using React Portal.</p>
          <button className="btn btn-danger mt-2" onClick={() => setShowModal(false)}>
            Close
          </button>
        </ModalPopup>
      )}
    </div>
  );
};

export default ModalProject;
