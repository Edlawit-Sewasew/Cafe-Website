import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const API_BASE = 'http://localhost:3001';

function Contact() {
  const [showMessage, setShowMessage] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const toggleMessage = () => setShowMessage(!showMessage);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitResult({ success: false, text: 'Please fill in all fields.' });
      return;
    }
    setSubmitting(true);
    setSubmitResult(null);
    fetch(`${API_BASE}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() })
    })
      .then((res) => res.json())
      .then((data) => {
        setSubmitResult({ success: data.success, text: data.message || data.error || 'Done.' });
        if (data.success) {
          setName('');
          setEmail('');
          setMessage('');
        }
      })
      .catch(() => setSubmitResult({ success: false, text: 'Failed to send. Is the backend running?' }))
      .finally(() => setSubmitting(false));
  };

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
          <form id="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" disabled={submitting}>
              {submitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
          {submitResult && (
            <p style={{ marginTop: '10px', color: submitResult.success ? 'green' : '#c00' }}>
              {submitResult.text}
            </p>
          )}
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
