// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CustomNavbar from './components/Navbar';
import Project from './pages/Project';




const App: React.FC = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<About />} />
        <Route path="/pricing" element={<Project />} />
      </Routes>
    </Router>
  );
};

export default App;
