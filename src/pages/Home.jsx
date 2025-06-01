import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaChartLine, FaUsers } from 'react-icons/fa';

const Home = () => {
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
              Smart Copy Trading for
              <span className="text-[#a7ec4f]"> Secure Returns</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Join thousands of investors earning consistent returns through our
              proven copy trading strategy
            </p>
            <button className="btn-primary text-lg">Start Trading Now</button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-lg shadow-lg"
            >
              <FaShieldAlt className="w-12 h-12 mx-auto text-[#013024] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Safety First</h3>
              <p className="text-gray-600">
                Your investment security is our top priority
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-lg shadow-lg"
            >
              <FaChartLine className="w-12 h-12 mx-auto text-[#013024] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Proven Strategy</h3>
              <p className="text-gray-600">
                Consistent returns through tested methods
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-lg shadow-lg"
            >
              <FaUsers className="w-12 h-12 mx-auto text-[#013024] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Backed by experienced trading professionals
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#013024] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Start Your Investment Journey?
          </h2>
          <button className="btn-primary text-lg">
            Open Your Trading Account
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;