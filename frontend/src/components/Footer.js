import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="logo-footer">
        <div className="footer-logo">
          <img src="/images/logo.png" alt="Whisk & Wonder Logo" width="100" height="80" />
        </div>
        <div id="logo-title">
          <h2>Whisk & Wonder</h2>
          <p>Addis Ababa's beloved artisan bakery, <br />crafting exquisite pastries, cakes, and<br /> confections with passion and the finest ingredients<br /> for unforgettable moments.</p>
        </div>
      </div>
      <div id="contact-info">
        <ul>
          <li> Reservations | Orders | Enqueries</li>
          <li>SANFORD: +251 941 000 022</li>
          <li>BOLE ATLAS: +251 900 989 898</li>
          <li>4KILLO: +251 900 898 989</li>
        </ul>
        <div id="copyright">
          <p> ©2025 Whisk & Wonder. All rights reserved.</p>
        </div>
      </div>
      <div id="footer-nav">
        <div className="footer-nav1">
          <ul>
            <li>Pages</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
          </ul>
        </div>
        <div className="footer-nav2">
          <ul>
            <li> Company</li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
