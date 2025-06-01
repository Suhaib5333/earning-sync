import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaArrowRight,
  FaStar,
  FaTrophy,
} from "react-icons/fa";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stats = [
    { number: "10,000+", label: "Active Traders", icon: FaUsers },
    { number: "85%", label: "Success Rate", icon: FaTrophy },
    { number: "24/7", label: "Support", icon: FaShieldAlt },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="hero-gradient relative min-h-screen flex items-center justify-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center px-6 py-3 mb-8 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
            >
              <FaStar className="text-yellow-400 mr-2" />
              <span className="text-white font-medium">
                Trusted by 10,000+ Investors
              </span>
            </motion.div>

            <h1 className="hero-title-new mb-6">
              Smart Copy Trading for
              <br />
              <span className="hero-highlight">Secure Returns</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hero-subtitle-new mb-12"
            >
              Join thousands of investors earning consistent returns through our
              <br className="hidden sm:block" />
              proven copy trading strategy with advanced risk management
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <button className="btn-primary-new group">
                Start Trading Now
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="btn-secondary-new">
                View Live Performance
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="stats-card group"
              >
                <div className="stats-icon-wrapper">
                  <stat.icon className="stats-icon" />
                </div>
                <div className="stats-number">{stat.number}</div>
                <div className="stats-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="section-title">
              Why Choose <span className="text-gradient">EarningSync</span>?
            </h2>
            <p className="section-subtitle">
              Experience the future of copy trading with our cutting-edge
              platform
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="feature-card-new group"
            >
              <div className="feature-card-header">
                <div className="feature-icon-wrapper safety">
                  <FaShieldAlt className="feature-icon-new" />
                </div>
              </div>
              <div className="feature-card-body">
                <h3 className="feature-title-new">Bank-Grade Security</h3>
                <p className="feature-description-new">
                  Your investments are protected with military-grade encryption
                  and multi-layer security protocols
                </p>
                <div className="feature-highlight">
                  <span className="highlight-badge">256-bit SSL</span>
                  <span className="highlight-badge">Cold Storage</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="feature-card-new group"
            >
              <div className="feature-card-header">
                <div className="feature-icon-wrapper strategy">
                  <FaChartLine className="feature-icon-new" />
                </div>
              </div>
              <div className="feature-card-body">
                <h3 className="feature-title-new">AI-Powered Strategy</h3>
                <p className="feature-description-new">
                  Advanced algorithms analyze market patterns to deliver
                  consistent returns with minimal risk
                </p>
                <div className="feature-highlight">
                  <span className="highlight-badge">85% Win Rate</span>
                  <span className="highlight-badge">Auto-Trading</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="feature-card-new group"
            >
              <div className="feature-card-header">
                <div className="feature-icon-wrapper team">
                  <FaUsers className="feature-icon-new" />
                </div>
              </div>
              <div className="feature-card-body">
                <h3 className="feature-title-new">Expert Community</h3>
                <p className="feature-description-new">
                  Connect with professional traders and learn from their proven
                  strategies and insights
                </p>
                <div className="feature-highlight">
                  <span className="highlight-badge">10+ Years Exp</span>
                  <span className="highlight-badge">24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section relative overflow-hidden">
        <div className="cta-background"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="cta-title-new">
              Ready to Transform Your
              <span className="cta-highlight"> Investment Journey?</span>
            </h2>
            <p className="cta-subtitle">
              Join thousands of successful traders and start earning passive
              income today
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="btn-cta group">
                Open Your Trading Account
                <div className="btn-glow"></div>
                <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </motion.div>
            <p className="cta-note">
              No hidden fees • Start with just $100 • Withdraw anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
