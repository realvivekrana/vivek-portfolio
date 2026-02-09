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
                <p className="status">Currently Pursuing</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>BCA</h4>
                <p className="institution">Vinoba Bhave University</p>
                <p className="status">Completed</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Intermediate</h4>
                <p className="institution">Inter Science College, Hazaribagh</p>
                <p className="status">Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="about-section">
          <div className="section-header">
            <div className="section-icon">💼</div>
            <h3>Experience</h3>
          </div>
          <div className="experience-list">
            <div className="experience-item">
              <div className="exp-icon">🎯</div>
              <div className="exp-content">
                <h4>Internship</h4>
                <p>Authenura, Noida</p>
              </div>
            </div>
            <div className="experience-item">
              <div className="exp-icon">💻</div>
              <div className="exp-content">
                <h4>Internship & Training</h4>
                <p>Cetpa Infotech Pvt Ltd, Noida</p>
              </div>
            </div>
            <div className="experience-item">
              <div className="exp-icon">📚</div>
              <div className="exp-content">
                <h4>Training</h4>
                <p>Skills Academy, Mumbai</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="about-section">
          <div className="section-header">
            <div className="section-icon">📜</div>
            <h3>Certifications</h3>
          </div>
          <div className="cert-list">
            <div className="cert-item">
              <i className="fas fa-check-circle"></i>
              <span>JavaScript Certification</span>
            </div>
            <div className="cert-item">
              <i className="fas fa-check-circle"></i>
              <span>React.js Certification</span>
            </div>
            <div className="cert-item">
              <i className="fas fa-check-circle"></i>
              <span>MongoDB Certification</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
