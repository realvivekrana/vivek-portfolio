import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import HireModal from './components/HireModal';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ContactForm />
      <Contact />
      <Footer />
      <HireModal />
    </div>
  );
}

export default App;
