import React from "react";
import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaLink,
  FaChartLine,
  FaMoneyBillWave,
} from "react-icons/fa";
import ComingSoon from "../components/ComingSoon";

const GetStarted = () => {
  return (
    <div className="min-h-screen relative">
      {/* Coming Soon Overlay */}
      <ComingSoon />
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
              Start Your Journey with
              <span className="text-[#a7ec4f]"> EarningSync</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Follow these simple steps to begin your copy trading experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FaUserPlus className="w-8 h-8 text-[#013024] mr-4" />
                <h3 className="text-2xl font-semibold">1. Create an Account</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Sign up for an Exness trading account if you haven't already
              </p>
              <button className="btn-primary">Open Exness Account</button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FaLink className="w-8 h-8 text-[#013024] mr-4" />
                <h3 className="text-2xl font-semibold">2. Connect with Us</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Find and follow our strategy on Exness Social Trading
              </p>
              <button className="btn-primary">View Our Strategy</button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FaChartLine className="w-8 h-8 text-[#013024] mr-4" />
                <h3 className="text-2xl font-semibold">3. Start Copying</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Set your copy trading parameters and begin following our trades
              </p>
              <button className="btn-primary">Copy Trading Guide</button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FaMoneyBillWave className="w-8 h-8 text-[#013024] mr-4" />
                <h3 className="text-2xl font-semibold">4. Monitor & Earn</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Track your performance and watch your investments grow
              </p>
              <button className="btn-primary">View Performance</button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
