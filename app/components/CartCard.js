'use client';
import React, { use } from 'react';
import Image from 'next/image';
import { XCircle } from 'lucide-react';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, changeQuantityInCart, decrementItemQuantity } from '../store/features/cartSlice';
import { selectCartSubtotal, selectItemQuantity } from '../store/features/cartSlice';

const CartCard = ({ product, onRemove }) => {
  const { id, productName, productImage, price, quantity = 1, weight = 'N/A' } = product;
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
              }}
              className="border-b-black box-border border-2 text-gray-500 rounded px-1 py-1 text-sm"
            >
              {[...Array(20).keys()].map(i => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
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
