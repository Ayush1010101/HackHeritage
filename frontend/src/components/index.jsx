import React from 'react';
import './login.scss';
import 'boxicons/css/boxicons.min.css';

const CureXLogin = () => {
  const login = () => {
    // Add your login logic here
  };

  const register = () => {
    // Add your register logic here
  };

  const myMenuFunction = () => {
    // Add your menu toggle logic here
  };

  return (
    <div className="wrapper">
      <nav className="nav">
        <div className="nav-logo">
          <p>CureX</p>
        </div>
        <div className="nav-menu" id="navMenu">
          <ul>
            <li><a href="#" className="link active">Home</a></li>
            <li><a href="#" className="link">Contact Us</a></li>
            <li><a href="#" className="link">Services</a></li>
            <li><a href="#" className="link">About</a></li>
          </ul>
        </div>
        <div className="nav-button">
          <button className="btn white-btn" id="loginBtn" onClick={login}>Sign In</button>
          <button className="btn" id="registerBtn" onClick={register}>Sign Up</button>
        </div>
        <div className="nav-menu-btn">
          <i className="bx bx-menu" onClick={myMenuFunction}></i>
        </div>
      </nav>
      <div className="login-container" id="login">
        <div className="top">
          <span>Don't have an account? <a href="#" onClick={register}>Sign Up</a></span>
          <header>Login</header>
        </div>
        <div className="input-box">
          <input type="text" className="input-field" placeholder="Username or Email" />
          <i className="bx bx-user"></i>
        </div>
        <div className="input-box">
          <input type="password" className="input-field" placeholder="Password" />
          <i className="bx bx-lock-alt"></i>
        </div>
        <div className="input-box">
          <input type="submit" className="submit" value="Sign In" />
        </div>
        <div className="two-col">
          <div className="one">
            <input type="checkbox" id="login-check" />
            <label htmlFor="login-check"> Remember Me</label>
          </div>
          <div className="two">
            <label><a href="#">Forgot password?</a></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CureXLogin;
