import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaQuestionCircle,
  FaDollarSign,
  FaPiggyBank,
  FaShieldAlt,
  FaUnlockAlt,
  FaChartLine,
  FaSyncAlt,
  FaChartBar,
  FaChevronDown, // <-- Add this import!
} from "react-icons/fa";

const faqIcons = [
  FaQuestionCircle, // What is copy trading?
  FaDollarSign, // How much is the performance fee?
  FaPiggyBank, // What is the minimum investment?
  FaShieldAlt, // How do you manage risk?
  FaUnlockAlt, // Can I withdraw my funds at any time?
  FaSyncAlt, // How often do you trade?
  FaChartBar, // What is your average monthly return?
];

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
        "$100 is the minimum investment required to start copy trading with us.",
    },
    {
      question: "How do you manage risk?",
      answer:
        "We open small lot sizes to ensure that even in the event of a loss, your capital is preserved.",
    },
    {
      question: "Can I withdraw my funds at any time?",
      answer:
        "Yes, you maintain full control of your funds at all times. You can stop copying trades and withdraw your funds whenever you wish, your initial investment can be withdrawn as a refund using the same payment method, then all future withdrawals can be done using other methods.",
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
      {/* Hero Section */}
      <section className="bg-[#013024] text-white py-20 shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const Icon = faqIcons[index] || FaQuestionCircle;
              return (
                <motion.div
                  key={index}
                  className={`rounded-3xl shadow-xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "bg-gradient-to-br from-[#eaffd0] to-[#f7fff6] ring-2 ring-[#a7ec4f]/60"
                      : "bg-white"
                  }`}
                  initial={false}
                  animate={{
                    scale: isOpen ? 1.01 : 1,
                    boxShadow: isOpen
                      ? "0 8px 32px 0 rgba(167,236,79,0.15)"
                      : "0 2px 8px 0 rgba(1,48,36,0.08)",
                  }}
                >
                  <button
                    className={`w-full flex items-center justify-between px-8 py-8 text-left focus:outline-none rounded-3xl transition ${
                      isOpen
                        ? "bg-[#013024]/90 text-[#a7ec4f]"
                        : "bg-[#013024] text-white"
                    }`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#a7ec4f] text-[#013024] font-bold text-2xl shadow-lg">
                        <Icon />
                      </span>
                      <span className="text-lg md:text-2xl font-bold">
                        {faq.question}
                      </span>
                    </div>
                    <span
                      className={`ml-4 flex items-center justify-center rounded-full transition-transform duration-200 ${
                        isOpen
                          ? "rotate-180 bg-[#a7ec4f] text-[#013024]"
                          : "bg-white/10 text-[#a7ec4f]"
                      } w-10 h-10`}
                    >
                      <FaChevronDown className="w-6 h-6" />
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {isOpen && (
                      <div className="p-6 md:p-8 text-[#013024] text-lg leading-relaxed bg-white/70 rounded-b-3xl">
                        {faq.answer}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#013024] text-white text-center rounded-t-3xl shadow-inner mt-20">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Contact us for personalized assistance
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-[#a7ec4f] text-[#013024] font-bold rounded-full shadow-lg hover:bg-[#bfff5c] transition-all text-lg flex items-center group"
            >
              Contact Us Now!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
