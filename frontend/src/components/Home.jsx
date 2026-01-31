import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Header />
      <main className="hero">
        <div className="hero-content">
          <h1 id="Welcome">Welcome to Whisk & Wonder</h1>
          <p id="pastry">Patisserie & Bakery</p>
          <div className="quote">
            <p>Sweetening your day, one treat at a time.</p>
            <button className="button">
              <Link to="/menu">Explore Our Menu</Link>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
