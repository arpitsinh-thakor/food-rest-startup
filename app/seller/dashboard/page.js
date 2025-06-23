"use client";
import { useState } from "react";
import Link from "next/link";

export default function Dashboard() {

    const [viewAddProduct, setViewAddProduct] = useState(false);
    const [viewProducts, setViewProducts] = useState(true);
    const [viewOrders, setViewOrders] = useState(false);
   
    return (
       <div>   
            <div
             >
                <h1 className="flex text-2xl font-bold mb-4 justify-center p-2">Seller Dashboard</h1>

                <div
                    className="grid grid-cols-10 gap-2"
                 >

                    <div
                        className="col-span-2 flex flex-col p-4  gap-2 items-center "
                     >
                        <button 
                            className="w-full py-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={() => {
                                setViewAddProduct(true);
                                setViewProducts(false);
                                setViewOrders(false);
                            }}
                            >
                            Add Product 
                        </button>
                        <button 
                            className="w-full py-4 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                            onClick={() => {
                                setViewAddProduct(false);
                                setViewProducts(true);
                                setViewOrders(false);
                            }}
                            >
                            View Products
                        </button>
                        <button 
                            className="w-full py-4 bg-red-500 text-white rounded hover:bg-red-600"
                            onClick={() =>{
                                setViewAddProduct(false);
                                setViewProducts(false);
                                setViewOrders(true);
                            }}
                            >
                            Orders
                        </button>
                    </div>
                    <div
                        className="col-span-8 p-4"
                        >
                        {viewAddProduct && (
                            <div className="rounded shadow">
                                <h2 className="text-xl font-semibold mb-2">Add Product</h2>
                                <form className="flex flex-col space-y-4">
                                    <input type="text" placeholder="Product Name" className="p-2 border rounded" />
                                    <input type="number" placeholder="Price" className="p-2 border rounded" />
                                    <textarea placeholder="Description" className="p-2 border rounded"></textarea>
                                    <button type="submit" className="bg-green-500 text-white p-2 rounded">Add Product</button>
                                </form>
                            </div>
                        )}

                        {viewProducts && (
                            <div className="rounded shadow">
                                <h2 className="text-xl font-semibold mb-2">Your Products</h2>
                                <ul className="space-y-2">
                                    <li className="p-2 border rounded">Product 1 - $10</li>
                                    <li className="p-2 border rounded">Product 2 - $20</li>
                                    <li className="p-2 border rounded">Product 3 - $30</li>
                                </ul>
                            </div>
                        )}

                        {viewOrders && (
                            <div className="rounded shadow">
                                <h2 className="text-xl font-semibold mb-2">Your Orders</h2>
                                <ul className="space-y-2">
                                    <li className="p-2 border rounded">Order 1 - Product 1</li>
                                    <li className="p-2 border rounded">Order 2 - Product 2</li>
                                    <li className="p-2 border rounded">Order 3 - Product 3</li>
                                </ul>
                            </div>
                        )}
                    </div>

                </div>

                
            </div>
       </div>
    );
}