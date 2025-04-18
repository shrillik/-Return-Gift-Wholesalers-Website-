// src/pages/Homepage.js
import React, { useState } from "react";
import Banner from "../components/Banner";
import SearchBar from "../components/SearchBar";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  const handleSearch = async (filters) => {
    // Fetch products based on search filters
    // Replace with your API call
    const filteredProducts = [
      { id: 1, name: "Gift Box", category: "weddings", price: 200 },
      { id: 2, name: "Corporate Mug", category: "corporate", price: 150 },
    ]; // Mock data
    setProducts(filteredProducts);
  };

  return (
    <div>
      <Banner />
      <SearchBar onSearch={handleSearch} />
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
