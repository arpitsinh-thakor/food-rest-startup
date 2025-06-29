
import React from 'react'
import Image from 'next/image';
import { carouselData } from '../utils/constants'; 
import CarouselCard from './CarouselCard';

const Carousel = () => {
    const images = carouselData;
    
  return (
    <div className='container mx-auto flex flex-col '>
        <div
            >
            <CarouselCard images={images} />
        </div>
        
    </div>
  )
}

export default Carousel