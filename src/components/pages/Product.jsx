import { Component, useState } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";

function Product() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 15",
      price: 999,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: 899,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
    },
    {
      id: 3,
      name: "MacBook Pro",
      price: 1499,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    },
    {
      id: 4,
      name: "Nike Air Max",
      price: 120,
      category: "Shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 5,
      name: "Adidas Sneakers",
      price: 150,
      category: "Shoes",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
    },
    {
      id: 6,
      name: "Running Shoes",
      price: 95,
      category: "Shoes",
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500",
    },
    {
      id: 7,
      name: "Levi's Jeans",
      price: 60,
      category: "Clothing",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
    },
    {
      id: 8,
      name: "Cotton Hoodie",
      price: 45,
      category: "Clothing",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    },
    {
      id: 9,
      name: "White T-Shirt",
      price: 25,
      category: "Clothing",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    },
    {
      id: 10,
      name: "The Alchemist",
      price: 15,
      category: "Books",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500",
    },
    {
      id: 11,
      name: "Atomic Habits",
      price: 20,
      category: "Books",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
    },
    {
      id: 12,
      name: "Coffee Maker",
      price: 80,
      category: "Home Appliances",
      image:
        "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500",
    },
  ]);

  console.log(products, "products");

  const [selectedCategory, setSelectedCategory] = useState("All");

  console.log(selectedCategory);

  const categories = [
    "All",
    ...new Set(products.map((product, index) => product.category)),
  ];

  const filterProducts = products.filter((product) => {
    if (selectedCategory === "All") {
      return true;
    }
    return product.category === selectedCategory;
  });

  return (
    <>
      <div className="mb-6 flex gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="rounded bg-gray-400"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-6">
        {filterProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
}

export default Product;
