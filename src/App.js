import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>

    </Router>
      
    </>
  );
}

export default App;
