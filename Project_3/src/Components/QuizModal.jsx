import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./QuizModal.css"; 

export default function QuizModal({ onClose, question, options, correctAnswer }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h4>Quiz Question</h4>
        <p>{question}</p>
        <ul className="list-group mb-3">
          {options.map((option, index) => (
            <li
              key={index}
              className={`list-group-item ${submitted && option === correctAnswer ? 'list-group-item-success' : ''} 
                          ${submitted && option === selected && option !== correctAnswer ? 'list-group-item-danger' : ''}`}
              onClick={() => !submitted && setSelected(option)}
              style={{ cursor: submitted ? "default" : "pointer" }}
            >
              {option}
            </li>
          ))}
        </ul>
        {!submitted ? (
          <button className="btn btn-primary me-2" disabled={selected == null} onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <div className="alert alert-info">Your answer is {selected === correctAnswer ? "correct ✅" : "incorrect ❌"}.</div>
        )}
        <button className="btn btn-secondary" onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}
