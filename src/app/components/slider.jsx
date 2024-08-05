// components/Slider.js
"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const images = [
  '/car-967470_640.png',
  '/car-967470_640.png',
  '/car-967470_640.png',
  '/car-967470_640.png',
  '/car-967470_640.png',
];

const Slider = () => {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const images = imageRefs.current;

    gsap.set(images, { transformOrigin: "50% 50%" });
    gsap.to(images, {
      rotation: "+=360",
      duration: 10,
      repeat: -1,
      ease: "none",
      stagger: {
        each: 2.5,
        onRepeat: function() {
          gsap.set(this.targets(), { rotation: 0 });
        }
      }
    });

  }, []);

  return (
    <div className="slider-container bg-gray-800 text-white py-20 flex justify-center items-center h-96">
      <div className="relative" ref={containerRef}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Car ${index + 1}`}
            className="absolute top-0 left-0 w-48 h-48 object-cover"
            ref={(el) => (imageRefs.current[index] = el)}
            style={{
              transformOrigin: "center",
              transform: `rotate(${(360 / images.length) * index}deg) translateX(200px) rotate(-${(360 / images.length) * index}deg)`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
