'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

const ProductCardDetailed = ({product}) => {

    const { productName, productImage, price, description, category, qantity, weight, selfLife } = product;

     const [aadedToCart, setAadedToCart] = useState(false);
    const [quantity, setQuantity] = useState(1);

  return (
    <div>
        <div className="grid grid-cols-2  md:flex-row gap-2 bg-white shadow-lg rounded-lg p-2 max-w-2xl mx-auto    ">
            <div>
                <Image
                    src={productImage}
                    alt={productName}
                    width={300}
                    height={350}
                    className=" rounded-lg "
                />
            </div>
            <div>
                <div className="p-1">
                    <h2 className='text-2xl font-bold text-gray-800 mb-2 truncate hover:font-bold transition-all duration-200 max-w-full overflow-hidden whitespace-nowrap text-ellipsis'
                        >{productName}</h2>
                    <p className='text-lg text-gray-800 mb-2 font-semibold'
                        >Price: Rs. {price}</p>
                    <p  className="text-gray-600 mb-2"
                        title={description}
                        >{description}</p>
                    <p className='text-gray-600 mb-2'
                        >Category: {category}</p>
                    <p className='text-gray-600 mb-2'
                        >Quantity: {qantity}</p>
                    <p className='text-gray-600 mb-2'
                        >Weight: {weight}g</p>
                    <p className="text-gray-600 mb-2"
                        >Self Life: {selfLife} days</p>

                    {
                        aadedToCart ? (
                            <div  className="flex flex-col  w-1/2">
                                <div className=" flex justify-between items-center gap-0.5">
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
                                
                                <div>
                                    <button
                                        className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300 mt-2 cursor-pointer"
                                        onClick={() => {
                                            alert(`Buying ${productName} x ${quantity}`);
                                            setAadedToCart(false);
                                        }}
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>

                            ) : (
                                <button
                                    className="w-1/2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
                                    onClick={() => setAadedToCart(true)}
                                >
                                    Add
                                </button>
                            )
        }
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProductCardDetailed