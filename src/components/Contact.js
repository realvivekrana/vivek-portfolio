import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <h3>Email</h3>
          <p>vivekranaworks@gmail.com</p>
        </div>
        <div className="contact-card">
          <div className="contact-icon">
            <i className="fas fa-phone"></i>
          </div>
          <h3>Phone</h3>
          <p>+91 9304718075</p>
        </div>
        <div className="contact-card">
          <div className="contact-icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h3>Location</h3>
          <p>Noida, Uttar Pradesh</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
