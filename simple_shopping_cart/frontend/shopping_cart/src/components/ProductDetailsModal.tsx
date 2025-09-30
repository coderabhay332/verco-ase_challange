"use client";

import React from "react";
import { useProductDetails } from "../context/ProductDetailsContext";
import { useAppDispatch } from "../store";
import { addToCart } from "../store/cartSlice";
import { useToast } from "../context/ToastContext";

export default function ProductDetailsModal() {
  const { product, close } = useProductDetails();
  const dispatch = useAppDispatch();
  const { showToast } = useToast();

  if (!product) return null;

  const handleAdd = () => {
    dispatch(addToCart(product));
    showToast(`Added ${product.name} to cart`, 'success');
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg max-w-lg w-full overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <button onClick={close} className="text-2xl leading-none text-gray-500 hover:text-gray-700">×</button>
        </div>
        <div className="p-4 space-y-4">
          <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover rounded" />
          <p className="text-gray-700">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</span>
            <button onClick={handleAdd} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}



