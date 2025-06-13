// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Task from './Components/Task';
import ModalProject from './Pages/ModalProject';
import TooltipProject from './Pages/TooltipProject';
import ConfirmDialogProject from './Pages/ConfirmDialogProject';
import LightboxProject from './Pages/LightboxProject';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2 className="text-center mt-5">Day_20 Tasks</h2>} />
        <Route path="/Task" element={<Task />} />
        <Route path="/modal" element={<ModalProject />} />
        <Route path="/tooltip" element={<TooltipProject />} />
        <Route path="/dialogue" element={<ConfirmDialogProject />} />
        <Route path="/lightbox" element={<LightboxProject />} />
      </Routes>
    </Router>
  );
}

export default App;
