"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const EditProduct = ({ product, setIsEditing}) => {
  const [productName, setProductName] = useState(product.productName);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);
  const [quantity, setQuantity] = useState(product.quantity);
  const [description, setDescription] = useState(product.description);
  const [isNew, setIsNew] = useState(product.isNew);
  const [discountPercent, setDiscountPercent] = useState(
    product.discountPercent || 0
  );
  const [productImage, setProductImage] = useState(product.productImage);
  const [weight, setWeight] = useState(product.weight);
  const [selfLife, setSelfLife] = useState(product.selfLife);
  const [error, setError] = useState(null);
  const [productImagePreview, setProductImagePreview] = useState(product?.productImage ?? null);

  const checkAllFields = () => {
        return productName && productImage && category && description && quantity && price && weight && selfLife;
    }

    const handleSaveProduct = async (e) => {
        e.preventDefault();
        if (!checkAllFields()) {
            setError("Please fill all the fields.");
            return;
        }
        setError(null);
        const formData = new FormData();
        formData.append("productName", productName);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("quantity", quantity);
        formData.append("description", description);
        formData.append("isNew", isNew);
        formData.append("discountPercent", discountPercent);
        formData.append("productImage", productImage);
        formData.append("weight", weight);
        formData.append("selfLife", selfLife);
        try {
            // const response = await fetch("/api/products/edit", {
            //     method: "POST",
            //     body: formData,
            // });
            // if (!response.ok) {
            //     throw new Error("Failed to save product");
            // }
            // const data = await response.json();
            // console.log("Product saved successfully:", data);
            setIsEditing(false); 
            setError(null); 
        } catch (error) {
            console.error("Error saving product:", error);
            setError("Failed to save product. Please try again.");
        }
    }
  return (
    // This component is a placeholder for editing a product.
    // All parameters of product should be editable.
    <div className="bg-white text-black rounded-lg shadow-md p-4 flex flex-col gap-1">
      <h2 className="text-xl font-semibold mb-2">Edit Product</h2>

      <form className="flex flex-col ">
        <div className="flex flex-col">
          <label className="text-md  ">Product Name</label>
          <input
            type="text"
            placeholder="Product Name"
            required
            autoFocus
            className="p-2 border rounded mb-2"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 items-baseline">
          <div className="flex flex-col">
            <label className="text-md ">Product Image</label>

            <div className="flex flex-row items-center mb-2 gap-1">
                {productImagePreview && (
                    <Image
                        src={productImagePreview}
                        alt="Product Image"
                        width={100}
                        height={100}
                        className="mb-2 rounded"
                    />
                )}

                <input
                    type="file"
                    accept="image/*"
                    required={!productImagePreview}
                    className="p-1 border rounded mb-2 w-full
                                                        file:mr-4 file:py-1 file:px-2
                                                        file:rounded file:border-0
                                                        file:text-sm file:font-semibold
                                                        file:bg-blue-50 file:text-blue-700
                                                        hover:file:bg-blue-100 file:cursor-pointer
                                                        hover:cursor-pointer"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                                setProductImagePreview(reader.result);
                                setProductImage(file);
                            };
                            reader.readAsDataURL(file);
                        } else {
                            setProductImagePreview(null);
                            setProductImage(null);
                        }
                    }}
                />
            </div>

          </div>

          <div className="flex flex-col">
            <label className="text-md ">Select Category</label>
            <select
              required
              className="p-2 border rounded mb-2 hover: cursor-pointer"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option className="text-gray-500" value="" disabled>
                Select Category
              </option>
              <option className="text-gray-700" value="snacks">
                Snacks
              </option>
              <option className="text-gray-700" value="fruits">
                Fruits
              </option>
              <option className="text-gray-700" value="vegetables">
                Vegetables
              </option>
              <option className="text-gray-700" value="dairy">
                Dairy
              </option>
              <option className="text-gray-700" value="drinks">
                Drinks
              </option>
            </select>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-md ">Description</label>
          <textarea
            placeholder="Product Description"
            required
            className="p-2 border rounded mb-2"
            rows="2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4 items-baseline">
          <div className="flex flex-col">
            <label className="text-md ">Quantity</label>
            <input
              type="number"
              placeholder="Quantity"
              required
              min={0}
              className="p-2 border rounded mb-2"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-md ">Price</label>
            <input
              type="number"
              placeholder="Price"
              required
              min={0}
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
              type="number"
              placeholder="Weight"
              required
              min={0}
              className="p-2 border rounded mb-2"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-md ">{`Self Life (days)`}</label>
            <input
              type="number"
              placeholder="Self Life in days"
              required
              min={0}
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
              type="number"
              placeholder="Discount Percent"
              min={0}
              max={100}
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

        <div
            className="flex flex-row justify-between items-center gap-2 mt-4"
            >
            <button
                type="submit"
                className="w-1/2 bg-green-500 text-white p-2 rounded hover:bg-green-600 cursor-pointer"
                onClick={(e) => {
                    if (checkAllFields()) handleSaveProduct(e);
                }}
                >
                Save Product
            </button>
            <button
                type="button"
                className="w-1/2 bg-red-500 text-white p-2 rounded hover:bg-gray-600 ml-2 cursor-pointer"
                onClick={() => setIsEditing(false)}
                >
                Cancel
            </button>
        </div>

        {error && <div className="text-red-500 mt-2">{error}</div>}
      </form>
    </div>
  );
};

export default EditProduct;
