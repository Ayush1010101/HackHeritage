import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="container">
      <h1>CoreX Family</h1>
      <div className="team">
        <div className="team">
          <img src="images/Ayush.jpg" alt="Ayush" />
          <p>Ayush Bhuwalka</p>
        </div>
        <div className="team">
          <img src="images/armaan.jpg" alt="Armaan" />
          <p>Armaan Singh</p>
        </div>
        <div className="team">
          <img src="images/Shreya.jpg" alt="Shreya" />
          <p>Shreya Yadav</p>
        </div>
        <div className="team">
          <img src="images/Siddharth.jpg" alt="Siddhartha" />
          <p>Siddhartha Singh</p>
        </div>
        <div className="team">
          <img src="images/WhatsApp Image 2024-09-01 at 16.42.56_d393afb2(Mahima).jpg" alt="Mahima" />
          <p>Mahima</p>
        </div>
        <div className="team">
          <img src="images/WhatsApp Image 2024-08-31 at 11.59.12.jpeg" alt="Subhrajyoti" />
          <p>Subhrajyoti Basu</p>
        </div>
      </div>
    </div>
  );
};

export default About;
