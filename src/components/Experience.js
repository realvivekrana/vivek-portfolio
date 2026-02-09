import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Authenura',
      location: 'Noida (Remote)',
      role: 'Internship',
      period: 'February 2026 - Present',
      status: 'Current',
      icon: '🚀',
      color: '#667eea'
    },
    {
      company: 'Cetpa Infotech Pvt Ltd',
      location: 'Noida',
      role: 'Internship & Training',
      period: 'April 2025 - September 2025',
      status: 'Completed',
      icon: '💻',
      color: '#764ba2'
    },
    {
      company: 'Skills Academy',
      location: 'Mumbai',
      role: 'Training',
      period: 'September 2023 - May 2024',
      status: 'Completed',
      icon: '📚',
      color: '#f093fb'
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2>Professional Experience</h2>
      <p className="experience-subtitle">My journey in web development and training</p>
      
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="exp-header">
              <div className="exp-icon-wrapper" style={{ background: exp.color }}>
                <span className="exp-icon">{exp.icon}</span>
              </div>
              <div className="exp-status" style={{ borderColor: exp.color, color: exp.color }}>
                {exp.status}
              </div>
            </div>
            
            <div className="exp-body">
              <h3>{exp.company}</h3>
              <p className="exp-role">{exp.role}</p>
              <div className="exp-details">
                <div className="detail-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{exp.location}</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-calendar-alt"></i>
                  <span>{exp.period}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="experience-summary">
        <div className="summary-card">
          <div className="summary-icon">🎯</div>
          <h4>Hands-on Experience</h4>
          <p>Gained practical knowledge through internships and training programs</p>
        </div>
        <div className="summary-card">
          <div className="summary-icon">🌟</div>
          <h4>Continuous Learning</h4>
          <p>Committed to staying updated with latest web technologies</p>
        </div>
        <div className="summary-card">
          <div className="summary-icon">💡</div>
          <h4>Real Projects</h4>
          <p>Worked on live projects and industry-standard applications</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
