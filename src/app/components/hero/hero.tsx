"use client";

import React, { useState } from 'react';
import Button from '@mui/material/Button';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import './hero.scss';

const slideContent = [
  {
    title: 'Best Gun Selection in the State',
    content: 'We have the best guns and the best selection in all of New Jersey. Variety of options to suit your every need.',
    button: 'Shop Now',
    image: '/slide1.jpg',
  },
  {
    title: 'Dependable and Quick Service',
    content: 'We pride ourselves on high quality and quick service. Schedule a service for your firearm today.',
    button: 'Schedule Service',
    image: '/slide2.jpg'
  },
  {
    title: 'Title 3',
    content: 'This is sample content for slide 3',
    image: '/slide3.jpg'
  }
];

const Hero = () => {
  const [slide, setSlide] = useState(0);

  const onPrevSlide = () => {
    const currentSlide = slide;
    setSlide(slide === 0 ? slideContent.length - 1 : currentSlide - 1);
  };
  const onNextSlide = () => {
    const currentSlide = slide;
    setSlide(slide === slideContent.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="hero-container">
      <div
        className="hero"
        style={{ backgroundImage: `url(${slideContent[slide].image})` }}
      >
        <div className="hero-content">
          <h2 className="hero-title">
            {slideContent[slide].title}
          </h2>
          <p className="hero-text">
            {slideContent[slide].content}
          </p>
          {slideContent[slide].button &&
            <Button variant="contained">
              {slideContent[slide].button}
            </Button>
          }
        </div>

        <div className="slide-display">
          <button onClick={onPrevSlide} className="arrow-btn left">
            <ChevronLeftIcon />
          </button>
          {slideContent.map((s, idx) =>
            <div key={`${s.title}-dot`} className={`slide-dot ${idx === slide ? 'selected' : ''}`}/>
          )}
          <button onClick={onNextSlide} className="arrow-btn right">
            <ChevronRightIcon />
          </button>
        </div>
      </div>
      <div className="bottom-hero-card">
          <div className="hero-card-image" />
          <div className="hero-card-content">
            <h4>Top Quality Guns</h4>
            <p>Come and check out our great inventory of guns and ammo from an assortment of quality brands that you know and love.</p>
          </div>
      </div>
    </div>
  );
};

export default Hero;
