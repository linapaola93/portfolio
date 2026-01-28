// src/Gallery3D.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Gallery3D.css";

const galleryItems = [
  {
    src: "/images/sobremi1.jpeg",
    alt: "Proyecto 1"
  },
  {
    src: "/images/sobremi2.jpeg",
    alt: "Proyecto 2"
  },
  {
    src: "/images/sobremi3.jpeg",
    alt: "Proyecto 3"
  },
  {
    src: "/images/sobremi4.jpeg",
    alt: "Proyecto 4"
  },
  {
    src: "/images/sobremi5.jpeg",
    alt: "Proyecto 5"
  },
  {
    src: "/images/sobremi6.jpeg",
    alt: "Proyecto 6"
  },
  {
    src: "/images/sobremi7.jpeg",
    alt: "Proyecto 7"
  },
  {
    src: "/images/Sobremi8.jpeg",
    alt: "Proyecto 8"
  },
  {
    src: "/images/sobremi9.jpeg",
    alt: "Proyecto 9"
  },
  {
    src: "/images/sobremi10.jpeg",
    alt: "Proyecto 10"
  },
  {
    src: "/images/sobremi11.jpeg",
    alt: "Proyecto 11"
  },
  {
    src: "/images/sobremi12.jpeg",
    alt: "Proyecto 12"
  },
  {
    src: "/images/sobremi13.jpeg",
    alt: "Proyecto 13"
  },
  {
    src: "/images/sobremi14.jpeg",
    alt: "Proyecto 14"
  },
  {
    src: "/images/sobremi15.jpeg",
    alt: "Proyecto 15"
  },
  {
    src: "/images/sobremi16.jpeg",
    alt: "Proyecto 16"
  }
];

export default function Gallery3D() {
  return (
    <div className="gallery3d-section">
      <div className="gallery3d-container">
        <div className="gallery3d-wrap">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={index}
              className={`gallery3d-item gallery3d-item-${index + 1}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
