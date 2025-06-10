import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaQuestionCircle,
  FaDollarSign,
  FaPiggyBank,
  FaShieldAlt,
  FaUnlockAlt,
  FaSyncAlt,
  FaChartBar,
  FaUserShield,
  FaSignOutAlt,
  FaUserLock,
  FaIdCard,
  FaCreditCard,
  FaExchangeAlt,
  FaChevronDown,
} from "react-icons/fa";

// Order and icons are now matched to the questions below
const faqs = [
  {
    question: "What is copy trading?",
    answer:
      "Copy trading is an automated trading method where you can automatically copy positions opened and managed by another selected trader. When they trade, your account will automatically copy their actions proportionally to your investment.",
    icon: FaQuestionCircle,
  },
  {
    question: "How much is the performance fee?",
    answer:
      "We charge a 30% performance fee on profits generated through our copy trading service. This fee structure ensures our interests are aligned with yours - we only earn when you earn.",
    icon: FaDollarSign,
  },
  {
    question: "What is the minimum investment?",
    answer:
      "$100 is the minimum investment required to start copy trading with us.",
    icon: FaPiggyBank,
  },
  {
    question: "How do you manage risk?",
    answer:
      "We open small lot sizes to ensure that even in the event of a loss, your capital is preserved.",
    icon: FaShieldAlt,
  },
  {
    question: "How often do you trade?",
    answer:
      "Our trading frequency varies based on market conditions and opportunities. We prioritize quality setups over quantity to maintain consistent performance.",
    icon: FaSyncAlt,
  },
  {
    question: "What is your average monthly return?",
    answer:
      "Historically it has been 5%. While past performance doesn't guarantee future results, we aim for consistent monthly returns while prioritizing capital preservation. Detailed performance statistics are available on our Exness profile.",
    icon: FaChartBar,
  },
  {
    question: "Can I withdraw my funds at any time?",
    answer:
      "Yes, you maintain full control of your funds at all times. You can stop copying trades and withdraw your funds whenever you wish. Your initial investment can be withdrawn as a refund using the same payment method, then all future withdrawals can be done using other methods.",
    icon: FaUnlockAlt,
  },
  {
    question: "Are my funds held/stored with you?",
    answer:
      "No, your funds are never held or stored with us. All funds remain in your own Exness account at all times. We only provide the trading strategy for you to copy; we do not have access to your money.",
    icon: FaUserShield,
  },
  {
    question:
      "Do you have the authority to perform withdrawal or deposit operations from my account?",
    answer:
      "No, we do not have any authority or access to perform withdrawals or deposits from your Exness account. Only you have full control over deposits and withdrawals. Our access is limited to trading only within the copy trading strategy.",
    icon: FaUserLock,
  },
  {
    question:
      "What will happen if I decide to stop copying and withdraw my money?",
    answer:
      "You can stop copying the strategy at any time directly from your Exness account. Once you stop copying, you are free to withdraw your funds whenever you wish. There are no penalties or restrictions from our side.",
    icon: FaSignOutAlt,
  },
  {
    question:
      "Can I use another person's bank card to make deposits or withdrawals?",
    answer:
      "No, Exness requires that all deposits and withdrawals are made using payment methods that are in your own name. Using someone else's bank card or payment method is not allowed and may result in issues with your account or transactions.",
    icon: FaIdCard,
  },
  {
    question: "Deposit and Withdrawal Methods",
    answer:
      "Exness offers a wide range of deposit and withdrawal methods, including bank cards (Visa/Mastercard), e-wallets (Skrill, Neteller, Perfect Money, etc.), online banking, and cryptocurrencies. The available options can depend on your country or region. For the most accurate and up-to-date list of methods, please check the 'Deposit' and 'Withdrawal' sections in your Exness account dashboard.",
    icon: FaCreditCard,
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

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
              const Icon = faq.icon || FaQuestionCircle;
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
                    className={`w-full flex items-center md:justify-between gap-4 px-4 sm:px-8 py-8 text-left focus:outline-none rounded-3xl transition ${
                      isOpen
                        ? "bg-[#013024]/90 text-[#a7ec4f]"
                        : "bg-[#013024] text-white"
                    }`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <span className="inline-flex items-center justify-center w-12 h-12 min-w-[3rem] min-h-[3rem] rounded-full bg-[#a7ec4f] text-[#013024] font-bold text-2xl shadow-lg flex-shrink-0">
                        <Icon />
                      </span>
                      <span className="text-lg md:text-2xl font-bold break-words w-full text-left">
                        {faq.question}
                      </span>
                    </div>
                    <span
                      className={`flex items-center justify-center rounded-full transition-transform duration-200 ${
                        isOpen
                          ? "rotate-180 bg-[#a7ec4f] text-[#013024]"
                          : "bg-white/10 text-[#a7ec4f]"
                      } w-10 h-10 ml-2 flex-shrink-0`}
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
