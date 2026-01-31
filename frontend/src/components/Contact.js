import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

function Contact() {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  useEffect(() => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      const handleSubmit = (event) => {
        event.preventDefault();
        
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');
        
        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const message = messageField.value.trim();
        
        if (name === '' || email === '' || message === '') {
          alert('Please fill in all fields before submitting.');
          return;
        }
        
        alert('Thank you! Your message has been sent successfully.');
        contactForm.reset();
      };
      
      contactForm.addEventListener('submit', handleSubmit);
      
      return () => {
        contactForm.removeEventListener('submit', handleSubmit);
      };
    }
  }, []);

  return (
    <div>
      <Header />
      <main className="Contact">
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>Have questions or need assistance? Contact us today! At Whisk & Wonder, we are dedicated to provide exceptional support. Whether you're inquiring about our services or seeking help, we're just a message away.</p>
          <button onClick={toggleMessage} style={{ marginTop: '20px', padding: '10px' }}>
            {showMessage ? 'Hide' : 'Show'} Additional Info
          </button>
          {showMessage && (
            <p style={{ marginTop: '10px', fontStyle: 'italic' }}>
              We're open Monday to Sunday, 8 AM to 8 PM. Visit us anytime!
            </p>
          )}
        </div>
        <section className="contact-form-section">
          <form id="contact-form">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
        <div className="contact-info">
          <div className="phone-numbers">
            <h1>Phone Numbers</h1>
            <ul>
              <li>SANFORD: +251 941 000 022</li>
              <li>BOLE ATLAS: +251 900 989 898</li>
              <li>4KILLO: +251 900 898 989</li>
            </ul>
          </div>
          <p>We will get back to you in no time.</p>
        </div>

        <div className="location">
          <h1>Location</h1>
          <p>Visit us at any of our convenient locations:</p>
          <ul>
            <li>Sanford Branch: Bole Road, Addis Ababa, Ethiopia</li>
            <li>Bole Atlas Branch: Atlas Area, Addis Ababa, Ethiopia</li>
            <li>4Killo Branch: 4Killo Area, Addis Ababa, Ethiopia</li>
          </ul>
        </div>
        <div className="email-address">
          <h1>Email Address</h1>
          <p>For general inquiries, please email us at:
            <em>whisk&wonder3@gmail.com</em>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
