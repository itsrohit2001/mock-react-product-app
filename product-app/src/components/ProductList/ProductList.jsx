import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Pdp from "../../pages/Pdp";
import { Routes, Route } from "react-router-dom";

function ProductListUI({ products }) {
  return (
    <div className="product-list p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">PRODUCTS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            className="no-underline"
            key={product.id}
          >
            <div
              key={product.id}
              className="product-item border rounded shadow flex flex-col items-center p-4 bg-white"
            >
              <img
                src={product.image}
                alt={product.name}
                className="mb-4 w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-semibold mb-2 text-center">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-2 text-center">
                Price: ${product.price}
              </p>
              {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add to Cart
            </button> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ProductList() {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products`);
        const data = await response.json();
        setProducts(data);
        console.log("Products fetched successfully:", data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<ProductListUI products={products} />} />
      <Route path=":id" element={<Pdp products={products} />} />
    </Routes>
  );
}

export default ProductList;
