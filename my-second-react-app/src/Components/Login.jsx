import React from 'react';
import Input from './Input';

const Login = () => {
  return (
    <div>
      <h1>Login Form</h1>

      <Input type="text" placeholder="User Name" label="UserName" />
      <Input type="text" placeholder="Password" label="Password" />
    </div>
  );
};

export default Login;
