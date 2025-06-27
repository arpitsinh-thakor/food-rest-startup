import React from 'react'
import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
    const [productName, setProductName] = useState("");
    const [productImage, setProductImage] = useState(null);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [weight, setWeight] = useState("");    
    const [selfLife, setSelfLife] = useState("");
    const [discountPercent, setDiscountPercent] = useState("");
    const [isNew, setIsNew] = useState(false);

    const [error, setError] = useState("");

    const checkAllFields = () => {
        return productName && productImage && category && description && quantity && price && weight && selfLife;
    }

    const handleAddProduct = async (e) => {
        e.preventDefault();
        if (!productName || !productImage || !category || !description || !quantity || !price || !weight || !selfLife) {
            setError("All fields are required");
            return;
        }

        const formData = new FormData();
        formData.append("productName", productName);
        formData.append("productImage", productImage);
        formData.append("category", category);
        formData.append("description", description);
        formData.append("quantity", quantity);
        formData.append("price", price);
        formData.append("weight", weight);
        formData.append("selfLife", selfLife);
        if (discountPercent) {
            formData.append("discountPercent", discountPercent);    
        }
        formData.append("isNew", isNew);

        try {   
            const response = await axios.post("/api/seller/add-product", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            if (response.status === 200) {
                console.log("Product added successfully", response.data);
                setProductName("");
                setProductImage(null);
                setCategory("");
                setDescription("");
                setQuantity("");
                setPrice("");
                setWeight("");
                setSelfLife("");
                setDiscountPercent("");
                setIsNew(false);
                setError("");

            } else {
                console.error("Failed to add product", response.data);
                throw new Error("Failed to add product");
            }
        } catch (err) {
            console.error("Error adding product", err);
            setError(err.message);
        }
    }

  return (
    <div className=" w-2/3 rounded shadow">
                                <h2 className="text-xl font-semibold mb-2">Add Product</h2>
                                <form className="flex flex-col space-y-4">
                                    
                                    <div className="flex flex-col">
                                        <label className="text-md  ">Product Name</label>
                                        <input 
                                            type="text" placeholder="Product Name" required autoFocus
                                            className="p-2 border rounded mb-2" 
                                            value={productName}
                                            onChange={(e) => setProductName(e.target.value)}
                                            />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 items-baseline">
                                    <div className="flex flex-col">
                                            <label className="text-md ">Product Image</label>
                                            <input 
                                                type="file" accept="image/*" required
                                                className="p-1 border rounded mb-2
                                                file:mr-4 file:py-1 file:px-2
                                                file:rounded file:border-0
                                                file:text-sm file:font-semibold
                                                file:bg-blue-50 file:text-blue-700
                                                hover:file:bg-blue-100 file:cursor-pointer
                                                hover:cursor-pointer"
                                                onChange={(e) => setProductImage(e.target.files[0])}
                                                />
                                    </div>
                                        
                                        <div className="flex flex-col">
                                            <label className="text-md ">Select Category</label>
                                            <select 
                                                required
                                                className="p-2 border rounded mb-2 hover: cursor-pointer"
                                                value={category}
                                                onChange={(e) => setCategory(e.target.value)}
                                                >
                                                        <option 
                                                            className="text-gray-500"
                                                            value="" disabled >Select Category</option>
                                                        <option 
                                                            className="text-gray-700"
                                                            value="snacks">Snacks</option>
                                                        <option 
                                                            className="text-gray-700"
                                                            value="fruits">Fruits</option>
                                                        <option 
                                                            className="text-gray-700"
                                                            value="vegetables">Vegetables</option>
                                                        <option 
                                                            className="text-gray-700"
                                                            value="dairy">Dairy</option>
                                                        <option
                                                            className="text-gray-700"
                                                            value="drinks">Drinks</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col">
                                        <label className="text-md ">Description</label>
                                        <textarea 
                                            placeholder="Product Description" required
                                            className="p-2 border rounded mb-2" rows="2"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            ></textarea>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 items-baseline">
                                        <div className="flex flex-col">
                                            <label className="text-md ">Quantity</label>
                                            <input 
                                                type="number" placeholder="Quantity" 
                                                required min={0}
                                                className="p-2 border rounded mb-2" 
                                                value={quantity}
                                                onChange={(e) => setQuantity(e.target.value)}
                                                />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-md ">Price</label>
                                            <input 
                                                type="number" placeholder="Price" 
                                                required min={0}
                                                className="p-2 border rounded" 
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                                />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 items-baseline">
                                        <div className="flex flex-col">
                                            <label className="text-md ">Weight</label>
                                            <input 
                                                type="number" placeholder="Weight" 
                                                required min={0}
                                                className="p-2 border rounded mb-2" 
                                                value={weight}
                                                onChange={(e) => setWeight(e.target.value)}
                                                />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-md ">{`Self Life (days)`}</label>
                                            <input 
                                                type="number" placeholder="Self Life in days" 
                                                required min={0}
                                                className="p-2 border rounded mb-2" 
                                                value={selfLife}
                                                onChange={(e) => setSelfLife(e.target.value)}
                                                />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 items-baseline">
                                        <div className="flex flex-col">
                                            <label className="text-md ">Discount Percent</label>
                                            <input
                                                type="number" placeholder="Discount Percent"
                                                min={0} max={100}
                                                className="p-2 border rounded mb-2"
                                                value={discountPercent}
                                                onChange={(e) => setDiscountPercent(e.target.value)}
                                                />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-md ">Is New Product?</label>
                                            <select
                                                className="p-2 border rounded mb-2 hover: cursor-pointer"
                                                value={isNew}
                                                onChange={(e) => setIsNew(e.target.value === "true")}
                                                >
                                                    <option value="false">No</option>
                                                    <option value="true">Yes</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <button 
                                        type="submit" 
                                        className="bg-green-500 text-white p-2 rounded hover:bg-green-600 cursor-pointer"
                                        onClick={(e) => {if(checkAllFields()) handleAddProduct(e)}}
                                        >Add Product</button>

                                    {error && <div className="text-red-500 mt-2">{error}</div>}
                                </form>
                            </div>
  )
}

export default AddProduct