import React from 'react';

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <div className="register-form">
        <form>
          <div className="mb-3">
            <label for="UserName" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="UserName"
              placeholder="Your User Name"
            />
          </div>
          <div className="mb-3">
            <label for="Email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              placeholder="Your Email Address"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Your Password"
            />
          </div>
          <div className="mb-3">
            <label for="ConfirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="ConfirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
