import React from 'react'

const Orders = () => {
  return (
    <div>
        <h1 className="text-2xl font-bold text-center my-8">Your Orders</h1>
        <div className="max-w-4xl mx-auto p-4">
            <p className="text-gray-600 text-center">You have no orders yet.</p>
            {/* Future implementation: List of orders will go here */}
        </div>
    </div>
  )
}

export default Orders