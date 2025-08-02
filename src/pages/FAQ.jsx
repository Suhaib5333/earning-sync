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
import { useTranslation } from "react-i18next";

const iconMap = [
  FaQuestionCircle,
  FaDollarSign,
  FaPiggyBank,
  FaShieldAlt,
  FaSyncAlt,
  FaChartBar,
  FaUnlockAlt,
  FaUserShield,
  FaUserLock,
  FaSignOutAlt,
  FaIdCard,
  FaCreditCard,
  FaExchangeAlt,
];

const FAQ = () => {
  const { t, i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  // Get questions/answers from translation
  const faqs = t("faqPage.faqs", { returnObjects: true });

  return (
    <div
      className="min-h-screen relative"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
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
              <span>{t("faqPage.title1")}</span>{" "}
              <span className="text-[#a7ec4f]">{t("faqPage.title2")}</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">{t("faqPage.desc")}</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const Icon = iconMap[index] || FaQuestionCircle;
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
            {t("faqPage.ctaTitle")}
          </h2>
          <p className="text-lg text-green-100 mb-8">{t("faqPage.ctaDesc")}</p>
          <div className="flex justify-center">
            <a
              href={i18n.language === "ar" ? "/ar/contact" : "/contact"}
              className="px-8 py-3 bg-[#a7ec4f] text-[#013024] font-bold rounded-full shadow-lg hover:bg-[#bfff5c] transition-all text-lg flex items-center group"
            >
              {t("faqPage.ctaButton")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
