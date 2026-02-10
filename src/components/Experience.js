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
      color: '#667eea',
      step: 3
    },
    {
      company: 'Cetpa Infotech Pvt Ltd',
      location: 'Noida',
      role: 'Internship & Training',
      period: 'April 2025 - September 2025',
      status: 'Completed',
      icon: '💻',
      color: '#764ba2',
      step: 2
    },
    {
      company: 'Skills Academy',
      location: 'Mumbai',
      role: 'Training',
      period: 'September 2023 - May 2024',
      status: 'Completed',
      icon: '📚',
      color: '#f093fb',
      step: 1
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2>Professional Journey</h2>
      <p className="experience-subtitle">My career path in web development and training</p>
      
      <div className="experience-journey">
        {experiences.map((exp, index) => (
          <div className="journey-step" key={index}>
            <div className="step-number" style={{ background: exp.color }}>
              {exp.step}
            </div>
            <div className="step-connector"></div>
            <div className="step-card">
              <div className="step-icon" style={{ background: exp.color }}>
                {exp.icon}
              </div>
              <div className="step-content">
                <div className="step-status" style={{ borderColor: exp.color, color: exp.color }}>
                  {exp.status}
                </div>
                <h3>{exp.company}</h3>
                <p className="step-role">{exp.role}</p>
                <div className="step-details">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
