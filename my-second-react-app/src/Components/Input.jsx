import React from 'react';

const Input = (props) => {
  return (
    <div>
      <label htmlFor="#">{props.label}</label>
      <input type={props.type} placeholder={props.placeholder} required />  
    </div>
  );
};

export default Input;
