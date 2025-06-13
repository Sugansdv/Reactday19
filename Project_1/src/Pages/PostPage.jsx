import React, { useState } from 'react';
import axiosConfig from '../api/axiosConfig'; // ✅ Use correct import
import { useNavigate } from 'react-router-dom';
import EditModal from '../Components/EditModal';
import DeleteModal from '../Components/DeleteModal';

const PostPage = ({ data }) => {
  const [post, setPost] = useState(data);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const navigate = useNavigate();

  // ✅ Simulated PUT (Fake update for mock API)
  const handleEdit = async (updatedPost) => {
    try {
      await axiosConfig.put(`/posts/${post.id}`, updatedPost); // Will not actually update
      setPost(updatedPost); // Locally update post
      setShowEdit(false);
    } catch (err) {
      alert('Failed to update post');
    }
  };

  // ✅ Simulated DELETE (Fake delete for mock API)
  const handleDelete = async () => {
    try {
      await axiosConfig.delete(`/posts/${post.id}`); // Will not actually delete
      setShowDelete(false);
      navigate(`/${post.userId}/posts`);
    } catch (err) {
      alert('Failed to delete post');
    }
  };

  return (
    <div className="container pt-5 mt-5">
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <div className="mt-4">
        <button className="btn btn-outline-primary me-2" onClick={() => setShowEdit(true)}>
          Edit
        </button>
        <button className="btn btn-outline-danger" onClick={() => setShowDelete(true)}>
          Delete
        </button>
      </div>

      {showEdit && (
        <EditModal post={post} onClose={() => setShowEdit(false)} onSave={handleEdit} />
      )}
      {showDelete && (
        <DeleteModal onClose={() => setShowDelete(false)} onConfirm={handleDelete} />
      )}
    </div>
  );
};

export default PostPage;
