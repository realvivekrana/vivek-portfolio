import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      
      <div className="about-container">
        <div className="about-card">
          <div className="about-icon">👨‍💻</div>
          <h3>Who I Am</h3>
          <p>
            I'm a passionate Full Stack Web Developer specializing in the MERN stack. 
            I love building responsive, user-friendly web applications that solve real-world problems.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">🎯</div>
          <h3>What I Do</h3>
          <p>
            I create modern web applications using React, Node.js, Express, and MongoDB. 
            From frontend design to backend architecture, I handle the complete development lifecycle.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">💡</div>
          <h3>My Approach</h3>
          <p>
            I focus on writing clean, maintainable code with modern design principles. 
            Performance, security, and user experience are at the core of everything I build.
          </p>
        </div>
      </div>

      <div className="about-highlights">
        <div className="highlight-item">
          <div className="highlight-number">3+</div>
          <div className="highlight-label">Years Learning</div>
        </div>
        <div className="highlight-item">
          <div className="highlight-number">10+</div>
          <div className="highlight-label">Projects Built</div>
        </div>
        <div className="highlight-item">
          <div className="highlight-number">5+</div>
          <div className="highlight-label">Certifications</div>
        </div>
        <div className="highlight-item">
          <div className="highlight-number">100%</div>
          <div className="highlight-label">Dedication</div>
        </div>
      </div>
    </section>
  );
};

export default About;
