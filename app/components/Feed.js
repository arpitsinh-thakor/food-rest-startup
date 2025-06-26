'use client'
import React from 'react'
import ProductCard from './ProductCard';

const {feedData} =  require("../utils/constants");

const Feed = () => {
  return (
    <div className="container mx-auto p-4 ">
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    feedData.map((item) => (
                        <div key={item.id}  className="flex justify-center">
                            <ProductCard product = {item} />
                        </div>
                    ))
                }
            </div>
        </div>
            
    </div>
  )
}

export default Feed