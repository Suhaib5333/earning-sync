import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaChartBar, FaShieldAlt } from 'react-icons/fa';

const About = () => {
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
              Your trusted partner in copy trading excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#013024] mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To provide secure and profitable copy trading solutions while maintaining
              the highest standards of transparency and risk management.
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
                Building long-term relationships through transparency and reliability
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow-lg bg-white"
            >
              <FaChartBar className="w-12 h-12 text-[#013024] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3 text-center">Performance</h3>
              <p className="text-gray-600 text-center">
                Delivering consistent returns through proven strategies
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow-lg bg-white"
            >
              <FaShieldAlt className="w-12 h-12 text-[#013024] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3 text-center">Security</h3>
              <p className="text-gray-600 text-center">
                Protecting your investments with robust risk management
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
                Our team of professional traders ensures optimal performance and risk management
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#013024]">
                Transparent Fees
              </h3>
              <p className="text-gray-600">
                Simple 30% performance fee structure with no hidden charges
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#013024]">
                Risk Management
              </h3>
              <p className="text-gray-600">
                Advanced risk control measures to protect your investment
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#013024]">
                Proven Track Record
              </h3>
              <p className="text-gray-600">
                Consistent performance history on the Exness platform
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;