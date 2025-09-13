import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaWhatsapp, FaLinkedin, FaArrowUp, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Helper to get locale-aware path
  const getPath = (path) => {
    if (i18n.language === "ar") {
      return `/ar${path === "/" ? "" : path}`;
    }
    return path;
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
            to={getPath("/")}
            className="text-[#013024] hover:text-[#a7ec4f] font-medium transition"
            onClick={(e) => handleNavClick(getPath("/"), e)}
          >
            {t("navbar.home")}
          </Link>
          <Link
            to={getPath("/about")}
            className="text-[#013024] hover:text-[#a7ec4f] font-medium transition"
            onClick={(e) => handleNavClick(getPath("/about"), e)}
          >
            {t("navbar.about")}
          </Link>
          <Link
            to={getPath("/get-started")}
            className="text-[#013024] hover:text-[#a7ec4f] font-medium transition"
            onClick={(e) => handleNavClick(getPath("/get-started"), e)}
          >
            {t("navbar.getStarted")}
          </Link>
          <Link
            to={getPath("/products")}
            className="text-[#013024] hover:text-[#a7ec4f] font-medium transition"
            onClick={(e) => handleNavClick(getPath("/products"), e)}
          >
            {t("navbar.products")}
          </Link>
          <Link
            to={getPath("/calculator")}
            className="text-[#013024] hover:text-[#a7ec4f] font-medium transition"
            onClick={(e) => handleNavClick(getPath("/calculator"), e)}
          >
            {t("navbar.calculator")}
          </Link>
          <Link
            to={getPath("/faq")}
            className="text-[#013024] hover:text-[#a7ec4f] font-medium transition"
            onClick={(e) => handleNavClick(getPath("/faq"), e)}
          >
            {t("navbar.faq")}
          </Link>
          <Link
            to={getPath("/contact")}
            className="text-[#013024] hover:text-[#a7ec4f] font-medium transition"
            onClick={(e) => handleNavClick(getPath("/contact"), e)}
          >
            {t("navbar.contact")}
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
          to={getPath("/contact")}
          className="px-6 py-2 rounded-full bg-[#a7ec4f] text-[#013024] font-bold shadow hover:bg-[#bfff5c] transition-all text-base flex items-center"
          onClick={(e) => handleNavClick(getPath("/contact"), e)}
        >
          {t("footer.contactButton")}
        </Link>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-gray-200 pt-6 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between gap-4">
        <p className="text-sm text-gray-500 md:order-1 order-2">
          {t("footer.copyright")}
        </p>
        <div className="flex items-center gap-4 md:order-2 order-1">
          <Link
            to={getPath("/privacy")}
            className="text-xs text-gray-500 hover:text-[#a7ec4f] transition border-b-2 border-transparent hover:border-[#a7ec4f] pb-0.5"
            onClick={(e) => handleNavClick(getPath("/privacy"), e)}
          >
            {t("footer.privacy")}
          </Link>
          <Link
            to={getPath("/terms")}
            className="text-xs text-gray-500 hover:text-[#a7ec4f] transition border-b-2 border-transparent hover:border-[#a7ec4f] pb-0.5"
            onClick={(e) => handleNavClick(getPath("/terms"), e)}
          >
            {t("footer.terms")}
          </Link>
          <Link
            to={getPath("/riskwarning")}
            className="text-xs text-gray-500 hover:text-[#a7ec4f] transition border-b-2 border-transparent hover:border-[#a7ec4f] pb-0.5"
            onClick={(e) => handleNavClick(getPath("/riskwarning"), e)}
          >
            {t("footer.risk")}
          </Link>
          <Link
            to={getPath("/b2b")}
            className="text-xs text-gray-500 hover:text-[#a7ec4f] transition border-b-2 border-transparent hover:border-[#a7ec4f] pb-0.5"
            onClick={(e) => handleNavClick(getPath("/b2b"), e)}
          >
            {t("footer.b2b")}
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
