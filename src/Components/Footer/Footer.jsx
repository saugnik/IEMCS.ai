import React from 'react';
import './Footer.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from '../About/About';
import { Link as ScrollLink } from 'react-scroll'
const Footer = () => {
  return (

    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-section">
            <h1 className="footer-logo">IEM Consultancy Services</h1>
            <p>Your trusted partner in technology solutions. <br /><br />
              Gurukul, Y-12, Block -EP, Sector-V, Salt Lake Electronics Complex
              Kolkata – 700 091, West Bengal, India.
            </p>
          </div>

          {/* Links Section */}

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to='/' offset={0} duration={500}>Home</Link></li>
              <li><ScrollLink to='about' smooth={true} offset={-150} duration={500}>About us</ScrollLink></li>
              <li><ScrollLink to='program' smooth={true} offset={-260} duration={500}>Service Offering</ScrollLink></li>
              <li><ScrollLink to='testimonials' smooth={true} offset={-260} duration={500}>Stakeholders</ScrollLink></li>
            </ul>
          </div>


          {/* Social Media Section */}
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src="https://via.placeholder.com/30" alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img src="https://via.placeholder.com/30" alt="Twitter" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <img src="https://via.placeholder.com/30" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>&copy; 2024 IEM Consultancy Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>

  )
}

export default Footer;
