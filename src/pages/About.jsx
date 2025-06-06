import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaChartBar, FaShieldAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  const navigate = useNavigate();

  // Scroll to top and navigate instantly
  const handleNavClick = (to, e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate(to);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#013024] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-[#a7ec4f]">EarningSync</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Your trusted partner for safe, transparent, and real copy trading
              results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#013024] mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To help you grow your money safely, with real results and honest
              reporting. We always put your security first and support you every
              step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow-lg bg-white"
            >
              <FaHandshake className="w-12 h-12 text-[#013024] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3 text-center">Trust</h3>
              <p className="text-gray-600 text-center">
                We build long-term relationships through transparency and
                reliability.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow-lg bg-white"
            >
              <FaChartBar className="w-12 h-12 text-[#013024] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3 text-center">
                Performance
              </h3>
              <p className="text-gray-600 text-center">
                Safe returns from proven strategies, always focused on
                protecting your capital.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow-lg bg-white"
            >
              <FaShieldAlt className="w-12 h-12 text-[#013024] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3 text-center">
                Security
              </h3>
              <p className="text-gray-600 text-center">
                Your money's protection is prioritized with strong risk
                management.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#013024] mb-12 text-center">
            Why Choose EarningSync?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#013024]">
                Expert Management
              </h3>
              <p className="text-gray-600">
                Our team of professionals are dedicated to your success and
                safety.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#013024]">
                Transparent Fees
              </h3>
              <p className="text-gray-600">
                We only earn a 30% fee on the profit we make for you. If you
                don’t profit, we don’t earn.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#013024]">
                Risk Management
              </h3>
              <p className="text-gray-600">
                Investments with the primary focus being the protection of your
                capital at all times.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#013024]">
                Proven Track Record
              </h3>
              <p className="text-gray-600">
                Real, consistent results you can verify for yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#013024] text-white text-center relative mt-20">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Join our community and start your journey with EarningSync today.
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

export default About;
