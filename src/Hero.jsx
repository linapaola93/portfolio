// src/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const titles = [
  "Productor Audiovisual",
  "Director Creativo",
  "Director de Fotografía",
  "Editor Profesional",
  "Content Creator"
];

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const current = titles[currentTitle];
      
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        setTypingSpeed(150);
        
        if (displayText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        setTypingSpeed(100);
        
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitle, typingSpeed]);

  return (
    <>
      {/* Navbar */}
      <motion.nav 
        className={`navbar ${isScrolled ? 'nav-sticky' : ''}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="navbar-container">
          <div className="navbar-menu">
            <a href="#home" className="nav-link active">Inicio</a>
            <a href="#sobremi" className="nav-link">Sobre Mí</a>
            <a href="#portafolio" className="nav-link">Portafolio</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Banner */}
      <div className="hero" id="home">
        <div className="hero-container">
          <div className="hero-row">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero-text">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Soy
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Santiago Cárdenas
                </motion.h1>
                <h2>
                  {displayText}
                  <span className="typed-cursor">|</span>
                </h2>
              </div>
              <motion.div 
                className="hero-btn"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <a className="btn" href="#portafolio">Ver Portafolio</a>
                <a className="btn" href="#contacto">Contáctame</a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img src="/images/shooting-day.jpg" alt="Santiago Cárdenas" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
