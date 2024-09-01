import React from 'react';
import Card from './Card';
import CourseBox from './CourseBox';

const MainContent = () => {
  return (
    <section className="main">
      <div className="main-top">
        <h1>Personal Info</h1>
        <i className="fas fa-user-cog"></i>
      </div>
      <div className="main-skills">
        <Card
          icon="fas fa-solid fa-hospital"
          title="Book a Bed"
          description="Book your desired bed at your nearest Hospital"
          buttonText="Book Now"
        />
        <Card
          icon="fab fa-solid fa-bed-pulse"
          title="Book Hospital Visit"
          description="Book an appointment at your preferred Hospital"
          buttonText="Book Now"
        />
        <Card
          icon="fas fa-solid fa-pills"
          title="Buy Meds"
          description="Now Buy your required medicines at a discounted price"
          buttonText="Buy Now"
        />
        <Card
          icon="bx bx-plus-medical"
          title="Ambulance"
          description="We provide Ambulance services at your doorstep"
          buttonText="Book Now"
        />
      </div>
      <CourseBox />
    </section>
  );
};

export default MainContent;
