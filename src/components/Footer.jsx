import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaWhatsapp, FaLinkedin, FaArrowUp, FaGlobe } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll to top and navigate
  const handleNavClick = (to, e) => {
    e.preventDefault();
    navigate(to);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    // Remove bg-gray-50 and border, make background transparent so global gradient shows through
    <footer className="pt-8 pb-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
        {/* Links */}
        <div className="w-full flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-4">
          <Link
            to="/"
            className="text-[#013024] hover:text-[#a7ec4f] font-medium transition"
            onClick={(e) => handleNavClick("/", e)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[#013024] hover:text-[#a7ec4f] font-medium transition"
            onClick={(e) => handleNavClick("/about", e)}
          >
            About
          </Link>
          <Link
            to="/get-started"
            className="text-[#013024] hover:text-[#a7ec4f] font-medium transition"
            onClick={(e) => handleNavClick("/get-started", e)}
          >
            Get Started
          </Link>
          <Link
            to="/products"
            className="text-[#013024] hover:text-[#a7ec4f] font-medium transition"
            onClick={(e) => handleNavClick("/products", e)}
          >
            Products
          </Link>
          <Link
            to="/faq"
            className="text-[#013024] hover:text-[#a7ec4f] font-medium transition"
            onClick={(e) => handleNavClick("/faq", e)}
          >
            FAQs
          </Link>
          <Link
            to="/contact"
            className="text-[#013024] hover:text-[#a7ec4f] font-medium transition"
            onClick={(e) => handleNavClick("/contact", e)}
          >
            Contact
          </Link>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-8 mb-4">
          <a
            href="https://chat.whatsapp.com/L0OdHDeFk96AAjSVbJ87Ii"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-[#013024] hover:text-[#a7ec4f] transition"
          >
            <FaWhatsapp size={32} />
          </a>
          <a
            href="https://www.linkedin.com/company/earningsync"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#013024] hover:text-[#a7ec4f] transition"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://www.earningsync.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website"
            className="text-[#013024] hover:text-[#a7ec4f] transition"
          >
            <FaGlobe size={32} />
          </a>
        </div>
      </div>

      {/* Contact Support Button */}
      <div className="flex justify-center mt-8">
        <Link
          to="/contact"
          className="px-6 py-2 rounded-full bg-[#a7ec4f] text-[#013024] font-bold shadow hover:bg-[#bfff5c] transition-all text-base flex items-center"
          onClick={(e) => handleNavClick("/contact", e)}
        >
          Contact Us
        </Link>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-gray-200 pt-6 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between gap-4">
        <p className="text-sm text-gray-500 md:order-1 order-2">
          © {new Date().getFullYear()} EarningSync. All rights reserved.
        </p>
        <div className="flex items-center gap-4 md:order-2 order-1">
          <Link
            to="/privacy"
            className="text-xs text-gray-500 hover:text-[#a7ec4f] transition border-b-2 border-transparent hover:border-[#a7ec4f] pb-0.5"
            onClick={(e) => handleNavClick("/privacy", e)}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-xs text-gray-500 hover:text-[#a7ec4f] transition border-b-2 border-transparent hover:border-[#a7ec4f] pb-0.5"
            onClick={(e) => handleNavClick("/terms", e)}
          >
            Terms & Conditions
          </Link>
          <Link
            to="/riskwarning"
            className="text-xs text-gray-500 hover:text-[#a7ec4f] transition border-b-2 border-transparent hover:border-[#a7ec4f] pb-0.5"
            onClick={(e) => handleNavClick("/riskwarning", e)}
          >
            Risk Warning
          </Link>
        </div>
        <button
          onClick={scrollToTop}
          className="bg-[#a7ec4f] text-[#013024] p-2 rounded-full shadow hover:bg-[#bfff5c] transition md:order-3 order-3"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
