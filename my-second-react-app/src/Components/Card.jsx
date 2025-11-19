import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="Profile picture" />
      <h1>{props.name}</h1>
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default Card;
