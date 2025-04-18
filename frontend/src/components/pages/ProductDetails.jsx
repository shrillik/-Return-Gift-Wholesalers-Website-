// components/ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = ({ product }) => {
  const whatsappMessage = `Hi! I'm interested in ${product.name}. Can we discuss pricing and customization?`;

  return (
    <div className="p-4">
      <img src={product.imageUrl} className="w-full h-64 object-cover rounded mb-4" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="mb-2">{product.description}</p>
      <ul className="mb-2">
        <li><strong>Dimensions:</strong> {product.dimensions}</li>
        <li><strong>Material:</strong> {product.material}</li>
        <li><strong>Available Stock:</strong> {product.stock}</li>
      </ul>
      <a
        href={`https://wa.me/${product.vendorPhone}?text=${encodeURIComponent(whatsappMessage)}`}
        className="bg-green-500 text-white px-4 py-2 rounded inline-block mt-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact via WhatsApp
      </a>
    </div>
  );
};

export default ProductDetails;
