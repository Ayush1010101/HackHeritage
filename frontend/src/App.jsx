import React from 'react';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import{Routes, Route } from 'react-router-dom';
import './App.css'; // Import global styles or main CSS file

const App = () => {
  return (
    <>
    <div className="container">
      <NavBar />
      <MainContent />
    </div>
   </>

  );
};

export default App;
