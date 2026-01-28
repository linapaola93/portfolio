// src/DualSlider.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./DualSlider.css";

const slides = [
  {
    id: 1,
    name: "Fotografía Audiovisual 1",
    image: "/images/Fotografia1.jpeg",
    caption: "Capturando momentos únicos que cuentan historias a través del lente. Cada imagen refleja la esencia del trabajo audiovisual."
  },
  {
    id: 2,
    name: "Fotografía Audiovisual 2",
    image: "/images/Fotografia2.jpeg",
    caption: "Producción audiovisual que conecta emocionalmente con la audiencia. Calidad y creatividad en cada proyecto."
  },
  {
    id: 3,
    name: "Fotografía Audiovisual 3",
    image: "/images/Fotografia3.jpeg",
    caption: "Dirección de fotografía que transforma ideas en imágenes impactantes. Arte visual en movimiento."
  },
  {
    id: 4,
    name: "Fotografía Audiovisual 4",
    image: "/images/Fotografia4.jpeg",
    caption: "Diseño creativo y producción de contenido que marca la diferencia. Innovación en cada encuadre."
  },
  {
    id: 6,
    name: "Fotografía Audiovisual 6",
    image: "/images/Fotografia6.jpeg",
    caption: "Experiencia en producción audiovisual con atención al detalle. Profesionalismo en cada toma."
  },
  {
    id: 7,
    name: "Fotografía Audiovisual 7",
    image: "/images/Fotografia7.jpeg",
    caption: "Contenido audiovisual de alta calidad que conecta con las emociones del espectador."
  },
  {
    id: 8,
    name: "Fotografía Audiovisual 8",
    image: "/images/Fotografia8.jpeg",
    caption: "Storytelling visual que captura la esencia de cada proyecto. Narrativa a través de la imagen."
  },
  {
    id: 9,
    name: "Fotografía Audiovisual 9",
    image: "/images/Fotografia9.jpeg",
    caption: "Producción creativa con enfoque en la narrativa visual. Cada proyecto cuenta una historia única."
  },
  {
    id: 10,
    name: "Fotografía Audiovisual 10",
    image: "/images/Fotografia10.jpeg",
    caption: "Pasión por el audiovisual reflejada en cada trabajo. Compromiso con la excelencia creativa."
  }
];

export default function DualSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="dual-slider-container">
      {/* Main Slider */}
      <div className="main-slider-wrapper">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="main-slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <figure 
                className="slide-bgimg" 
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <img src={slide.image} alt={slide.name} className="entity-img" />
              </figure>
              <div className="content">
                <p className="title">{slide.name}</p>
                <span className={`caption ${activeIndex === index ? 'show' : ''}`}>
                  {slide.caption}
                </span>
              </div>
            </SwiperSlide>
          ))}
          
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </div>
  );
}
