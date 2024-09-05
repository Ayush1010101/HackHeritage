import React from 'react';

const NavBar = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <a href="#" className="logo">
            <img src="./assets/main_logo.jpg" alt="logo"></img>
            <span className="nav-item"><font size ="+1">Dashboard</font></span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-home"></i>
            <span className="nav-item">Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-user"></i>
            <span className="nav-item">Profile</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-solid fa-bucket"></i>
            <span className="nav-item">My Orders</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-solid fa-stethoscope"></i>
            <span className="nav-item">Check Symptoms</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-solid fa-pills"></i>
            <span className="nav-item">My Medicines</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-cog"></i>
            <span className="nav-item">Settings</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-question-circle"></i>
            <span className="nav-item">Help</span>
          </a>
        </li>
        <li>
          <a href="#" className="logout">
            <i className="fas fa-sign-out-alt"></i>
            <span className="nav-item">Log out</span>
          </a>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default NavBar;
