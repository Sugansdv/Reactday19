import React from 'react';

const PostDetail = ({ data }) => (
  <div className="container mt-4">
    <h2>{data.title}</h2>
    <p>{data.body}</p>
  </div>
);

export default PostDetail;