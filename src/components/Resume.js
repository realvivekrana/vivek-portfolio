import React from 'react';
import './Resume.css';

const Resume = () => {
  const resumeUrl = `${process.env.PUBLIC_URL}/Vivek-Kumar-Rana-Resume.pdf`;

  return (
    <section id="resume" className="resume">
      <h2>My Resume</h2>
      <p className="resume-subtitle">Download or view my professional resume</p>
      
      <div className="resume-container">
        <div className="resume-preview">
          <div className="resume-icon">
            <i className="fas fa-file-pdf"></i>
          </div>
          <h3>Vivek Kumar Rana</h3>
          <p className="resume-title">Full Stack Web Developer</p>
          <p className="resume-description">
            Professional resume showcasing my skills, experience, education, and projects in web development.
          </p>
          
          <div className="resume-highlights">
            <div className="highlight-item">
              <i className="fas fa-graduation-cap"></i>
              <span>BCA & MCA (AI & ML)</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-code"></i>
              <span>MERN Stack Developer</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-certificate"></i>
              <span>Multiple Certifications</span>
            </div>
          </div>

          <div className="resume-actions">
            <a 
              href={resumeUrl} 
              download="Vivek-Kumar-Rana-Resume.pdf"
              className="btn-download"
            >
              <i className="fas fa-download"></i>
              Download Resume
            </a>
            <a 
              href={resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-view"
            >
              <i className="fas fa-eye"></i>
              View Resume
            </a>
          </div>
        </div>

        <div className="resume-info">
          <div className="info-box">
            <div className="info-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <h4>Professional Experience</h4>
            <p>Detailed overview of my development journey and technical expertise.</p>
          </div>

          <div className="info-box">
            <div className="info-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h4>Technical Skills</h4>
            <p>Comprehensive list of technologies, frameworks, and tools I work with.</p>
          </div>

          <div className="info-box">
            <div className="info-icon">
              <i className="fas fa-project-diagram"></i>
            </div>
            <h4>Projects & Achievements</h4>
            <p>Showcase of completed projects and professional accomplishments.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
