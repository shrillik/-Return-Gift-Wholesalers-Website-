// components/UserDashboard.jsx
import React from 'react';

const UserDashboard = ({ orders, wishlist }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Past Orders</h2>
      <ul className="mb-6">
        {orders.map((order) => (
          <li key={order.id}>
            {order.productName} - Tracking: {order.trackingCode}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mb-2">Wishlist</h2>
      <ul>
        {wishlist.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
