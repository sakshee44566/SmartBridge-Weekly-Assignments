import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const { state: product } = useLocation();

  return (
    <div className="max-w-md mx-auto p-6">
      <img src={product.image} alt={product.name} className="w-full rounded mb-4" />
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-gray-600 mt-2">{product.price}</p>
      <p className="mt-4">This is a detailed description of the product.</p>
    </div>
  );
};

export default ProductDetails;
