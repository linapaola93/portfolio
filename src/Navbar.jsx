// src/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('sobremi');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar sección activa
      const sections = ['sobremi', 'portafolio'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`main-navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="main-navbar__container">
        <div className="main-navbar__brand">
          <motion.a 
            href="#sobremi"
            className="main-navbar__logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img src="/images/icono.jpeg" alt="Logo" />
          </motion.a>
          <span className="main-navbar__brand-text">Santicf-Film</span>
        </div>
        
        <div className="main-navbar__menu">
          <a 
            href="#sobremi" 
            className={`main-navbar__link ${activeSection === 'sobremi' ? 'active' : ''}`}
          >
            Sobre Mí
          </a>
          <a 
            href="#portafolio" 
            className={`main-navbar__link ${activeSection === 'portafolio' ? 'active' : ''}`}
          >
            Portafolio
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
