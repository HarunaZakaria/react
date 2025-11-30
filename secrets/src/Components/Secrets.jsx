import React from 'react';

const Secrets = () => {
  return (
    <div className="container">
      <h1 className='display-3'>You've Discoverd My Secret!</h1>
      <p className='secret-text'>Mike Rose is a genius!</p>
      <hr />
      <a className='btn btn-light btn-lg' href="/Logout" role='button'>Logout</a>
      <a className='btn btn-light btn-lg' href="/Submit" role='button'>Submit a Secret</a>
    </div>
  );
};

export default Secrets;
