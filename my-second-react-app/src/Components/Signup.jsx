import React from 'react';

const Signup = () => {
  return (
    <div>
      <div className="input">
        <h1>Login Form</h1>
        <div className="mb-3">
          <Input type="text" placeholder="User Name" label="UserName" />
        </div>
        <div className="mb-3">
          <Input type="email" placeholder="Email" label="Email" />
        </div>
        <div className="mb-3">
          <Input type="password" placeholder="Password" label="Password" />
        </div>
        <div className="mb-3">
          <Input
            type="password"
            placeholder="Confirm Password"
            label="Password"
          />
        </div>
        <button className="btn btn-primary"> Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
