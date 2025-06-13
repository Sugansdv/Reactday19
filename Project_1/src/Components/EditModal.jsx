import React, { useState } from 'react';
import ModalPortal from '../Portals/ModalPortal';

const EditModal = ({ post, onClose, onSave }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSubmit = () => {
    onSave({ ...post, title, body });
  };

  return (
    <ModalPortal>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Post</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <input
                className="form-control mb-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className="form-control"
                rows="4"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
              <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default EditModal;
