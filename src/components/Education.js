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
      description: 'Specializing in Artificial Intelligence and Machine Learning'
    },
    {
      degree: 'BCA',
      institution: 'Vinoba Bhave University',
      year: '2021 - 2024',
      status: 'Completed',
      icon: '💻',
      color: '#764ba2',
      description: 'Bachelor of Computer Applications with focus on software development'
    },
    {
      degree: 'Intermediate',
      institution: 'Inter Science College, Hazaribagh',
      year: '2021',
      status: 'Completed',
      icon: '📚',
      color: '#f093fb',
      description: 'Science stream with Mathematics and Computer Science'
    }
  ];

  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <p className="education-subtitle">My academic journey and qualifications</p>
      
      <div className="education-grid">
        {education.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="edu-icon-wrapper" style={{ background: edu.color }}>
              <span className="edu-icon">{edu.icon}</span>
            </div>
            
            <div className="edu-content">
              <div className="edu-status" style={{ borderColor: edu.color, color: edu.color }}>
                {edu.status}
              </div>
              
              <h3>{edu.degree}</h3>
              <p className="edu-institution">
                <i className="fas fa-university"></i>
                {edu.institution}
              </p>
              
              <div className="edu-year">
                <i className="fas fa-calendar-alt"></i>
                <span>{edu.year}</span>
              </div>
              
              <p className="edu-description">{edu.description}</p>
            </div>
            
            <div className="edu-decoration"></div>
          </div>
        ))}
      </div>

      <div className="education-stats">
        <div className="stat-item">
          <div className="stat-icon">🎯</div>
          <h4>Academic Excellence</h4>
          <p>Focused on cutting-edge technologies</p>
        </div>
        <div className="stat-item">
          <div className="stat-icon">🚀</div>
          <h4>Continuous Learning</h4>
          <p>Always expanding knowledge base</p>
        </div>
        <div className="stat-item">
          <div className="stat-icon">💡</div>
          <h4>Practical Skills</h4>
          <p>Theory combined with hands-on experience</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
