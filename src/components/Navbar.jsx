import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo_transparent.png";
import ukFlag from "../assets/uk-flag.png";
import bahrainFlag from "../assets/bahrain-flag.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  // Always get navLinks from t() so they update on language change
  const navLinks = React.useMemo(
    () => [
      { name: t("navbar.home"), path: "/" },
      { name: t("navbar.about"), path: "/about" },
      { name: t("navbar.getStarted"), path: "/get-started" },
      { name: t("navbar.products"), path: "/products" },
      { name: t("navbar.calculator"), path: "/calculator" },
      { name: t("navbar.faq"), path: "/faq" },
      { name: t("navbar.contact"), path: "/contact" },
    ],
    [t, i18n.language]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActivePath = (path) =>
    location.pathname === path ||
    location.pathname === `/ar${path === "/" ? "" : path}`;

  // Scroll to top and navigate
  const handleNavClick = (to, e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setIsOpen(false);
    navigate(to);
  };

  // Language switcher
  const currentLang = i18n.language === "ar" ? "ar" : "en";
  const handleLangChange = (lang) => {
    let path = location.pathname;
    // Remove trailing slash for consistency
    if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
    if (lang === "ar") {
      if (!path.startsWith("/ar")) {
        path = "/ar" + (path === "/" ? "" : path);
      }
    } else {
      if (path.startsWith("/ar")) {
        path = path.replace(/^\/ar/, "");
        if (path === "") path = "/";
      }
    }
    i18n.changeLanguage(lang);
    // Always navigate, even if already on the correct path
    navigate(path, { replace: true });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 shadow-lg backdrop-blur"
            : "bg-gray-50/80 backdrop-blur"
        }`}
        style={{ borderBottom: "1px solid #e5e7eb" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20 w-full">
            {/* Mobile: Logo, Language Dropdown, Menu Icon */}
            <div className="flex items-center w-full lg:w-auto">
              <Link
                to={currentLang === "ar" ? "/ar" : "/"}
                className="flex items-center group"
                onClick={(e) =>
                  handleNavClick(currentLang === "ar" ? "/ar" : "/", e)
                }
              >
                <img
                  src={logo}
                  alt="EarningSync Logo"
                  className="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-105"
                  style={{
                    background: "none",
                    border: "none",
                    boxShadow: "none",
                  }}
                />
                <span className="ml-2 text-xl font-extrabold text-[#013024] tracking-tight select-none">
                  EarningSync
                </span>
              </Link>
              {/* Mobile Language Dropdown */}
              <div className="flex lg:hidden ml-2">
                <div className="relative">
                  <button
                    className="flex items-center px-2 py-1 rounded-lg border border-[#a7ec4f] bg-white text-[#013024] font-semibold hover:bg-[#a7ec4f]/20 transition text-sm"
                    aria-label="Change language"
                    onClick={() => setLangDropdown((v) => !v)}
                    onBlur={() => setTimeout(() => setLangDropdown(false), 150)}
                  >
                    {currentLang === "ar" ? (
                      <img
                        src={bahrainFlag}
                        alt="عربي"
                        className="w-5 h-5 mr-1 object-contain"
                        style={{
                          transform: "scaleX(1)",
                          borderRadius: "3px",
                        }}
                      />
                    ) : (
                      <img
                        src={ukFlag}
                        alt="English"
                        className="w-5 h-5 mr-1 object-contain"
                        style={{ borderRadius: "3px" }}
                      />
                    )}
                    <span>{currentLang === "ar" ? "عربي" : "EN"}</span>
                    <svg
                      className="ml-1 w-3 h-3"
                      fill="none"
                      stroke="#013024"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {langDropdown && (
                    <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                      <button
                        className="w-full flex items-center px-2 py-1 hover:bg-[#a7ec4f]/20 text-[#013024] rounded-t-lg text-sm"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => {
                          setLangDropdown(false);
                          handleLangChange("en");
                        }}
                      >
                        <img
                          src={ukFlag}
                          alt="English"
                          className="w-5 h-5 mr-1 object-contain"
                          style={{ borderRadius: "3px" }}
                        />{" "}
                        EN
                      </button>
                      <button
                        className="w-full flex items-center px-2 py-1 hover:bg-[#a7ec4f]/20 text-[#013024] rounded-b-lg text-sm"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => {
                          setLangDropdown(false);
                          handleLangChange("ar");
                        }}
                      >
                        <img
                          src={bahrainFlag}
                          alt="عربي"
                          className="w-5 h-5 mr-1 object-contain"
                          style={{
                            transform: "scaleX(1)",
                            borderRadius: "3px",
                          }}
                        />{" "}
                        عربي
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.path}
                  to={
                    currentLang === "ar"
                      ? `/ar${link.path === "/" ? "" : link.path}`
                      : link.path
                  }
                  className={`px-4 py-2 rounded-lg font-semibold text-base transition-all duration-200 ${
                    isActivePath(link.path)
                      ? "bg-[#a7ec4f] text-[#013024] shadow"
                      : "text-[#013024] hover:bg-[#e6f9d5] hover:text-[#013024]"
                  }`}
                  onClick={(e) =>
                    handleNavClick(
                      currentLang === "ar"
                        ? `/ar${link.path === "/" ? "" : link.path}`
                        : link.path,
                      e
                    )
                  }
                >
                  {link.name}
                </Link>
              ))}
              {/* Language Dropdown */}
              <div className="relative ml-4">
                <button
                  className="flex items-center px-3 py-2 rounded-lg border border-[#a7ec4f] bg-white text-[#013024] font-semibold hover:bg-[#a7ec4f]/20 transition"
                  aria-label="Change language"
                  onClick={() => setLangDropdown((v) => !v)}
                  onBlur={() => setTimeout(() => setLangDropdown(false), 150)}
                >
                  {currentLang === "ar" ? (
                    <img
                      src={bahrainFlag}
                      alt="عربي"
                      className="w-6 h-6 mr-2 object-contain"
                      style={{
                        transform: "scaleX(1)", // Remove inversion for Bahrain flag
                        borderRadius: "3px",
                      }}
                    />
                  ) : (
                    <img
                      src={ukFlag}
                      alt="English"
                      className="w-6 h-6 mr-2 object-contain"
                      style={{ borderRadius: "3px" }}
                    />
                  )}
                  <span>{currentLang === "ar" ? "عربي" : "English"}</span>
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="#013024"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {langDropdown && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <button
                      className="w-full flex items-center px-3 py-2 hover:bg-[#a7ec4f]/20 text-[#013024] rounded-t-lg"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        setLangDropdown(false);
                        handleLangChange("en");
                      }}
                    >
                      <img
                        src={ukFlag}
                        alt="English"
                        className="w-6 h-6 mr-2 object-contain"
                        style={{ borderRadius: "3px" }}
                      />{" "}
                      English
                    </button>
                    <button
                      className="w-full flex items-center px-3 py-2 hover:bg-[#a7ec4f]/20 text-[#013024] rounded-b-lg"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        setLangDropdown(false);
                        handleLangChange("ar");
                      }}
                    >
                      <img
                        src={bahrainFlag}
                        alt="عربي"
                        className="w-6 h-6 mr-2 object-contain"
                        style={{
                          transform: "scaleX(1)",
                          borderRadius: "3px",
                        }}
                      />{" "}
                      عربي
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full bg-white/80 hover:bg-[#a7ec4f]/20 transition"
                aria-label="Open menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiX className="h-7 w-7 text-[#013024]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiMenu className="h-7 w-7 text-[#013024]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
      {/* Move mobile menu OUTSIDE of nav to avoid backdrop-blur and transparency issues */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setIsOpen(false)}
            />
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col"
            >
              <div className="flex items-center px-6 py-6 border-b border-gray-200 min-w-0">
                <img
                  src={logo}
                  alt="EarningSync Logo"
                  className="h-12 w-12 object-contain flex-shrink-0"
                  style={{
                    background: "none",
                    border: "none",
                    boxShadow: "none",
                  }}
                />
                <span className="ml-3 text-2xl font-extrabold text-[#013024] tracking-tight select-none flex-shrink-0">
                  EarningSync
                </span>
              </div>
              <nav className="flex-1 flex flex-col gap-2 px-6 py-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-3 rounded-lg font-semibold text-lg transition-all duration-200 ${
                      isActivePath(link.path)
                        ? "bg-[#a7ec4f] text-[#013024] shadow"
                        : "text-[#013024] hover:bg-[#e6f9d5] hover:text-[#013024]"
                    }`}
                    onClick={(e) => handleNavClick(link.path, e)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* Spacer to prevent content jump */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
