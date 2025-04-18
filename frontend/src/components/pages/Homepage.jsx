// components/Homepage.jsx
import React from 'react';
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="p-4">
      {/* Banner */}
      <div className="bg-gradient-to-r from-pink-400 to-red-400 text-white text-2xl font-bold p-10 rounded-xl mb-6 text-center">
        Trending & Best-Selling Products
      </div>

      {/* Search Bar with Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input className="p-2 border rounded" type="text" placeholder="Search Products..." />
        <select className="p-2 border rounded">
          <option>Category</option>
          <option>Weddings</option>
          <option>Birthdays</option>
          <option>Corporate Events</option>
        </select>
        <input className="p-2 border rounded" type="number" placeholder="Max Price" />
        <input className="p-2 border rounded" type="text" placeholder="Occasion" />
      </div>

      {/* Featured Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Loop products */}
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="border p-4 rounded shadow hover:shadow-lg">
            <img src="/product.jpg" alt="Product" className="w-full h-48 object-cover rounded mb-2" />
            <h3 className="text-lg font-semibold">Product Name</h3>
            <p>Special Offer!</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
