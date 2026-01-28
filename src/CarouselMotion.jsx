// CarouselMotion.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=700&q=80"
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0
  })
};

export default function CarouselMotion() {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div style={{
      width: 420,
      margin: "2rem auto",
      textAlign: "center",
      position: "relative"
    }}>
      <div style={{overflow: "hidden", borderRadius: 16, boxShadow: "0 4px 20px #0005", marginBottom: 16}}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            style={{ width: "420px", height: "262px", objectFit: "cover" }}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
      </div>
      <button onClick={() => paginate(-1)} style={btnStyle}>‹</button>
      <button onClick={() => paginate(1)} style={btnStyle}>›</button>
      <div style={{ marginTop: 8, color: "#00c6ff" }}>
        {imageIndex + 1} / {images.length}
      </div>
    </div>
  );
}

const btnStyle = {
  fontSize: 26,
  padding: "0.3em 0.7em",
  background: "#232323",
  color: "#00c6ff",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
  margin: "0 10px",
  boxShadow: "0 2px 10px #00c6ff20",
  transition: "background 0.2s"
};
