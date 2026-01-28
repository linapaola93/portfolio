// src/FancySlider.jsx
import React, { useState, useEffect, useRef } from 'react';
import './FancySlider.css';

const slides = [
  {
    id: 1,
    title: ['Productor', 'Audiovisual'],
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1920&h=1080&fit=crop',
    bgColor: 'green',
    btnText: 'Ver más'
  },
  {
    id: 2,
    title: ['Director', 'Creativo'],
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop',
    bgColor: 'dark',
    btnText: 'Ver más'
  },
  {
    id: 3,
    title: ['Director de', 'Fotografía'],
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&h=1080&fit=crop',
    bgColor: 'red',
    btnText: 'Ver más'
  }
];

export default function FancySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [prevSlide, setPrevSlide] = useState(null);
  const autoSlideRef = useRef(null);

  const goToSlide = (index) => {
    if (sliding || index === currentSlide) return;
    
    setSliding(true);
    setPrevSlide(currentSlide);
    setCurrentSlide(index);

    setTimeout(() => {
      setSliding(false);
      setPrevSlide(null);
    }, 1700); // Match with CSS transition duration
  };

  useEffect(() => {
    // Auto-sliding every 5 seconds
    autoSlideRef.current = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      goToSlide(nextSlide);
    }, 5000);

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [currentSlide]);

  const handleControlClick = (index) => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    goToSlide(index);
  };

  return (
    <div className="fnc-slider">
      <div className="fnc-slider__slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`fnc-slide fnc-slide-${index + 1} m--blend-${slide.bgColor} ${
              index === currentSlide ? 'm--active-slide' : ''
            } ${index === prevSlide ? 'm--previous-slide' : ''} ${
              sliding && index === currentSlide ? 'm--before-sliding' : ''
            }`}
          >
            <div className="fnc-slide__inner" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="fnc-slide__mask">
                <div 
                  className="fnc-slide__mask-inner" 
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
              </div>
              <div className="fnc-slide__content">
                <h2 className="fnc-slide__heading">
                  <div className="fnc-slide__heading-line">
                    <span>{slide.title[0]}</span>
                  </div>
                  <div className="fnc-slide__heading-line">
                    <span>{slide.title[1]}</span>
                  </div>
                </h2>
                <button type="button" className="fnc-slide__action-btn">
                  {slide.btnText}
                  <span data-text={slide.btnText}>{slide.btnText}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav className="fnc-nav">
        <div className="fnc-nav__bgs">
          {slides.map((slide, index) => (
            <div
              key={`bg-${slide.id}`}
              className={`fnc-nav__bg m--navbg-${slide.bgColor} fnc-nav__bg-${index + 1} ${
                index === currentSlide ? 'm--active-nav-bg' : ''
              } ${index === prevSlide ? 'm--previous-nav-bg' : ''} ${
                sliding && index === currentSlide ? 'm--nav-bg-before' : ''
              }`}
            />
          ))}
        </div>
        <div className="fnc-nav__controls">
          {slides.map((slide, index) => (
            <button
              key={`control-${slide.id}`}
              className={`fnc-nav__control ${
                index === currentSlide ? 'm--active-control' : ''
              } ${index === prevSlide ? 'm--prev-control' : ''}`}
              onClick={() => handleControlClick(index)}
            >
              {slide.title.join(' ')}
              <span className="fnc-nav__control-progress" />
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
