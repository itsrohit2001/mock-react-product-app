import React from "react";

function Contact() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-2">Have questions or need help? Reach out to our support team!</p>
      <form className="flex flex-col max-w-md">
        <input className="mb-2 p-2 border rounded" type="text" placeholder="Your Name" />
        <input className="mb-2 p-2 border rounded" type="email" placeholder="Your Email" />
        <textarea className="mb-2 p-2 border rounded" placeholder="Your Message"></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;