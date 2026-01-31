import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initMenuToggle } from '../utils/menuToggle';

function Header() {
  useEffect(() => {
    initMenuToggle();
  }, []);

  return (
    <header>
      <div className="header">
        <div className="logo-header">
          <img src="/images/logo.png" alt="Whisk & Wonder Logo" width="100" height="80" />
          <h2 id="title">Whisk & Wonder</h2>
        </div>
        <button id="menu-toggle">☰</button>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
