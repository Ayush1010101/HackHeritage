import React from 'react';
import './contact.scss';

const ContactUs = () => {
  return (
    <div className="contact">
      <img src="images/logo.jpg" alt="logo" width="1000px" height="4000px" />
      <h1>Contact Us</h1>
      <p>Mobile: +91 7003840495</p>
      <p>Email: <a href="mailto:ayush.bhuwalka.aiml27@heritageit.edu.in">ayush.bhuwalka.aiml27@heritageit.edu.in</a></p>
      <h3>
        Have a query? Reach out to us at{' '}
        <a href="https://www.CureX.com">www.CureX.com</a>
      </h3>
      <div className="apps">
        <div className="apps">
          <img src="images/twitter.jpg" alt="Twitter" />
        </div>
        <div className="apps">
          <img src="images/facebook-logo-facebook-icon-transparent-free-png.webp" alt="Facebook" />
        </div>
        <div className="apps">
          <img src="images/print-204010528.webp" alt="Instagram" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
