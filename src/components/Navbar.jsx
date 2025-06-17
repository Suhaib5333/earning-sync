import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo_transparent.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Get Started", path: "/get-started" },
    { name: "Products", path: "/products" },
    { name: "FAQs", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActivePath = (path) => location.pathname === path;

  // Scroll to top and navigate
  const handleNavClick = (to, e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setIsOpen(false);
    navigate(to);
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
        style={{
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo and Brand for all views */}
            <Link
              to="/"
              className="flex items-center group"
              onClick={(e) => handleNavClick("/", e)}
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
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-semibold text-base transition-all duration-200 ${
                    isActivePath(link.path)
                      ? "bg-[#a7ec4f] text-[#013024] shadow"
                      : "text-[#013024] hover:bg-[#e6f9d5] hover:text-[#013024]"
                  }`}
                  onClick={(e) => handleNavClick(link.path, e)}
                >
                  {link.name}
                </Link>
              ))}
              {/* Dashboard Link - Desktop */}
              <Link
                to="/dashboard"
                className={`px-4 py-2 rounded-lg font-semibold text-base transition-all duration-200 ${
                  isActivePath("/dashboard")
                    ? "bg-[#a7ec4f] text-[#013024] shadow"
                    : "text-[#013024] hover:bg-[#e6f9d5] hover:text-[#013024]"
                }`}
                onClick={(e) => handleNavClick("/dashboard", e)}
              >
                Dashboard
              </Link>
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
                {/* Dashboard Link - Mobile */}
                <Link
                  to="/dashboard"
                  className={`px-4 py-3 rounded-full font-semibold text-lg transition-all duration-200 ${
                    location.pathname === "/dashboard"
                      ? "bg-[#a7ec4f] text-[#013024] shadow"
                      : "text-[#013024] hover:bg-[#e6f9d5] hover:text-[#013024]"
                  }`}
                  onClick={(e) => handleNavClick("/dashboard", e)}
                >
                  Dashboard
                </Link>
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
