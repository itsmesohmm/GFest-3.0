import React, { useState } from 'react';
import './Carousel.css'; // Assuming you have CSS for the carousel
import img3 from '../images/img3.jpg'; // Import the image from the src/images folder
import img2 from '../images/img2.jpg';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { src: img3, alt: 'Goa Festival Image 3' }, // Use the imported image
    { src: img2, alt: 'Goa Festival Image 2' }, // Replace with other images later
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
