
import React from 'react'
import Image from 'next/image';
import { carouselData } from '../utils/constants'; 
import CarouselCard from './CarouselCard';

const Carousel = () => {
    const images = carouselData;
    
  return (
    <div className=' flex flex-col w-full '>
        <div
            className='w-full '
            >
            <CarouselCard images={images} />
        </div>
        
    </div>
  )
}

export default Carousel