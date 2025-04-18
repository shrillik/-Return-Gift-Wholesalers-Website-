// components/ProductCatalog.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductCatalog = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div key={product._id} className="border p-4 rounded shadow">
          <img
            src={product.image}
            alt={product.name}
            className="h-40 w-full object-cover rounded mb-2"
          />
          <h2 className="font-bold text-lg">{product.name}</h2>
          <p className="text-sm text-gray-600 capitalize">{product.category}</p>
          <p className="text-green-700 font-semibold">₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;
