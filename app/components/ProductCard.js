'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {toast  } from 'react-hot-toast';

import {useSelector, useDispatch}  from 'react-redux';
import { addItemToCart, decrementItemQuantity, removeItemFromCart } from '../store/features/cartSlice';

const ProductCard = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    id,
    productName,
    productImage,
    price,
    isNew,
    discountPercent,
  } = product;

  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const discountedPrice = discountPercent
    ? (price / (1 - discountPercent / 100)).toFixed(2)
    : null;

  return (
    <div
  className="bg-white rounded-xl p-1 flex flex-col w-full max-w-sm
              border-2 border-transparent
             hover:cursor-pointer 
             hover:border-2 hover:border-red-500
             hover:bg-white
             transition-all duration-300
             hover:shadow-red-700
              hover:shadow-lg
             shadow-sm shadow-gray-300
  "
>



      <div
        className="relative w-full h-48 md:h-52 lg:h-60 group"
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

        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white text-sm font-medium">For more details... Click here</p>
        </div>

        {isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded shadow">
            NEW
          </span>
        )}
        {discountPercent && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded shadow">
            {discountPercent}% OFF
          </span>
        )}
      </div>

      {/* Product name */}
      <h2
        className="font-semibold text-lg text-gray-800 mt-3 mb-2 truncate
                   hover:font-bold transition-all duration-200"
        title={productName}
      >
        {productName}
      </h2>

      {/* Price + Cart in a horizontal layout */}
      <div className="flex items-start justify-between gap-3 px-2 py-2 bg-sky-100 rounded-lg shadow-sm">
        {/* Price */}
        <div className="flex flex-col">
          <p className="text-gray-700 text-sm">Price:</p>
          {discountPercent ? (
            <>
              <span className="text-gray-500 line-through text-sm">
                ₹{discountedPrice}
              </span>
              <span className="text-red-600 font-bold text-lg">₹{price}</span>
            </>
          ) : (
            <span className="text-gray-900 font-bold text-lg">₹{price}</span>
          )}
        </div>

        {/* Cart Actions */}
        <div className="flex flex-col items-end gap-1 min-w-[110px]">
          {addedToCart ? (
            <>
              <div className="flex items-center gap-1.5 w-full">
                <button
                  className="flex-1 bg-blue-500 text-white py-1 rounded hover:bg-blue-600 transition"
                  onClick={() =>
                    quantity > 1
                      ? (dispatch(decrementItemQuantity(id)), setQuantity(quantity - 1)):
                        dispatch(removeItemFromCart(id), setAddedToCart(false), setQuantity(1),
                        toast.error(`${productName} removed from cart!`, {
                          position: "top-center",
                          autoClose: 1500,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                        })
                      )
                  }
                >
                  −
                </button>
                <span className="font-semibold text-gray-800">{quantity}</span>
                <button
                  className="flex-1 bg-blue-500 text-white py-1 rounded hover:bg-blue-600 transition"
                  onClick={() => {
                    if (quantity < product.quantity) {
                      setQuantity(quantity + 1);
                      dispatch(addItemToCart({ ...product, quantity: 1,}));
                    }else{
                        toast.error(`Maximum availabe quantity reached for ${productName}`, {
                          position: "top-center",
                          autoClose: 1500,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                        });
                    }
                  }}
                >
                  +
                </button>
              </div>

              <button
                className="w-full bg-green-500 text-white py-1.5 rounded hover:bg-green-600 transition text-sm"
                onClick={() => {
                  alert(`Buying ${quantity} × ${productName}`);
                  setAddedToCart(false);
                  setQuantity(1);
                }}
              >
                Buy Now
              </button>
            </>
          ) : (
            <button
                className="w-full bg-blue-500 text-white py-1.5 rounded hover:bg-blue-600 transition text-sm"
                onClick={() => {
                  dispatch(addItemToCart({ ...product, quantity }));
                  setAddedToCart(true);
                  toast.success(`${productName} added to cart!`, {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
