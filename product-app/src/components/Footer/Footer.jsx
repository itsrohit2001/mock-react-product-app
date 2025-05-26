import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  let footerItems = [
    {
      title: "Company Info",
      items: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Legal",
      items: [
        "Privacy Policy",
        "Terms of Service",
        "Cookie Policy",
        "GDPR Compliance",
      ],
    },
    {
      title: "Features",
      items: [
        "Business Marketing",
        "User Analytic",
        "Live Chat",
        "Unlimited Support",
      ],
    },
    {
      title: "Resources",
      items: ["IOS & Android", "Watch a Demo", "Customers", "API"],
    },
    {
      title: "Get In Touch",
      items: [
        { icon: <FaPhoneAlt />, text: "(480) 555-0103" },
        { icon: <FaMapMarkerAlt />, text: "4517 Washington Ave." },
        { icon: <FaEnvelope />, text: "debra.holt@example.com" },
      ],
    },
  ];
  return (
    <div className="flex justify-center align-center bg-gray-900 text-white">
      <footer>
        <div className="flex justify-between items-center py-10">
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-semibold mb-2">
            Consulting Agency For Your Business
            </h2>
            <p className="text-gray-400">the quick fox jumps over the lazy dog</p>
          </div>
          <button className="bg-blue-500 text-white px-10 py-4 rounded hover:bg-blue-600 cursor-pointer">
            Contact Us
          </button>
        </div>

        <div className="flex gap-8 py-13">
          {footerItems.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold mb-3">{section.title}</h3>
              <ul className="flex flex-col gap-3 text-gray-400 items-start">
                {section.items.map((item, i) =>
                  typeof item === "string" ? (
                    <li key={i}>{item}</li>
                  ) : (
                    <li key={i} className="flex items-center gap-2">
                      {item.icon} {item.text}
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            Made With Love By Finland All Right Reserved
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            
            <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
            <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
            <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
