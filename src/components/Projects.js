import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'To-Do List App',
      tech: 'HTML • CSS • JavaScript',
      description: 'A fully functional task management application with add, edit, delete, and mark complete features. Clean UI with local storage persistence.',
      github: 'https://github.com/realvivekrana/todo-list-app-html-css-js',
      live: 'https://realvivekrana.github.io/todo-list-app-html-css-js/',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: ['Task Management', 'Local Storage', 'Responsive Design']
    },
    {
      title: 'Weather App',
      tech: 'HTML • CSS • JavaScript • API',
      description: 'Real-time weather application powered by OpenWeather API. Features location search, current conditions, and 5-day forecast with dynamic backgrounds.',
      github: 'https://github.com/realvivekrana/weather-app-html-css-js',
      live: 'https://realvivekrana.github.io/weather-app-html-css-js/',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      features: ['Live Weather Data', 'Location Search', 'API Integration']
    },
    {
      title: 'Personal Portfolio',
      tech: 'React • CSS3 • Responsive',
      description: 'Modern, animated portfolio website built with React. Features smooth scrolling, typing animations, and glassmorphism design with full responsiveness.',
      github: 'https://github.com/realvivekrana',
      live: '#home',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      features: ['React Components', 'Smooth Animations', 'Modern UI/UX']
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <p className="projects-subtitle">Showcasing my frontend development skills</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header" style={{ background: project.gradient }}>
              <div className="project-number">0{index + 1}</div>
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p className="tech">{project.tech}</p>
              <p className="description">{project.description}</p>
              <div className="features">
                {project.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">{feature}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">
                  <i className="fab fa-github"></i> View Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-live">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
