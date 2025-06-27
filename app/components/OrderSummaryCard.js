'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartSubtotal } from '../store/features/cartSlice';

const OrderSummaryCard = ({
  address = 'No address found',
  onChangeAddress = () => {},
  paymentMethod = 'Cash On Delivery',
  onPaymentChange = () => {},
  taxRate = 0.18,
  shippingFee = 0,
  onPlaceOrder = () => {},
}) => {
  const [addressLine, setAddressLine] = useState(address);

  const totalAmount = useSelector(selectCartSubtotal);
  const taxAmount = totalAmount * taxRate;
  const finalTotal = totalAmount + taxAmount + shippingFee;

  const fixedPrice = (price) => {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  const onChangeAddressHandler = () => {
    const newAddress = prompt("Enter new address:", addressLine);
    if (newAddress && newAddress.trim() !== "") {
      setAddressLine(newAddress);
      onChangeAddress(newAddress);
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-sm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>

      {/* Delivery Address */}
      <div className="border-t border-gray-300 py-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-700">DELIVERY ADDRESS</span>
          <button
            onClick={onChangeAddressHandler}
            className="text-green-500 text-sm font-medium hover:underline"
          >
            Change
          </button>
        </div>
        <p className="text-sm text-gray-600">{addressLine}</p>
      </div>

      {/* Payment Method */}
      <div className="border-t border-gray-300 py-4">
        <span className="text-sm font-semibold text-gray-700">PAYMENT METHOD</span>
        <select
          value={paymentMethod}
          onChange={(e) => onPaymentChange(e.target.value)}
          className="mt-2 w-full px-3 py-2 border rounded focus:outline-none text-sm bg-gray-100 text-gray-800"
        >
          <option>Cash On Delivery</option>
          <option>UPI</option>
          <option>Credit Card</option>
          <option>Net Banking</option>
        </select>
      </div>

      {/* Pricing Details */}
      <div className="border-t border-gray-300 py-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Price</span>
          <span className="text-gray-800 font-medium">₹{fixedPrice(totalAmount)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping Fee</span>
          <span className="text-green-600 font-medium">{shippingFee === 0 ? 'Free' : `₹${shippingFee}`}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax ({
            (taxRate * 100).toFixed(0)}%)</span>
          <span className="text-gray-800 font-medium">₹{taxAmount.toFixed(2)}</span>
        </div>
        <div className="border-t text-black border-gray-300 pt-2 flex justify-between text-lg font-semibold">
          <span>Total Amount:</span>
          <span>₹{finalTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Place Order Button */}
      <button
        onClick={onPlaceOrder}
        className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded"
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummaryCard;
