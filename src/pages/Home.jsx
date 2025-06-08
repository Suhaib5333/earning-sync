import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaArrowRight,
  FaStar,
  FaTrophy,
  FaAnchor,
  FaAward,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Scroll to top and navigate instantly
  const handleNavClick = (to, e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate(to);
  };

  const stats = [
    { number: "25+", label: "Years of Experience", icon: FaAward },
    {
      number: "8%",
      label: "Historical Average Monthly Profit",
      icon: FaAnchor,
    },
    {
      number: "31%",
      label: "Maximum Drawdown",
      subLabel: "On Earning Sync Classic",
      icon: FaShieldAlt,
    },
  ];

  return (
    // Remove the page-level gradient here, let App.jsx handle it globally!
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center min-h-[80vh] py-16 relative bg-[#013024]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <div className="inline-flex items-center px-6 py-3 mb-8 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <FaStar className="text-yellow-400 mr-2" />
            <span className="text-white font-medium">
              Trusted By Dozens of Investors
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg text-white">
            Smart Copy Trading for
            <br />
            <span className="text-[#a7ec4f]">Secure Returns</span>
          </h1>
          <p className="text-lg md:text-xl text-green-100 mb-10 max-w-2xl mx-auto px-6 sm:px-0">
            Join in on earning returns with us through our proven copy trading
            strategy with advanced risk management.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/get-started"
              onClick={(e) => handleNavClick("/get-started", e)}
              className="px-8 py-3 bg-[#a7ec4f] text-[#013024] font-bold rounded-full shadow-lg hover:bg-[#bfff5c] transition-all text-lg flex items-center group"
            >
              Get Started Now
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 8px 32px 0 #a7ec4f33",
                }}
                className="p-8 rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#f7fff6] border border-[#a7ec4f]/30 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#a7ec4f]"
              >
                <div className="bg-[#a7ec4f]/20 rounded-full p-5 mb-5 shadow-inner">
                  <stat.icon className="w-12 h-12 text-[#013024]" />
                </div>
                <div className="text-3xl font-bold text-[#013024] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium text-center">
                  {stat.label}
                  {stat.subLabel && (
                    <div className="text-xs italic text-gray-400 mt-1">
                      {stat.subLabel}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#013024]">
              Why Choose <span className="text-[#a7ec4f]">EarningSync</span>?
            </h2>
            <p className="text-lg text-gray-600">
              Discover what sets us apart in the world of copy trading.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Security First */}
            <motion.div
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 #a7ec4f33" }}
              className="p-8 rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#f7fff6] border border-[#a7ec4f]/30 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#a7ec4f]"
            >
              <div className="bg-[#a7ec4f]/20 rounded-full p-5 mb-5 shadow-inner">
                <FaShieldAlt className="w-12 h-12 text-[#013024]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#013024]">
                Security Before Profit
              </h3>
              <p className="text-gray-700 mb-4">
                Protecting your money comes first. We always focus on risk
                management before chasing profits.
              </p>
              <div className="flex gap-2 justify-center">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Risk Management
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Secure Custody
                </span>
              </div>
            </motion.div>
            {/* Transparency & Integrity */}
            <motion.div
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 #a7ec4f33" }}
              className="p-8 rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#f7fff6] border border-[#a7ec4f]/30 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#a7ec4f]"
            >
              <div className="bg-[#a7ec4f]/20 rounded-full p-5 mb-5 shadow-inner">
                <FaChartLine className="w-12 h-12 text-[#013024]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#013024]">
                Real Transparency, No Hype
              </h3>
              <p className="text-gray-700 mb-4">
                No fake results or hype. What you see is what you get. Real,
                verifiable, historical results.
              </p>
              <div className="flex gap-2 justify-center">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Honest Reporting
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Sustainable Returns
                </span>
              </div>
            </motion.div>
            {/* Community & Support */}
            <motion.div
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 #a7ec4f33" }}
              className="p-8 rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#f7fff6] border border-[#a7ec4f]/30 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#a7ec4f]"
            >
              <div className="bg-[#a7ec4f]/20 rounded-full p-5 mb-5 shadow-inner">
                <FaUsers className="w-12 h-12 text-[#013024]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#013024]">
                Community & Support
              </h3>
              <p className="text-gray-700 mb-4">
                Get updates in our WhatsApp group and reach out to our team
                anytime with questions or concerns.
              </p>
              <div className="flex gap-2 justify-center">
                <a
                  href="https://chat.whatsapp.com/L0OdHDeFk96AAjSVbJ87Ii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold underline hover:bg-green-200 transition"
                >
                  WhatsApp Group
                </a>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Direct Support
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#013024] text-white text-center relative">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Transform Your{" "}
            <span className="text-[#a7ec4f]">Investment Journey?</span>
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Join a community of investors and start earning passive income
            today.
          </p>
          <div className="flex justify-center">
            <Link
              to="/get-started"
              onClick={(e) => handleNavClick("/get-started", e)}
              className="px-8 py-3 bg-[#a7ec4f] text-[#013024] font-bold rounded-full shadow-lg hover:bg-[#bfff5c] transition-all text-lg flex items-center group"
            >
              Get Started Now
              <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
          <p className="mt-6 text-green-200 text-sm">
            Start with just $100 • Stop copying & withdraw at anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
