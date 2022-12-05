/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';

function App() {
  const [projectCount, setProjectCount] = useState(null);
  function updateCount(x) {
    setProjectCount(x);
  }
  return (
    <Router>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<HomePage setCounter={updateCount} />} />
          <Route path="/projects" element={<ProjectPage projectCount={projectCount} setCounter={updateCount} />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
