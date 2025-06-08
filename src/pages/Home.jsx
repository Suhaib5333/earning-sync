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
import { Link, useNavigate } from "react-router-dom"; // <-- useNavigate import

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
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white">
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
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
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
            {/* <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#013024] transition-all text-lg">
              View Our Live Results
            </button> */}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-4 text-4xl text-green-600">
                  <stat.icon />
                </div>
                <div className="text-3xl font-bold text-green-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-center">
                  {stat.label}
                  {stat.subLabel && (
                    <div className="text-xs italic text-gray-400 mt-1">
                      {stat.subLabel}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Why Choose <span className="text-[#a7ec4f]">EarningSync</span>?
            </h2>
            <p className="text-lg text-gray-600">
              Discover what sets us apart in the world of copy trading.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Security First */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-6">
                <FaShieldAlt className="text-4xl text-green-700" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Security Before Profit
              </h3>
              <p className="text-gray-600 mb-4">
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
            </div>
            {/* Transparency & Integrity */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-6">
                <FaChartLine className="text-4xl text-green-700" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Real Transparency, No Hype
              </h3>
              <p className="text-gray-600 mb-4">
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
            </div>
            {/* Community & Support */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-6">
                <FaUsers className="text-4xl text-green-700" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Community & Support
              </h3>
              <p className="text-gray-600 mb-4">
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
            </div>
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
