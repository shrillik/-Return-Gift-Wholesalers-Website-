import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProductCatalog from './components/ProductCatalog';
import ProductDetails from './components/ProductDetails';
import LoginForm from './components/LoginForm';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/catalog" element={<ProductCatalog />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard/:userId" element={<UserDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
