import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <>
      <div>
        <img
          src={product.image}
          alt={product.image}
          className="w-full
                h-48 object-cover"
        />
        <h3 className="mt-3 text-lg font-bold">{product.name}</h3>
        <p className="text-gray-600">Price:{product.price}</p>
        <p className="text-sm text-blue-600">Category:{product.category}</p>
        <Link to={`/product/${product.id}`}>View Detail</Link>
      </div>
    </>
  );
};
