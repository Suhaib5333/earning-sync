import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaChartLine, FaUsers } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#013024]">
      {/* Hero Section */}
      <section className="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="hero-title">
              Smart Copy Trading for
              <span className="text-[#a7ec4f] drop-shadow-lg"> Secure Returns</span>
            </h1>
            <p className="hero-subtitle">
              Join thousands of investors earning consistent returns through our
              proven copy trading strategy
            </p>
            <button className="btn-primary text-lg shadow-xl hover:scale-105">
              Start Trading Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              whileHover={{ scale: 1.07 }}
              className="feature-card"
            >
              <FaShieldAlt className="feature-icon" />
              <h3 className="feature-title text-[#013024]">Safety First</h3>
              <p className="feature-description">
                Your investment security is our top priority
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.07 }}
              className="feature-card"
            >
              <FaChartLine className="feature-icon" />
              <h3 className="feature-title text-[#013024]">Proven Strategy</h3>
              <p className="feature-description">
                Consistent returns through tested methods
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.07 }}
              className="feature-card"
            >
              <FaUsers className="feature-icon" />
              <h3 className="feature-title text-[#013024]">Expert Team</h3>
              <p className="feature-description">
                Backed by experienced trading professionals
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta bg-[#013024] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="cta-title">
            Ready to Start Your Investment Journey?
          </h2>
          <button className="btn-primary text-lg shadow-xl hover:scale-105">
            Open Your Trading Account
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;