import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        <i className="ph ph-key key"></i>
      </div>
      <h1>Secrets</h1>
      <p>Don't keep your Secrets share the anonymously</p>
      <nav className="home-btns">
        <Link to="/SignIn" className="btn btn-primary">
          Sign In
        </Link>
        <Link to="/Register" className="btn btn-primary">
          Register
        </Link>
      </nav>
    </div>
  );
};

export default Home;
