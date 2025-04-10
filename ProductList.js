import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const navigate = useNavigate();
  const [products] = useState([
    { id: 1, name: 'Product A', price: '$20', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product B', price: '$35', image: 'https://via.placeholder.com/150' },
    // Add more products as needed
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded p-4 shadow hover:shadow-lg cursor-pointer"
          onClick={() => navigate(`/product/${product.id}`, { state: product })}
        >
          <img src={product.image} alt={product.name} className="mb-2 w-full" />
          <h3 className="font-semibold">{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
