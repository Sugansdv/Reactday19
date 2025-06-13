import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text">{post.body.substring(0, 100)}...</p>
     <Link to={`/post/${post.id}`} className="btn btn-primary btn-sm">
  Read More
</Link>
    </div>
  </div>
);

export default PostCard;