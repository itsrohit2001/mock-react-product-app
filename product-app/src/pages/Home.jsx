import React from 'react';

function Home() {
  return (
    <div className="p-8">
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Bandage Store</h1>
        <p className="text-lg mb-6">
          Discover the latest trends and best deals on your favorite products. Enjoy fast shipping and top-notch customer service!
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Shop Now
        </button>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-4 rounded shadow">
            <img src="/assets/product1.jpg" alt="Product 1" className="mb-2 w-full h-40 object-cover" />
            <h3 className="text-xl font-semibold">Product 1</h3>
            <p className="text-gray-600">$29.99</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
          </div>
          <div className="border p-4 rounded shadow">
            <img src="/assets/product2.jpg" alt="Product 2" className="mb-2 w-full h-40 object-cover" />
            <h3 className="text-xl font-semibold">Product 2</h3>
            <p className="text-gray-600">$39.99</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
          </div>
          <div className="border p-4 rounded shadow">
            <img src="/assets/product3.jpg" alt="Product 3" className="mb-2 w-full h-40 object-cover" />
            <h3 className="text-xl font-semibold">Product 3</h3>
            <p className="text-gray-600">$49.99</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Why Shop With Us?</h2>
        <ul className="flex flex-col md:flex-row justify-center gap-8 mt-4">
          <li>
            <span className="font-bold">Free Shipping</span>
            <p className="text-gray-600">On all orders over $50</p>
          </li>
          <li>
            <span className="font-bold">24/7 Support</span>
            <p className="text-gray-600">We're here to help anytime</p>
          </li>
          <li>
            <span className="font-bold">Secure Payment</span>
            <p className="text-gray-600">100% secure payment</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home;