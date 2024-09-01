import React from 'react';

const Card = ({ icon, title, description, buttonText }) => {
  return (
    <div className="card">
      <i className={icon}></i>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
};

export default Card;


