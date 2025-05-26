import React, { useEffect } from "react";

function ProductList() {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    // fetch(`http://localhost:5000/api/products`)
    // .then((response) => {
    //   if (!response.ok) {
    //     throw new Error("Network response was not ok");
    //   }
    //   return response.json();
    // })
  }, []);

  return (
    <div className="product-list">
      <h1>PRODUCTS</h1>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <div className="flex flex-col items-center">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
