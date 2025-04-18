// src/pages/Wishlist.js
import React from "react";

const Wishlist = ({ wishlistItems }) => (
  <div>
    <h1>My Wishlist</h1>
    <ul>
      {wishlistItems.map((item) => (
        <li key={item.id}>
          {item.name} - ₹{item.price}
        </li>
      ))}
    </ul>
  </div>
);

export default Wishlist;
