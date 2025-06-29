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
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState('');

  const totalAmount = useSelector(selectCartSubtotal);
  
  const discountAmount = (totalAmount * discount) / 100;
  const discountedPrice = totalAmount - discountAmount;
  const taxAmount = discountedPrice * taxRate;
  const finalTotal = discountedPrice + taxAmount + shippingFee;


  const fixedPrice = (price) =>
    price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

  const onChangeAddressHandler = () => {
    const newAddress = prompt('Enter new address:', addressLine);
    if (newAddress && newAddress.trim() !== '') {
      setAddressLine(newAddress);
      onChangeAddress(newAddress);
    }
  };

  const applyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    setCouponError('');
    switch (code) {
      case 'SAVE10':
        setDiscount(10);
        break;
      case 'FLAT50':
        setDiscount(50);
        break;
      default:
        setDiscount(0);
        setCouponError('Invalid coupon code');
        break;
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>

      {/* Address Section */}
      <div className="border-t border-gray-300 py-2">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-700">DELIVERY ADDRESS</span>
          <button
            onClick={onChangeAddressHandler}
            className="text-green-500 text-sm font-medium hover:underline cursor-pointer"
          >
            Change
          </button>
        </div>
        <p className="text-sm text-gray-600">{addressLine}</p>
      </div>

      {/* Payment Section */}
      <div className="border-t border-gray-300 py-1 pb-2">
        <span className="text-sm font-semibold text-gray-700">PAYMENT METHOD</span>
        <select
          value={paymentMethod}
          onChange={(e) => onPaymentChange(e.target.value)}
          className="bg-white mt-2 w-full px-3 py-2 border rounded focus:outline-none text-sm  text-gray-800"
        >
          <option>Cash On Delivery</option>
          <option>UPI</option>
          <option>Credit Card</option>
          <option>Net Banking</option>
        </select>
      </div>

      {/* Coupon Section */}
      <div className="border-t border-gray-300 py-2">
        <label className="text-sm font-semibold text-gray-700 block mb-2">COUPON CODE</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter coupon"
            className="flex-grow px-3 py-2 border rounded text-sm bg-white"
          />
          <button
            onClick={applyCoupon}
            className="px-4 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600 cursor-pointer"
          >
            Apply
          </button>
        </div>
        {couponError && (
          <p className="text-red-500 text-xs mt-1">{couponError}</p>
        )}
        {discount > 0 && (
          <p className="text-green-600 text-xs mt-1">
            Coupon applied: {discount}% off
          </p>
        )}
      </div>

      {/* Price Breakdown */}
      <div className="border-t border-gray-300 py-2 space-y-1 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Price</span>
          <span className="text-gray-800 font-medium">₹{fixedPrice(totalAmount)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount ({discount}%)</span>
            <span>- ₹{fixedPrice(discountAmount)}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping Fee</span>
          <span className=" font-medium">
            <span className="">+ </span>
            {shippingFee === 0 ? 'Free' : `₹${shippingFee}`}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax ({(taxRate * 100).toFixed(0)}%)</span>
          <span className="text-gray-800 font-medium">+ ₹{taxAmount.toFixed(2)}</span>
        </div>
        <div className="border-t text-black border-gray-300 pt-2 flex justify-between text-lg font-semibold">
          <span>Total Amount:</span>
          <span>₹{finalTotal.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={onPlaceOrder}
        className="w-full mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded hover:cursor-pointer transition  "
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummaryCard;
