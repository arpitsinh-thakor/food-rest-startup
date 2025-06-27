"use client";
import AddProduct from "@/app/components/AddProduct";
import SellerProductCard from "@/app/components/SellerProductCard";
import axios from "axios";
import { useState } from "react";

const {feedData} =  require("../../utils/constants");

export default function Dashboard() {

    const [viewAddProduct, setViewAddProduct] = useState(true);
    const [viewProducts, setViewProducts] = useState(false);
    const [viewOrders, setViewOrders] = useState(false);


    return (
       <div
            className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white rounded-xl    ">   
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
                            className="w-full py-4 bg-blue-500 text-white rounded hover:bg-blue-600  cursor-pointer"
                            onClick={() => {
                                setViewAddProduct(true);
                                setViewProducts(false);
                                setViewOrders(false);
                            }}
                            >
                            Add Product 
                        </button>
                        <button 
                            className="w-full py-4 bg-yellow-500 text-white rounded hover:bg-yellow-600  cursor-pointer"
                            onClick={() => {
                                setViewAddProduct(false);
                                setViewProducts(true);
                                setViewOrders(false);
                            }}
                            >
                            View Products
                        </button>
                        <button 
                            className="w-full py-4 bg-red-500 text-white rounded hover:bg-red-600  cursor-pointer"
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
                        className="col-span-6 p-3 bg-gray-700 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-4"
                        >
                        {viewAddProduct && (
                            <AddProduct/>
                        )}

                        {viewProducts && (
                            <div className="rounded shadow">
                                <h2 className="text-xl font-semibold mb-2">Your Products</h2>
                                {
                                    feedData ? (
                                        <div className="flex flex-col space-y-2">
                                            {feedData.map((product) => (
                                                <SellerProductCard
                                                    key= {product.id}
                                                    product =  {product}
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-gray-500">No products added yet.</p>
                                    )   
                                }
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