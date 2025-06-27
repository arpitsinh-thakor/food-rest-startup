'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ProductCardDetailed = ({ product }) => {
  const {
    productName,
    productImage,
    price,
    description,
    category,
    quantity,
    weight,
    selfLife,
    discountPercent,
    isNew,
  } = product;

  const [addedToCart, setAddedToCart] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(1);

  const originalPrice = discountPercent
    ? (price / (1 - discountPercent / 100)).toFixed(2)
    : null;

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-sky-200 rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300 max-w-5xl mx-auto">
        
        {/* Product Image */}
        <div className="relative w-full h-72 md:h-[400px] overflow-hidden rounded-lg group">
          <Image
            src={productImage}
            alt={productName}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />

          {isNew && (
            <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded shadow">
              NEW
            </span>
          )}
          {discountPercent && (
            <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded shadow">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 truncate" title={productName}>
              {productName}
            </h2>

            {/* Price + Cart next to each other */}
            <div className="flex items-start justify-between bg-sky-100 p-3 rounded-lg shadow-sm mb-4 gap-4 flex-wrap">
              {/* Price Block */}
              <div className="flex flex-col">
                <p className="text-gray-700 text-sm">Price:</p>
                {discountPercent ? (
                  <>
                    <span className="text-gray-500 line-through text-sm">₹{originalPrice}</span>
                    <span className="text-red-600 font-bold text-xl">₹{price}</span>
                  </>
                ) : (
                  <span className="text-gray-900 font-bold text-xl">₹{price}</span>
                )}
              </div>

              {/* Cart Actions on Right Side */}
              <div className="flex flex-col items-end gap-2 min-w-[140px] w-full sm:w-auto">
                {addedToCart ? (
                  <>
                    <div className="flex items-center gap-2 w-full">
                      <button
                        className="flex-1 bg-blue-500 text-white py-1 rounded hover:bg-blue-600 transition"
                        onClick={() =>
                            cartQuantity > 1
                            ? setCartQuantity(cartQuantity - 1)
                            : setAddedToCart(false)
                        }
                      >
                        −
                      </button>
                      <span className="font-semibold text-gray-800">{cartQuantity}</span>
                      <button
                        className="flex-1 bg-blue-500 text-white py-1 rounded hover:bg-blue-600 transition"
                        onClick={() => {
                            if (cartQuantity < quantity) {
                                setCartQuantity(cartQuantity + 1);
                            } else {
                                alert("Cannot add more than available stock");
                            }
                        }}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="w-full bg-green-500 text-white py-1.5 rounded hover:bg-green-600 transition text-sm"
                      onClick={() => {
                        alert(`Buying ${cartQuantity} × ${productName}`);
                        setAddedToCart(false);
                        setCartQuantity(1);
                      }}
                    >
                      Buy Now
                    </button>
                  </>
                ) : (
                  <button
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition font-medium"
                    onClick={() => setAddedToCart(true)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-3" title={description}>
              {description}
            </p>

            {/* Product Specs */}
            <div className="text-sm text-gray-700 space-y-1">
              <p><span className="font-medium">Category:</span> {category}</p>
              <p><span className="font-medium">Available:</span> {quantity}</p>
              <p><span className="font-medium">Weight:</span> {weight}g</p>
              <p><span className="font-medium">Shelf Life:</span> {selfLife} days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetailed;
