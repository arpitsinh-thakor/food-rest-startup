"use client";
import { useState } from "react";
import Link from "next/link";

export default function Dashboard() {

    const [addNewProduct, setAddNewProduct] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Dashboard - Seller</h1>
        <p className="">Welcome to your dashboard!</p>

        <div className="mt-4">
            <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue
            -600 transition-colors"
                onClick={() => setAddNewProduct(false)}
            >
                View Products
            </button>
            <button 
                className="ml-4 bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors"
                onClick={() => setAddNewProduct(true)}
                >
                Add New Product
            </button>
        </div>

        {addNewProduct ? (
            <div className="flex flex-col items-center mt-4 p-4 border rounded w-1/3">
                <h2 className="text-xl font-bold mb-2">Add New Product</h2>
                <form className="flex flex-col space-y-4">
                    <input type="text" placeholder="Product Name" className="p-2 border rounded" />
                    <input type="number" placeholder="Price" className="p-2 border rounded" />
                    <textarea placeholder="Description" className="p-2 border rounded"></textarea>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded"
                        onClick={(e) => {
                            e.preventDefault();
                            // ligic to add product 
                            console.log("Product added");
                            setAddNewProduct(false);
                        }}
                        >Add Product</button>
                </form>

                <button
                    className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
                    onClick={() => setAddNewProduct(false)}
                >
                    Cancel
                </button>

            </div>
                ) : (
                    <div className="flex flex-col mt-4 p-4 border rounded w-2/3">
                        <h2 className="text-xl font-bold mb-2">Seller{"'"}s Products Added</h2>
                    </div>

                )
            }


       

        </div>
    );
}