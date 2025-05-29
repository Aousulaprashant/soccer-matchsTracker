// src/components/Footer.js
import React from "react";
import "../pages/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3 className="footer-logo">SportsOrca</h3>
        <p className="footer-description">
          Crafted with passion at the intersection of sports, AI, and
          technology.
        </p>

        <div className="footer-links">
          <a href="/aboutUs" className="footer-link">
            About
          </a>
          <a
            href="https://sportsorca.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Official Site
          </a>
          <a href="mailto:sportsorcateam@gmail.com" className="footer-link">
            Contact
          </a>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} SportsOrca. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
