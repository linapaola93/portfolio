// HoverCards.jsx
import React, { useState, useRef, useEffect } from 'react';
import './HoverCards.css';

const Card = ({ dataImage, header, content }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const cardRef = useRef(null);
  const mouseLeaveDelay = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      setWidth(cardRef.current.offsetWidth);
      setHeight(cardRef.current.offsetHeight);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMouseX(e.pageX - rect.left - width / 2);
    setMouseY(e.pageY - rect.top - height / 2);
  };

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay.current);
  };

  const handleMouseLeave = () => {
    mouseLeaveDelay.current = setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);
  };

  const mousePX = mouseX / width;
  const mousePY = mouseY / height;

  const cardStyle = {
    transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`
  };

  const cardBgTransform = {
    transform: `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`,
    backgroundImage: `url(${dataImage})`
  };

  return (
    <div
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div className="card" style={cardStyle}>
        <div className="card-bg" style={cardBgTransform}></div>
        <div className="card-info">
          <h1>{header}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

const HoverCards = () => {
  const cards = [
    {
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=400&fit=crop",
      header: "Documentales",
      content: "Historias profundas que exploran la realidad y emocionan al espectador."
    },
    {
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=400&fit=crop",
      header: "Videoclips",
      content: "Visuales impactantes que dan vida a la música y crean experiencias únicas."
    },
    {
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=400&fit=crop",
      header: "Publicidad",
      content: "Contenido estratégico que conecta marcas con su audiencia de forma creativa."
    },
    {
      image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&h=400&fit=crop",
      header: "Eventos",
      content: "Capturamos momentos especiales con un estilo cinematográfico profesional."
    }
  ];

  return (
    <div className="hover-cards-section">
      <h1 className="hover-cards-title">Pasa el cursor sobre las tarjetas</h1>
      <div className="hover-cards-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            dataImage={card.image}
            header={card.header}
            content={card.content}
          />
        ))}
      </div>
    </div>
  );
};

export default HoverCards;
