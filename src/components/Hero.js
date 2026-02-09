import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const roles = [
      'Full Stack Web Developer',
      'MERN Stack Developer',
      'JavaScript Enthusiast',
      'React.js Developer'
    ];

    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const openModal = () => {
    document.getElementById('hire-modal').style.display = 'flex';
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h3 className="greeting">Hello! My name is</h3>
          <h1 className="name">Vivek Kumar Rana</h1>
          <h2 className="role">
            I'm a <span className="typing">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="description">
            I build responsive and dynamic web applications using the MERN Stack.
          </p>
          <button className="hire-btn" onClick={openModal}>
            Hire Me
          </button>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/vivekranaworks/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/realvivekrana" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://x.com/mrvivaanrana76" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="mailto:vivekranaworks@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <div className="glow-effect"></div>
            <div className="profile-avatar">
              <img 
                src="/vivek-profile.jpg.jpeg" 
                alt="Vivek Kumar Rana"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="avatar-gradient" style={{ display: 'none' }}>
                <span className="avatar-text">VK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
