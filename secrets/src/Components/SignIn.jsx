import React from 'react';

const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <div className="sign-in-form">
        <form action="?SignIn" method="POST">
          <div className="mb-3">
            <label for="Email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Your Email Address"
            />
          </div>
          <div className="mb-3">
            <label for="Password">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Your Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
