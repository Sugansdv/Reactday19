import React from 'react';

const About = () => (
  <div className="container d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: '70vh' }}>
    <h1 className="fw-bold mb-3 text-primary">About MyBlog</h1>
    
    <p className="lead">
      <strong>MyBlog</strong> offers a smooth experience 
      for reading, writing, editing, and managing blog posts.
    </p>

    <p>
      This platform demonstrates key React concepts including routing, dynamic rendering,
      higher-order components (HOCs), and modals using React Portals.
    </p>

    <p className="text-muted mt-3">
      Built as a learning project to explore frontend architecture and reusable UI patterns.
    </p>
  </div>
);

export default About;
