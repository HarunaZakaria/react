import React from 'react';

const Submit = () => {
  return (
    <div className="container">
      <div className="jumbotron centered">
        <h1 className="display-3">Secrets</h1>
        <p className="secrets-text">
          Don't keep your secreats, share them anonymously!
        </p>
        <form action="/Submit" method="POST">
          <div className="form-group">
            <input
              type="text"
              className="form-control text-center"
              placeholder="What's your secrets"
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Submit;
