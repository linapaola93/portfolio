// src/CircularGallery.jsx
import React from "react";
import "./CircularGallery.css";

const images = [
  { 
    src: "/images/shooting-day.jpg", 
    alt: "Shooting Day - Cortometraje Ficción",
    fallback: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=800&fit=crop" 
  },
  { 
    src: "/images/camera-work.jpg", 
    alt: "Director de Fotografía en set",
    fallback: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=800&fit=crop"
  }
];

export default function CircularGallery() {
  return (
    <div className="gallery-wrapper">
      <div className="camera-lens-outer">
        <div className="camera-silver-ring">
          <div className="camera-inner-housing">
            <div className="camera-ribbing-container">
              <div className="camera-ribbing">
                <div className="camera-ribbing">
                  <div className="camera-ribbing">
                    <div className="camera-ribbing">
                      <div className="camera-ribbing">
                        <div className="camera-ribbing">
                          <div className="camera-ribbing">
                            <div className="camera-ribbing">
                              <div className="camera-ribbing">
                                <div className="camera-ribbing">
                                  <div className="camera-ribbing">
                                    <div className="camera-aperture-housing">
                                      <div className="gallery">
                                        {images.map((img, index) => (
                                          <img 
                                            key={index} 
                                            src={img.src} 
                                            alt={img.alt}
                                            loading="lazy"
                                            onError={(e) => {
                                              if (e.target.src !== img.fallback) {
                                                e.target.src = img.fallback;
                                              }
                                            }}
                                          />
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="camera-outer-lens">
              <div className="camera-shine"></div>
            </div>
          </div>
        </div>
        <div className="camera-shadow"></div>
      </div>
    </div>
  );
}
