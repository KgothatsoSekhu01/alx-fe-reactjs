import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

<Route path="/user/:userId" element={<UserProfile />} />

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import UserProfile from './components/UserProfile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Protected Route for Profile */}
        <Route 
          path="/profile/*" 
          element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<Profile />} />} 
        />
        
        {/* Dynamic Route */}
        <Route path="/user/:userId" element={<UserProfile />} />
        
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>

      <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
        Toggle Authentication
      </button>
    </Router>
  );
}

export default App;
