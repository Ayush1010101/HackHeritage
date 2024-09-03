import React from 'react';
import './style.scss';

function SignUp() {
  const login = () => {
    // Define your login logic here
  };

  const register = () => {
    // Define your register logic here
  };

  const myMenuFunction = () => {
    // Define your menu toggle logic here
  };

  return (
    <div className="wrapper">
      <nav className="nav">
        <div className="nav-logo">
          <p>CureX</p>
        </div>
        <div className="nav-menu" id="navMenu">
          <ul>
            <li>
              <a href="#" className="link active">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="link">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-button">
          <button className="btn white-btn" id="loginBtn" onClick={login}>
            Sign In
          </button>
          <button className="btn" id="registerBtn" onClick={register}>
            Sign Up
          </button>
        </div>
        <div className="nav-menu-btn">
          <i className="bx bx-menu" onClick={myMenuFunction}></i>
        </div>
      </nav>

      <div className="form-box">
        <div className="register-container" id="register">
          <div className="top">
            <span>
              Have an account?{' '}
              <a href="#" onClick={login}>
                Login
              </a>
            </span>
            <header>Sign Up</header>
          </div>
          <div className="two-forms">
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Firstname" />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Lastname" />
              <i className="bx bx-user"></i>
            </div>
          </div>
          <div className="input-box">
            <input type="text" className="input-field" placeholder="Date-of-birth" />
            <i className="bx bx-calendar"></i>
          </div>
          <div className="input-box">
            <input type="text" className="input-field" placeholder="Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="input-box">
            <input type="password" className="input-field" placeholder="Password" />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="input-box">
            <input type="submit" className="submit" value="Register" />
          </div>
          <div className="two-col">
            <div className="one">
              <input type="checkbox" id="register-check" />
              <label htmlFor="register-check"> Remember Me</label>
            </div>
            <div className="two">
              <label>
                <a href="#">Terms & conditions</a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
