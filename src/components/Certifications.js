import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Full Stack Development Career Program',
      issuer: 'Skill Academy by Testbook',
      date: 'July 2025',
      credentialId: 'FUF296',
      icon: '🎓',
      color: '#10b981',
      skills: ['ChatGPT', 'Full Stack', 'Web Development']
    },
    {
      title: 'ReactJS',
      issuer: 'Skill Academy by Testbook',
      date: 'July 2025',
      credentialId: 'FUREF296',
      icon: '⚛️',
      color: '#667eea',
      skills: ['React.js', 'Frontend', 'JavaScript']
    },
    {
      title: 'MongoDB and Node.js',
      issuer: 'Skill Academy by Testbook',
      date: 'July 2025',
      credentialId: 'FUMOF296',
      icon: '🍃',
      color: '#10b981',
      skills: ['MongoDB', 'Node.js', 'Backend']
    },
    {
      title: 'Full Stack Development using MERN',
      issuer: 'CETPA Infotech Pvt Ltd',
      date: 'April 2025',
      credentialId: 'ETFull24202506M8121496',
      icon: '💻',
      color: '#f59e0b',
      skills: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js']
    },
    {
      title: 'Certificate Course in Basic of AI',
      issuer: 'Amity University Online',
      date: 'September 2025',
      credentialId: 'CL77yoGTJG',
      icon: '🤖',
      color: '#3b82f6',
      skills: ['Artificial Intelligence', 'Machine Learning', 'AI Basics']
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <h2>Certifications & Achievements</h2>
      <p className="certifications-subtitle">Professional certifications validating my technical expertise</p>
      
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-header">
              <div className="cert-icon-wrapper" style={{ background: cert.color }}>
                <span className="cert-icon">{cert.icon}</span>
              </div>
              <div className="cert-badge">
                <i className="fas fa-certificate"></i>
                <span>Verified</span>
              </div>
            </div>

            <div className="cert-body">
              <h3>{cert.title}</h3>
              <p className="cert-issuer">
                <i className="fas fa-building"></i>
                {cert.issuer}
              </p>
              
              <div className="cert-details">
                <div className="cert-detail-item">
                  <i className="fas fa-calendar-check"></i>
                  <span>{cert.date}</span>
                </div>
                <div className="cert-detail-item">
                  <i className="fas fa-id-card"></i>
                  <span>{cert.credentialId}</span>
                </div>
              </div>

              <div className="cert-skills">
                {cert.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag" style={{ borderColor: cert.color }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="cert-footer">
              <button className="cert-btn" style={{ background: cert.color }}>
                <i className="fas fa-eye"></i>
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="certifications-stats">
        <div className="stat-card">
          <div className="stat-number">5+</div>
          <div className="stat-label">Certifications</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">3</div>
          <div className="stat-label">Institutions</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">100%</div>
          <div className="stat-label">Verified</div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
