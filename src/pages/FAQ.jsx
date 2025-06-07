import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import ComingSoon from "../components/ComingSoon";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is copy trading?",
      answer:
        "Copy trading is an automated trading method where you can automatically copy positions opened and managed by another selected trader. When they trade, your account will automatically copy their actions proportionally to your investment.",
    },
    {
      question: "How much is the performance fee?",
      answer:
        "We charge a 30% performance fee on profits generated through our copy trading service. This fee structure ensures our interests are aligned with yours - we only earn when you earn.",
    },
    {
      question: "What is the minimum investment?",
      answer:
        "The minimum investment amount is determined by Exness platform requirements. We recommend starting with at least $1000 to ensure proper position sizing and risk management.",
    },
    {
      question: "How do you manage risk?",
      answer:
        "We employ strict risk management protocols including position sizing, stop-loss orders, and diversification strategies. Our primary focus is capital preservation while seeking consistent returns.",
    },
    {
      question: "Can I withdraw my funds at any time?",
      answer:
        "Yes, you maintain full control of your funds at all times. You can stop copying trades and withdraw your funds whenever you wish, subject to Exness's standard withdrawal procedures.",
    },
    {
      question: "What is your trading strategy?",
      answer:
        "We use a combination of technical and fundamental analysis to identify high-probability trading opportunities. Our focus is on major currency pairs with strict risk management protocols.",
    },
    {
      question: "How often do you trade?",
      answer:
        "Our trading frequency varies based on market conditions and opportunities. We prioritize quality setups over quantity to maintain consistent performance.",
    },
    {
      question: "What is your average monthly return?",
      answer:
        "While past performance doesn't guarantee future results, we aim for consistent monthly returns while prioritizing capital preservation. Detailed performance statistics are available on our Exness profile.",
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Coming Soon Overlay (centered on the screen) */}
      {/* <ComingSoon /> */}

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
              Frequently Asked <span className="text-[#a7ec4f]">Questions</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Find answers to common questions about our copy trading service
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={false}
                animate={{
                  backgroundColor: openIndex === index ? "#f8f9fa" : "#ffffff",
                }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="text-lg font-semibold text-[#013024]">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`w-5 h-5 text-[#013024] transform transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#013024] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us for personalized assistance
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-[#a7ec4f] text-[#013024] font-bold rounded-full shadow-lg hover:bg-[#bfff5c] transition-all text-lg flex items-center justify-center">
              Contact Us Now!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
