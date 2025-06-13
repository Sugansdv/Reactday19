import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import UserPosts from './Pages/UserPosts';
import PostPage from './Pages/PostPage';
import withLoader from './hoc/withLoader';
import axiosInstance from './api/axiosConfig';
import About from './Pages/About';
import AuthProvider from './context/AuthContext'; // ✅ added
import './App.css';

const fetchPosts = () => axiosInstance.get('/posts?userId=1').then(res => res.data);
const fetchPostById = (props) => {
  console.log("Fetching post with ID:", props.id);
  return axiosInstance.get(`/posts/${props.id}`).then((res) => res.data);
};

const UserPostsWithLoader = withLoader(UserPosts, fetchPosts);
const PostPageWithLoader = withLoader(PostPage, fetchPostById);

const App = () => (
  <Router>
    <AuthProvider>
      <Navbar />
      <div className="container pt-5 mt-5"> {/* ✅ padding for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:username/posts" element={<UserPostsWithLoader />} />
          <Route path="/post/:id" element={<PostPageWithLoader />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </AuthProvider>
  </Router>
);

export default App;
