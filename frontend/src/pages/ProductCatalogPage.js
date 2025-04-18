import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE}/api/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-6 mb-4">Product Catalog</h1>
      <ProductCatalog products={products} />
    </div>
  );
};

export default ProductCatalog;
