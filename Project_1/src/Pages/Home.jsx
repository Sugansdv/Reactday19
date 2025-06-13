import React from 'react';

const Home = () => (
  <div className="container d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: '70vh' }}>
    <h1 className="mb-3 fw-bold">Welcome to <span className="text-primary">MyBlog</span></h1>
    <p>
      Browse posts, create your own stories, and share your thoughts with the world.
    </p>
    <hr className="w-50 my-4" />
    <p className="text-muted">To get started, check out Sugan’s posts or add your own using the navigation above.</p>
  </div>
);

export default Home;
