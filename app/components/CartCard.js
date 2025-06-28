'use client';
import React, { use } from 'react';
import Image from 'next/image';
import { XCircle } from 'lucide-react';
import {toast} from 'react-hot-toast';  
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, changeQuantityInCart, decrementItemQuantity } from '../store/features/cartSlice';
import { selectCartSubtotal, selectItemQuantity  } from '../store/features/cartSlice';

const CartCard = ({ product, onRemove }) => {
  const { id, productName, productImage, price, quantity, weight = 'N/A' } = product;
  const [subtotal, setSubtotal] = useState(price * quantity);
  const quantityFromStore = useSelector((state) => selectItemQuantity(state, id));

  const dispatch = useDispatch();

    const onChangeQuantity = (newQuantity) => {
        if (newQuantity < 1) {
            dispatch(removeItemFromCart(id));
        } else {
            dispatch(changeQuantityInCart({ itemId: id, newQuantity }));
        }
        // Update subtotal based on new quantity
        setSubtotal(price * newQuantity);

    }

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
            <select
              value={quantityFromStore}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                onChangeQuantity(val);
                toast.success(`${productName} quantity updated to ${val}!`, {
                  position: "top-center",
                  autoClose: 1500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }}
              className="border-b-black box-border border-2 text-gray-500 rounded px-1 py-1 text-sm"
            >
            {
                Array.from(
                { length: 5 },
                (_, i) => Math.max(1, quantityFromStore - 2) + i
                )
                .filter(num => num >= 1)
                .map(num => (
                    <option key={num} value={num}>
                    {num}
                    </option>
                ))
            }
            </select>
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
