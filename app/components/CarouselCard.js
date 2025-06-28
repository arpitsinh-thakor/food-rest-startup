'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselCard = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = images.length;

  // 👉 Auto-slide every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 2000); // 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Image */}
      <div className="relative p-2 w-full h-40 md:h-48 lg:h-56 overflow-hidden rounded-lg shadow-md bg-white">
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

      {/* Page Indicator */}
      <div className="absolute bottom-1 right-3 text-center p-1 text-sm text-gray-600 font-medium
        bg-white rounded-b-sm shadow-md hover:bg-gray-100 transition"
        >
        {currentIndex + 1} / {total}
      </div>
    </div>
  );
};

export default CarouselCard;
