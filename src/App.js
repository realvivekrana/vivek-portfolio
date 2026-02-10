import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HireModal from './components/HireModal';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Resume />
      <ContactForm />
      <Contact />
      <Footer />
      <HireModal />
    </div>
  );
}

export default App;
