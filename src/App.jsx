// src/App.jsx
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import DualSlider from "./DualSlider";
import BackgroundSlider from "./BackgroundSlider";
import Gallery3D from "./Gallery3D";
import "./App.css";

function App() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#191b1b", minHeight: "100vh", color: "#fff" }}>
      {/* Navbar estático */}
      <Navbar />

      {/* About Me Section */}
      <motion.section
        id="sobremi"
        className="about-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background Slider */}
        <BackgroundSlider />
        
        <div className="about-container">
          <motion.img 
            src="/images/sobremi3.jpeg" 
            alt="Santiago Cárdenas" 
            className="about-img"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          <div className="about-data">
            <h1 className="home-title">Santiago Cárdenas</h1>
            <h3 className="home-subtitle">Productor Audiovisual</h3>
            <div className="home-description-wrapper">
              <p className="home-description">
                Tengo amplia experiencia en producción audiovisual, dirección de fotografía y diseño creativo, 
                produciendo contenido de calidad que cuenta historias que conectan emocionalmente con la audiencia.
              </p>
            </div>

            <div className="home-social">
              <span className="home-social-follow">Sígueme</span>
              <ul className="home-social-links">
                <li>
                  <motion.a 
                    href="https://www.facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="https://vimeo.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="fab fa-vimeo-v" aria-hidden="true"></i>
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="https://www.youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="fab fa-youtube" aria-hidden="true"></i>
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="https://www.instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </motion.a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Portafolio */}
      <motion.section
        id="portafolio"
        className="section portafolio-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 style={sectionTitle}>Portafolio</h2>
        
        {/* Galería Visual 3D - Contenido Principal */}
        <div style={{ marginBottom: '4rem' }}>
          <Gallery3D />
        </div>

        {/* Dual Slider */}
        <div>
          <DualSlider />
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="app-footer">
        © 2026 Santiago Cárdenas<br className="mobile-break" />
        <span> | Sígueme en </span>
        <a href="https://instagram.com/">Instagram</a>
        <span> · </span>
        <a href="https://vimeo.com/">Vimeo</a>
      </footer>
    </div>
  );
}

// Styles
const sectionTitle = {
  color: '#6dd5c3',
  marginBottom: 18,
  fontSize: 'clamp(24px, 5vw, 32px)'
};

export default App;
