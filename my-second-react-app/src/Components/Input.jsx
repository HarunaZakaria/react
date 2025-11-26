import React from 'react';

const Input = (props) => {
  return (
    <div >
      <div>
        <label htmlFor="#">{props.label}</label>
        <input type={props.type} placeholder={props.placeholder} required />
      </div>
    </div>
  );
};

export default Input;
