
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import CourseDetail from './Pages/CourseDetail';
import NotFound from './Pages/NotFound';
import Navbar from './Components/Navbar'; 
import Profile from './Pages/Profile';
import './App.css'; 

function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
