import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MentorProfile from './pages/MentorProfile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mentor" element={<MentorProfile />} />
    </Routes>
  );
}

export default App;
