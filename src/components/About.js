import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      
      <div className="about-intro">
        <p>
          I'm a passionate Full Stack Web Developer specializing in the MERN stack. 
          I focus on building responsive, user-friendly web applications with clean code 
          and modern design principles.
        </p>
      </div>

      <div className="about-content">
        {/* Education */}
        <div className="about-section">
          <div className="section-header">
            <div className="section-icon">🎓</div>
            <h3>Education</h3>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>MCA in AI & ML</h4>
                <p className="institution">Amity University, Uttar Pradesh</p>
                <p className="year">2024 - 2026</p>
                <p className="status">Currently Pursuing</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>BCA</h4>
                <p className="institution">Vinoba Bhave University</p>
                <p className="year">2021 - 2024</p>
                <p className="status">Completed</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Intermediate</h4>
                <p className="institution">Inter Science College, Hazaribagh</p>
                <p className="year">2021</p>
                <p className="status">Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
