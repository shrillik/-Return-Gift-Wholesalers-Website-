// src/pages/ProductDetails.js
import React from "react";

const ProductDetails = ({ product }) => (
  <div className="product-details">
    <h1>{product.name}</h1>
    <img src={product.image} alt={product.name} />
    <p>{product.description}</p>
    <p>Dimensions: {product.dimensions}</p>
    <p>Stock: {product.stock}</p>
    <p>Price: ₹{product.price}</p>
    <a
      href={`https://api.whatsapp.com/send?phone=+919876543210&text=I%20am%20interested%20in%20${product.name}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Contact Vendor
    </a>
  </div>
);

export default ProductDetails;
