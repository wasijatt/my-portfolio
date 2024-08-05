// components/HeaderHero.js
"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeaderHero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      x: -20,
      y: -20,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <div className="header-hero bg-black text-white h-screen flex flex-col justify-center items-center relative">
      <header className="mb-10 text-4xl">Welcome to Car Showcase</header>
      <div className="absolute bottom-0 right-0 mb-4 mr-4" ref={imageRef}>
        <img src="/car-967470_640.png" alt="Ferrari" className="object-cover w-48 h-48" />
      </div>
    </div>
  );
};

export default HeaderHero;
