import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="footer">
        <p>Copyright &copy;{currentYear}. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
