'use client';
import React, { use } from 'react';
import Image from 'next/image';
import { XCircle } from 'lucide-react';
import {toast} from 'react-hot-toast';  
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, decrementItemQuantity, increaseItemQuantity } from '../store/features/cartSlice';
import { selectItemQuantity, selectAvailableQuantity  } from '../store/features/cartSlice';

const CartCard = ({ product, onRemove }) => {
  const { id, productName, productImage, price, quantity, weight = 'N/A' } = product;
  const [cartQuantity, setCartQuantity] = useState(quantity);
  const [subtotal, setSubtotal] = useState(price * cartQuantity);
  const quantityFromStore = useSelector((state) => selectItemQuantity(state, id));
  const maxQuantity = useSelector((state) => selectAvailableQuantity(state, id));

  const dispatch = useDispatch();
  const [productQuantity, setProductQuantity] = useState(quantityFromStore);

    const handleRemoveItem = (itemId) => {
        dispatch(removeItemFromCart(itemId));
        toast.error(`${productName} removed from cart!`, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const fixedPrice = (price) => {
        return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    };
    useEffect(() => {
        // Update subtotal whenever the quantity changes
        setSubtotal(price * quantityFromStore);
    }, [price, quantityFromStore]);

  return (
    <div className="grid grid-cols-10 items-center bg-white px-1 py-1 rounded shadow ">
      
      {/* Product Details */}
      <div className="col-span-7 flex items-center space-x-4  ">
        <Image src={productImage} alt={productName} width={64} height={64} className="rounded border" />
        <div>
          <p className="font-semibold text-gray-800">{productName}</p>
          <p className="text-sm text-gray-500">Weight: {weight}</p>
          <div className="mt-1 flex items-center space-x-2">
            <span className="text-gray-500">Qty:</span>
            
            <div>
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition"
                onClick={() => {
                  if (productQuantity > 1) {
                    dispatch(decrementItemQuantity(id));
                    setProductQuantity(productQuantity - 1);
                  }
                }}
              >
                −
              </button>
              <span className="mx-2 font-semibold">{productQuantity}</span>
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition"
                onClick={() => {
                 if(productQuantity < maxQuantity) {
                    dispatch(increaseItemQuantity(id));
                    setProductQuantity(productQuantity + 1);
                 }
                 else{
                    toast.error(`Maximum available quantity reached for ${productName}`, {
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
          </div>
        </div>
      </div>

      {/* Subtotal */}
      <div className="col-span-2 text-lg text-gray-700 font-semibold text-center border-l-2 border-gray-500 h-full flex items-center justify-center">
        ₹{fixedPrice(subtotal)}
      </div>

      {/* Remove Button */}
      <div className="col-span-1 flex justify-center border-l-2 border-gray-500  h-full">
        <button onClick={() => handleRemoveItem(id)} className="text-red-500 hover:text-red-600">
          <XCircle size={28} />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
