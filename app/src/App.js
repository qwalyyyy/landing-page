import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import TaskTimeline from './pages/TaskTimeline'; 
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/TaskTimeline" element={<TaskTimeline />} />
          <Route path="/profile" element={<ProfilePage />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
