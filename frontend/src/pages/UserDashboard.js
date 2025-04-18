// src/pages/UserDashboard.js
import React from "react";

const UserDashboard = ({ user }) => (
  <div>
    <h1>Welcome, {user.name}</h1>
    <div>
      <h2>Past Orders</h2>
      <ul>
        {user.orders.map((order) => (
          <li key={order.id}>
            {order.productName} - ₹{order.amount}
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h2>Shipment Tracking</h2>
      <p>Tracking Code: {user.trackingCode}</p>
    </div>
    <div>
      <h2>Profile Settings</h2>
      <p>Email: {user.email}</p>
    </div>
  </div>
);

export default UserDashboard;
