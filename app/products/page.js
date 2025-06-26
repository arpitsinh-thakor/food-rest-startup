'use client'
import React from 'react'
import ProductCard from '../components/ProductCard';

const {feedData} =  require("../utils/constants");


const Products = () => {
  return (
    <div>
        <div className="container mx-auto p-4">
            <div>
            <h1 className="text-2xl font-bold mb-4">Products</h1>
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
    </div>
  )
}

export default Products