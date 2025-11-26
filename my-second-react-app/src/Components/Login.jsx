import React from 'react';
import Input from './Input';

const Login = () => {
  return (
    <div className="input">
      <h1>Login Form</h1>
      <Input type="text" placeholder="User Name" label="UserName" />
      <Input type="password" placeholder="Password" label="Password" />
      <button className="btn btn-primary"> Sign In</button>
    </div>
  );
};

export default Login;
