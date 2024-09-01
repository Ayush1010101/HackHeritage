import React from 'react';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';

import './App.css'; // Import global styles or main CSS file

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <MainContent />
    </div>
  );
};

export default App;
