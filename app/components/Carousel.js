
import React from 'react'
import Image from 'next/image';
import { carouselData } from '../utils/constants'; 
import CarouselCard from './CarouselCard';

const Carousel = () => {

    const mainImg = carouselData[0];
    const secondaryImages = carouselData.slice(1);
    
  return (
    <div className='container mx-auto flex flex-col '>
        <div
            className="relative w-full h-64 overflow-hidden mb-4 mt-1"
            style={{ backgroundColor: '#f8f8f8' }} // Optional: Set a background color
         >
            <Image
            src={mainImg.image}
            alt={mainImg.alt}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
        </div>
        <div
            >
            <CarouselCard images={secondaryImages} />
        </div>
        
    </div>
  )
}

export default Carousel