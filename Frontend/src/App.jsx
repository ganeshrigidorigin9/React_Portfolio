
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './sections/Navbar/Navbar.jsx';
import './App.css';
import Hero from './sections/Hero/Hero.jsx';
import Projects from './sections/Projects/Projects.jsx';
import Skills from './sections/Skills/Skills.jsx';
import Certifications from './sections/Certifications/Certifications.jsx';
import Contact from './sections/Contact/Contact.jsx';
import Footer from './sections/Footer/Footer.jsx';

function ScrollToSection() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToSection />
      <Hero id="hero" />
      <Projects id="projects" />
      <Skills id="skills" />
      <Certifications id="certification" />
      <Contact id="contact" />
      <Footer />
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/hero" element={<div />} />
        <Route path="/projects" element={<div />} />
        <Route path="/skills" element={<div />} />
        <Route path="/certifications" element={<div />} />
        <Route path="/contact" element={<div />} />
      </Routes>
    </Router>
  );
}

export default App;
