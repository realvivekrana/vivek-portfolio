import React from 'react';
import './Terms.css';

const Terms = () => {
  const terms = [
    { icon: '🔒', text: 'All content is original unless otherwise stated.' },
    { icon: '🚫', text: 'No content may be copied or reused without permission.' },
    { icon: '🛠️', text: 'Projects displayed are personal or demo-based.' },
    { icon: '📧', text: 'For queries, contact via the Contact section.' },
    { icon: '📜', text: 'Terms are subject to change without notice.' }
  ];

  return (
    <section id="terms" className="terms">
      <h2>Terms & Conditions</h2>
      <div className="terms-list">
        {terms.map((term, index) => (
          <div className="term-item" key={index}>
            <span className="term-icon">{term.icon}</span>
            <p>{term.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Terms;
