import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaLinkedin, FaArrowUp, FaTelegram } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-8 pb-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-8">
        {/* Links */}
        <div className="w-full md:w-auto flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-2">
          <Link
            to="/"
            className="text-[#013024] hover:text-[#a7ec4f] font-medium transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[#013024] hover:text-[#a7ec4f] font-medium transition"
          >
            About
          </Link>
          <Link
            to="/get-started"
            className="text-[#013024] hover:text-[#a7ec4f] font-medium transition"
          >
            Get Started
          </Link>
          <Link
            to="/faq"
            className="text-[#013024] hover:text-[#a7ec4f] font-medium transition"
          >
            FAQs
          </Link>
          <Link
            to="/contact"
            className="text-[#013024] hover:text-[#a7ec4f] font-medium transition"
          >
            Contact
          </Link>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center w-full gap-8 mt-6 md:mt-0">
          <a
            href="#"
            aria-label="WhatsApp"
            className="text-[#013024] hover:text-[#a7ec4f] transition"
          >
            <FaWhatsapp size={32} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-[#013024] hover:text-[#a7ec4f] transition"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="#"
            aria-label="Telegram"
            className="text-[#013024] hover:text-[#a7ec4f] transition"
          >
            <FaTelegram size={32} />
          </a>
        </div>
      </div>

      {/* Contact Support Button */}
      <div className="flex justify-center mt-8">
        <Link
          to="/contact"
          className="px-6 py-2 rounded-full bg-[#a7ec4f] text-[#013024] font-bold shadow hover:bg-[#bfff5c] transition-all text-base flex items-center"
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
            className="text-xs text-gray-500 hover:text-[#a7ec4f] transition"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-xs text-gray-500 hover:text-[#a7ec4f] transition"
          >
            Terms
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
