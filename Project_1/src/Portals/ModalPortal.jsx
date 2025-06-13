import React from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById('modal-root'));
};

export default ModalPortal;
