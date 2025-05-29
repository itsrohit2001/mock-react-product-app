import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FOOTER_TEXT } from "../../constants/constant";

function Footer() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  let footerItems = [
    {
      title: "Company Info",
      items: ["About Us", "Carrier", "We are hiring", "Blog"],
      link: ["/About", "/Carrier", "/WeAreHiring", "/Blog"],
    },
    {
      title: "Legal",
      items: [
        "Privacy Policy",
        "Terms of Service",
        "Cookie Policy",
        "GDPR Compliance",
      ],
      link: ["/privacy", "/terms", "/cookies", "/gdpr"],
    },
    {
      title: "Features",
      items: [
        "Business Marketing",
        "User Analytic",
        "Live Chat",
        "Unlimited Support",
      ],
      link: ["/marketing", "/analytics", "/chat", "/support"],
    },
    {
      title: "Resources",
      items: ["IOS & Android", "Watch a Demo", "Customers", "API"],
      link: ["/ios-android", "/demo", "/customers", "/api"],
    },
    {
      title: "Get In Touch",
      items: [
        { icon: <FaPhoneAlt />, text: "(480) 555-0103", link: "tel:4805550103" },
        { icon: <FaMapMarkerAlt />, text: "4517 Washington Ave.", link: "https://maps.google.com/?q=4517+Washington+Ave" },
        { icon: <FaEnvelope />, text: "debra.holt@example.com", link: "mailto:debra.holt@example.com" },
      ],
    },
  ];
  return (
    <div className="flex justify-center bg-gray-900 text-white w-full">
      <footer className="w-full max-w-7xl px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-8 gap-6">
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-semibold mb-2">
              {FOOTER_TEXT.TitleText}
            </h2>
            <p className="text-gray-400">{FOOTER_TEXT.SubTitleText}</p>
          </div>
          <Link to="/contact" className="w-full md:w-auto">
            <button className="w-full md:w-auto bg-blue-500 text-white px-8 py-3 rounded hover:bg-blue-600 cursor-pointer text-base font-semibold mt-4 md:mt-0">
              {FOOTER_TEXT.ContactText}
            </button>
          </Link>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-8">
          {footerItems.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold mb-3">{section.title}</h3>
              <ul className="flex flex-col gap-3 text-gray-400 items-start">
                {section.items.map((item, i) =>
                  typeof item === "string" ? (
                    <li key={i} className="cursor-pointer w-fit">
                      <Link
                        to={section.link ? section.link[i] : "#"}
                        className="hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ) : (
                    <li key={i} className="flex items-center gap-2 cursor-pointer w-fit">
                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.link.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors flex items-center gap-2"
                        >
                          {item.icon} {item.text}
                        </a>
                      ) : (
                        <>
                          {item.icon} {item.text}
                        </>
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            {FOOTER_TEXT.CompanyText}
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer text-xl" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-400 hover:text-white cursor-pointer text-xl" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-400 hover:text-white cursor-pointer text-xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;