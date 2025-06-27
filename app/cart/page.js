'use client'
import React from 'react'

import { useSelector } from 'react-redux';
import { selectCartItems } from '../store/features/cartSlice';
import CartCard from '../components/CartCard';
import OrderSummaryCard from '../components/OrderSummaryCard';

const Cart = () => {

  const cartItems = useSelector(selectCartItems);
 
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-2xl font-bold mb-4">Cart Page</div>
        <div className="text-lg">Your cart is currently empty.</div>
      </div>
    );
  }
  
  return (
    <div>
        <div className="flex items-center justify-center gap-4 mb-4">
            <div
              >
                <div className="grid grid-cols-10 bg-gray-100 text-gray-700 font-semibold px-4 py-2 rounded shadow mb-1">
                  <div className="col-span-7">Product Details</div>
                  <div className="col-span-2 text-center">Subtotal</div>
                  <div className="col-span-1 text-center">Action</div>
                </div>

                <ul className="space-y-1">
                    {cartItems.map((item) => (
                        <li key={item.id} className="w-full justify-between items-center bg-gray-300 p-1 rounded shadow">
                            <CartCard product={item} />
                        </li>
                    ))}
                </ul>
            </div>
            <div>
              <OrderSummaryCard
                address="123 Main St, Ahmedabad"
                paymentMethod="Cash On Delivery"
                totalAmount={849}
                shippingFee={180}
                onPlaceOrder={() => alert("Order Placed")}
              />

            </div>
        </div>
    </div>
  )
}

export default Cart