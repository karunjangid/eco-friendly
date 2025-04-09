import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>EcoBloom</h3>
        <p>Making sustainability simple and accessible for everyone.</p>
        <p className="footer-links">
          <a href="/">Home</a> | 
          <a href="/subscription"> Subscription</a> | 
          <a href="/blog"> Blog</a> | 
          <a href="/community"> Community</a> | 
          <a href="/contact"> Contact</a>
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} EcoBloom. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
