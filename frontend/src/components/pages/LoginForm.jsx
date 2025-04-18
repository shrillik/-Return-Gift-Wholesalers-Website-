// components/LoginForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    // Call backend auth here
    onLogin(email);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="email"
        placeholder="Enter Email"
        className="border p-2 w-full mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
};

export default LoginForm;
