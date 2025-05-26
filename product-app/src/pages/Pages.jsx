import React from "react";

function Pages() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">All Pages</h1>
      <p className="mb-4">
        Explore various sections of our e-commerce platform. Here you can find links and information about our shop, your account, order tracking, FAQs, and more.
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Shop:</strong> Browse and purchase products from our extensive catalog.
        </li>
        <li>
          <strong>Account:</strong> Manage your profile, addresses, and payment methods.
        </li>
        <li>
          <strong>Order Tracking:</strong> Check the status of your recent orders and view order history.
        </li>
        <li>
          <strong>Wishlist:</strong> Save your favorite products for later.
        </li>
        <li>
          <strong>FAQs:</strong> Find answers to common questions about shopping, shipping, and returns.
        </li>
        <li>
          <strong>Customer Support:</strong> Contact our support team for help with your orders or account.
        </li>
      </ul>
      <div className="mt-6">
        <p>
          Need more help? Visit our <a href="/contact" className="text-blue-500 underline">Contact Us</a> page.
        </p>
      </div>
    </div>
  );
}

export default Pages;