'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselCard = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 2000); // Auto-slide every 2 seconds

    return () => clearInterval(interval);
  }, [total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto mb-3">
      {/* Image */}
      <div className="relative w-full h-40 md:h-48 lg:h-56 overflow-hidden">
        <Image
          src={images[currentIndex].image}
          alt={images[currentIndex].alt}
          fill
          className="object-contain p-2"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-3 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-3 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-200'
            } transition`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselCard;
