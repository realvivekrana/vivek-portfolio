import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
        <div className="nav-container">
          <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="logo-bracket">&lt;</span>
            VK
            <span className="logo-bracket">/&gt;</span>
          </div>
          <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <div className="menu-close" onClick={() => setMenuOpen(false)}>
              <i className="fas fa-times"></i>
            </div>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
            <a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a>
            <a href="#contact-form" onClick={() => setMenuOpen(false)}>Get in Touch</a>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      {menuOpen && <div className="nav-backdrop" onClick={() => setMenuOpen(false)}></div>}
    </>
  );
};

export default Navbar;
