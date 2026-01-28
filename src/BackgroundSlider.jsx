// src/BackgroundSlider.jsx
import React, { useState, useEffect } from "react";
import "./BackgroundSlider.css";

const images = [
  "/images/sobremi1.jpeg",
  "/images/sobremi2.jpeg",
  "/images/sobremi3.jpeg",
  "/images/sobremi4.jpeg",
  "/images/sobremi5.jpeg",
  "/images/sobremi6.jpeg",
  "/images/sobremi7.jpeg",
  "/images/Sobremi8.jpeg",
  "/images/sobremi9.jpeg",
  "/images/sobremi10.jpeg",
  "/images/sobremi11.jpeg",
  "/images/sobremi12.jpeg",
  "/images/sobremi13.jpeg",
  "/images/sobremi14.jpeg",
  "/images/sobremi15.jpeg",
  "/images/sobremi16.jpeg"
];

export default function BackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(images.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // Cambia cada 7 segundos para transición más suave

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="background-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`background-slider__slide ${
            index === currentIndex ? 'active' : ''
          } ${
            index === prevIndex && index !== currentIndex ? 'prev' : ''
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
}
