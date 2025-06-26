'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

import { useRouter } from "next/navigation";

const ProductCard = ({product}) => {

    const router = useRouter();

    const {id, productName, productImage, price } = product;
    const [aadedToCart, setAadedToCart] = useState(false);
    const [quantity, setQuantity] = useState(1);

  return (
    <div
        className="bg-sky-200 shadow-md rounded-lg p-2 flex flex-col  w-full max-w-sm 
        hover:shadow-lg  cursor-pointer
        hover:bg-sky-300 transform hover:scale-105
        transition-transform duration-200
                        "
        >
            <div 
                className="relative w-full h-48 md:h-52 lg:h-60 cursor-pointer group"
                onClick={() => router.push(`/products/${id}`)}
                >
                <Image
                    src={productImage}
                    alt={productName}
                    fill
                    className="rounded-lg object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-sm font-medium">For more details.. Click here</p>
                </div>
            </div>

            <h2 
                className="font-semibold text-lg text-gray-800 mb-2 truncate 
                        hover:font-bold transition-all duration-200
                        max-w-full overflow-hidden whitespace-nowrap text-ellipsis
                    "
                title={productName}
                >{productName}</h2>
            
            <div
                className='grid grid-cols-2 w-full px-1.5 py-1 bg-sky-100 rounded-lg shadow-sm mb-2 items-center'>
                
                <div>
                    <p className="text-gray-700 text-sm">Price:</p>
                    <p className="text-gray-900 font-bold text-lg">Rs. {price}</p>
                </div>
            
                {
                    aadedToCart ? (
                        <div  className="flex flex-col ">
                            <div className="flex justify-between items-center gap-0.5">
                                <button
                                    className="w-2/5 h-fit bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
                                    onClick={() => {
                                        if (quantity > 1) {
                                            setQuantity(quantity - 1);
                                        } else {
                                            setAadedToCart(false);
                                        }
                                    }}
                                >
                                    -
                                </button>
                                <span className="text-gray-900 font-bold">{quantity}</span>
                                <button
                                    className="w-2/5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                    ) : (
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
                            onClick={() => setAadedToCart(true)}
                        >
                            Add
                        </button>
                    )
                }
            </div>
            


    </div>
  )
}

export default ProductCard