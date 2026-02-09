import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-card">
          <div className="icon">🚀</div>
          <p>I'm a passionate Full Stack Web Developer skilled in the MERN stack — HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.</p>
        </div>
        <div className="about-card">
          <div className="icon">🎓</div>
          <p>I've completed my BCA and currently pursuing MCA in AI & ML from Amity University Online.</p>
        </div>
        <div className="about-card">
          <div className="icon">🛠️</div>
          <p>I focus on writing clean, efficient code and solving real-world problems through development.</p>
        </div>
        <div className="about-card">
          <div className="icon">📜</div>
          <p>I've earned multiple certifications in JavaScript, React, and MongoDB.</p>
        </div>
        <div className="about-card">
          <div className="icon">🎯</div>
          <p>My goal is to become a professional developer and contribute to impactful projects.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
