import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://github.com/realvivekrana" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/vivekranaworks/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/mrvivaanrana" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="mailto:vivekranaworks@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p>© 2025 Vivek Kumar Rana • All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
