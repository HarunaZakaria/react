import React from 'react';

const Input = (props) => {
  return (
    <div>
      <div>
        <form action="">
          <label className="form-label" htmlFor="#">
            {props.label}
          </label>
          <input
            className="form-control"
            type={props.type}
            placeholder={props.placeholder}
            required
          />
        </form>
      </div>
    </div>
  );
};

export default Input;
