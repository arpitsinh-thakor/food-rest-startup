'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import EditProduct from './EditProduct';

const SellerProductCard = ({ product }) => {
  const {
    productName,
    productImage,
    price,
    category,
    quantity,
  } = product;

  const [isEditing, setIsEditing] = useState(false); 

  return (
    <div>
      {
        isEditing ? (
          <EditProduct product={product} setIsEditing={setIsEditing} />
        ) : (
          <div className="bg-white rounded-lg shadow-md p-1.5 hover:shadow-lg transition-shadow duration-300 flex items-center justify-between gap-4">
          {/* Left: Image + Info */}
            <div className="flex items-center gap-4 flex-grow">
              <Image
                src={productImage}
                alt={productName}
                width={120}
                height={120}
                className="rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-700">{productName}</h3>
                <p className="text-gray-600 text-sm">Category: {category}</p>
                <p className="text-gray-600 text-sm">Price: ${price}</p>
                <p className="text-gray-600 text-sm">Quantity: {quantity}</p>
              </div>
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-col gap-1 items-end">
              <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 w-32 cursor-pointer"
                  onClick={() => {
                      //display EditProduct component
                      setIsEditing(true);
                  }}
                  >
                Edit
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300 w-32 cursor-pointer">
                Delete
              </button>
            </div>
          </div>
              )
          }
    </div>
  );
};

export default SellerProductCard;
