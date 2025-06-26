'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

const ProductCard = ({product}) => {
    // Destructure product properties
    const { productName, productImage, price } = product;
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
            <Image
                src={productImage}
                alt={productName}
                // width={200}
                // height={200}
                className="rounded-lg mb-4 object-cover w-full h-48 md:h-52 lg:h-60"
            />
            <h2 
                className="font-semibold text-lg text-gray-800 mb-2 truncate 
                        hover:font-bold transition-all duration-200
                        max-w-full overflow-hidden whitespace-nowrap text-ellipsis
                    "
                title={productName}
                >{productName}</h2>
            
            <div
                className='grid grid-cols-2 w-full px-1 py-1 bg-sky-100 rounded-lg shadow-sm mb-2 items-center'>
                
                <div>
                    <p className="text-gray-700 text-sm">Price:</p>
                    <p className="text-gray-900 font-bold text-lg">Rs. {price}</p>
                </div>
            
                {
                    aadedToCart ? (
                        <div  className="flex flex-col ">
                            <div className="flex justify-between items-center gap-0.5">
                                <button
                                    className="w-2/5 h-fit bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
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
                                    className="w-2/5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                    ) : (
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
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