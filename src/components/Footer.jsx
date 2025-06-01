import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaLinkedin,
  FaTelegram,
  FaDiscord,
  FaArrowUp,
  FaShieldAlt,
  FaLock,
  FaCertificate,
} from "react-icons/fa";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: FaTwitter,
      href: "#",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: FaLinkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: FaTelegram,
      href: "#",
      label: "Telegram",
      color: "hover:text-blue-500",
    },
    {
      icon: FaDiscord,
      href: "#",
      label: "Discord",
      color: "hover:text-indigo-400",
    },
  ];

  const trustBadges = [
    { icon: FaShieldAlt, text: "SSL Secured" },
    { icon: FaLock, text: "Data Protected" },
    { icon: FaCertificate, text: "Verified Platform" },
  ];

  return (
    <footer className="footer-new">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="footer-brand">
                <div className="footer-logo">
                  <div className="logo-icon">
                    <div className="logo-gradient"></div>
                    <span className="logo-text">E</span>
                  </div>
                  <span className="footer-brand-name">EarningSync</span>
                </div>
                <p className="footer-description">
                  Your trusted partner in copy trading success. We help
                  investors achieve consistent returns through proven strategies
                  and cutting-edge technology.
                </p>

                {/* Trust Badges */}
                <div className="trust-badges">
                  {trustBadges.map((badge, index) => (
                    <div key={index} className="trust-badge">
                      <badge.icon className="trust-badge-icon" />
                      <span className="trust-badge-text">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="footer-heading">Platform</h4>
              <ul className="footer-links-list">
                <li>
                  <Link to="/" className="footer-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/get-started" className="footer-link">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="footer-link">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="footer-link">
                    Features
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div variants={itemVariants}>
              <h4 className="footer-heading">Support</h4>
              <ul className="footer-links-list">
                <li>
                  <Link to="/faq" className="footer-link">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-link">
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="footer-link">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/tutorials" className="footer-link">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link to="/api-docs" className="footer-link">
                    API Documentation
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div variants={itemVariants}>
              <h4 className="footer-heading">Stay Connected</h4>

              {/* Newsletter Signup */}
              <div className="newsletter-signup">
                <p className="newsletter-text">
                  Get trading insights and platform updates delivered to your
                  inbox.
                </p>
                <div className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="newsletter-input"
                  />
                  <button className="newsletter-btn">Subscribe</button>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-section">
                <h5 className="social-heading">Follow Us</h5>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`social-link ${social.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <social.icon className="social-icon" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="footer-bottom-content">
            <div className="footer-bottom-left">
              <p className="copyright-text">
                © {new Date().getFullYear()} EarningSync. All rights reserved.
              </p>
              <div className="footer-bottom-links">
                <Link to="/privacy" className="footer-bottom-link">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="footer-bottom-link">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="footer-bottom-link">
                  Cookie Policy
                </Link>
              </div>
            </div>

            <div className="footer-bottom-right">
              <motion.button
                onClick={scrollToTop}
                className="scroll-to-top"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Scroll to top"
              >
                <FaArrowUp className="scroll-icon" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="footer-decoration">
        <div className="decoration-circle decoration-circle-1"></div>
        <div className="decoration-circle decoration-circle-2"></div>
        <div className="decoration-line"></div>
      </div>
    </footer>
  );
};

export default Footer;
