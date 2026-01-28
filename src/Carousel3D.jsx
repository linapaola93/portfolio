// src/Carousel3D.jsx
import React, { useState, useEffect } from "react";
import "./Carousel3D.css";

const destinations = [
  {
    id: "iceland",
    title: "ICELAND",
    subtitle: "EUROPE",
    description: "As I flew north to begin my third circuit of Iceland in four years, I was slightly anxious. The number of visitors to Iceland has doubled in that period, and I feared this might mean a little less magic to go around. At the end of this trip, 6000km later, I'm thrilled to report that the magic levels remain high. It's found in glorious football victories and Viking chants, kayaking among icebergs, sitting with puffins under the midnight sun and crunching across brand-new lava fields.",
    author: "– Carolyn Bain",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/iceland.jpg",
    bg: "#27323c"
  },
  {
    id: "china",
    title: "CHINA",
    subtitle: "ASIA",
    description: "Its modern face is dazzling, but China is no one-trick pony. The world's oldest continuous civilisation isn't all smoked glass and brushed aluminium and while you won't be tripping over artefacts – three decades of round-the-clock development and rash town-planning have taken their toll – rich seams of antiquity await.",
    author: "– Damian Harper",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/china.jpg",
    bg: "#19304a"
  },
  {
    id: "usa",
    title: "USA",
    subtitle: "NORTH AMERICA",
    description: "When it comes to travel, America has always floored me with its staggering range of possibilities. Not many other countries have so much natural beauty – mountains, beaches, rainforest, deserts, canyons, glaciers – coupled with fascinating cities to explore, an unrivaled music scene and all the things that make travel so rewarding (friendly locals, great restaurants and farmers markets, and plenty of quirky surprises).",
    author: "– Regis St Louis",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/usa.jpg",
    bg: "#2b2533"
  },
  {
    id: "peru",
    title: "PERU",
    subtitle: "SOUTH AMERICA",
    description: "For me, Peru is the molten core of South America, a distillation of the oldest traditions and the finest building, weaving and art made by the most sophisticated cultures on the continent. In Peru the wildest landscapes – from frozen Andean peaks to the deep Amazon – help us re-forge our connection to the natural world. It is also a cultural stew, where diverse peoples live side by side, negotiating modern life with humor and aplomb. Beyond that, the cuisine alone makes it worth the trip. Every return is rich and surprising.",
    author: "– Carolyn McCarthy",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/peru.jpg",
    bg: "#312f2d"
  }
];

export default function Carousel3D() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [spinDirection, setSpinDirection] = useState(null); // 'forward' | 'backward'

  const spin = (direction) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setSpinDirection(direction > 0 ? 'forward' : 'backward');

    let newIndex = activeIndex + direction;
    if (newIndex >= destinations.length) newIndex = 0;
    if (newIndex < 0) newIndex = destinations.length - 1;

    setTimeout(() => {
      setActiveIndex(newIndex);
      setSpinDirection(null);
      setTimeout(() => {
        setIsAnimating(false);
      }, 100);
    }, 1000);
  };

  const goToIndex = (targetIndex) => {
    if (isAnimating || targetIndex === activeIndex) return;
    const direction = targetIndex > activeIndex ? 1 : -1;
    spin(direction);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 38) { // Up arrow
        spin(-1);
      } else if (e.keyCode === 40) { // Down arrow
        spin(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, isAnimating]);

  const getNextIndex = () => {
    let next = activeIndex + (spinDirection === 'backward' ? -1 : 1);
    if (next >= destinations.length) next = 0;
    if (next < 0) next = destinations.length - 1;
    return next;
  };

  const nextIndex = spinDirection ? getNextIndex() : activeIndex;

  return (
    <div className="carousel3d">
      <div className="carousel3d__control">
        {destinations.map((_, index) => (
          <a
            key={index}
            href="#"
            className={index === activeIndex ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              goToIndex(index);
            }}
          />
        ))}
      </div>

      <div className={`carousel3d__stage ${spinDirection ? `js-spin-${spinDirection}` : ''} ${isAnimating ? '' : 'js-transitions-disabled'}`}>
        {/* Left Spinner */}
        <div className={`spinner spinner--left ${spinDirection ? `spin-${spinDirection}` : ''}`}>
          {destinations.map((dest, index) => (
            <div
              key={dest.id}
              className={`spinner__face ${index === activeIndex ? 'js-active' : ''} ${spinDirection && index === nextIndex ? 'js-next' : ''}`}
              style={{ backgroundColor: dest.bg }}
            >
              <div className="content" data-type={dest.id}>
                <div className="content__left" style={{ backgroundImage: `url(${dest.image})` }}>
                  <h1>
                    {dest.title}<br />
                    <span>{dest.subtitle}</span>
                  </h1>
                </div>
                <div className="content__right">
                  <div className="content__main">
                    <p>{dest.description}</p>
                    <p>{dest.author}</p>
                  </div>
                  <h3 className="content__index">{String(index + 1).padStart(2, '0')}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Spinner */}
        <div className={`spinner spinner--right ${spinDirection ? `spin-${spinDirection}` : ''}`}>
          {destinations.map((dest, index) => (
            <div
              key={dest.id + '-right'}
              className={`spinner__face ${index === activeIndex ? 'js-active' : ''} ${spinDirection && index === nextIndex ? 'js-next' : ''}`}
              style={{ backgroundColor: dest.bg }}
            >
              <div className="content" data-type={dest.id}>
                <div className="content__left">
                  {/* Left side empty for right spinner */}
                </div>
                <div className="content__right">
                  <div className="content__main">
                    <p>{dest.description}</p>
                    <p>{dest.author}</p>
                  </div>
                  <h3 className="content__index">{String(index + 1).padStart(2, '0')}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preload images */}
      <div style={{ height: 0, width: 0, overflow: 'hidden' }}>
        {destinations.map(dest => (
          <img key={dest.id} src={dest.image} alt="" />
        ))}
      </div>
    </div>
  );
}
