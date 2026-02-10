import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'MCA in AI & ML',
      institution: 'Amity University, Uttar Pradesh',
      year: '2024 - 2026',
      status: 'Currently Pursuing',
      icon: '🎓',
      color: '#667eea',
      description: 'Specializing in Artificial Intelligence and Machine Learning',
      step: 3
    },
    {
      degree: 'BCA',
      institution: 'Vinoba Bhave University',
      year: '2021 - 2024',
      status: 'Completed',
      icon: '💻',
      color: '#764ba2',
      description: 'Bachelor of Computer Applications with focus on software development',
      step: 2
    },
    {
      degree: 'Intermediate',
      institution: 'Inter Science College, Hazaribagh',
      year: '2021',
      status: 'Completed',
      icon: '📚',
      color: '#f093fb',
      description: 'Science stream with Mathematics and Computer Science',
      step: 1
    }
  ];

  return (
    <section id="education" className="education">
      <h2>Education Journey</h2>
      <p className="education-subtitle">My academic path and qualifications</p>
      
      <div className="education-journey">
        {education.map((edu, index) => (
          <div className="journey-step" key={index}>
            <div className="step-number" style={{ background: edu.color }}>
              {edu.step}
            </div>
            <div className="step-connector"></div>
            <div className="step-card">
              <div className="step-icon" style={{ background: edu.color }}>
                {edu.icon}
              </div>
              <div className="step-content">
                <div className="step-status" style={{ borderColor: edu.color, color: edu.color }}>
                  {edu.status}
                </div>
                <h3>{edu.degree}</h3>
                <p className="step-institution">
                  <i className="fas fa-university"></i>
                  {edu.institution}
                </p>
                <div className="step-year">
                  <i className="fas fa-calendar-alt"></i>
                  <span>{edu.year}</span>
                </div>
                <p className="step-description">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
