import React from "react";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaChartBar,
  FaUserTie,
  FaMoneyCheckAlt,
  FaChartLine,
  FaUserLock,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const About = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const getPath = (path) =>
    isArabic ? `/ar${path === "/" ? "" : path}` : path;
  const handleNavClick = (to, e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate(to);
  };

  return (
    <div className="min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="bg-[#013024] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 text-center"
              dangerouslySetInnerHTML={{ __html: t("about.heroTitle") }}
            />
            <p className="text-xl mb-8 text-gray-300">{t("about.heroDesc")}</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#013024] mb-4 text-center">
              {t("about.missionTitle")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("about.missionDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 bg-gradient-to-br from-gray-50 to-[#eaffd0]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#013024] mb-6 text-center">
            {t("about.whyChooseTitle")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Trust (top left) */}
            <motion.div
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 #a7ec4f33" }}
              className="p-8 rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#f7fff6] border border-[#a7ec4f]/30 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#a7ec4f]"
            >
              <div className="bg-[#a7ec4f]/20 rounded-full p-5 mb-5 shadow-inner">
                <FaHandshake className="w-12 h-12 text-[#013024]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#013024]">
                {t("about.trustTitle")}
              </h3>
              <p className="text-gray-700">{t("about.trustDesc")}</p>
            </motion.div>
            {/* Transparent Fees (top right, restored) */}
            <motion.div
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 #a7ec4f33" }}
              className="p-8 rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#f7fff6] border border-[#a7ec4f]/30 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#a7ec4f]"
            >
              <div className="bg-[#a7ec4f]/20 rounded-full p-5 mb-5 shadow-inner">
                <FaMoneyCheckAlt className="w-12 h-12 text-[#013024]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#013024]">
                {t("about.feesTitle")}
              </h3>
              <p className="text-gray-700">{t("about.feesDesc")}</p>
            </motion.div>
            {/* Performance (bottom left) */}
            <motion.div
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 #a7ec4f33" }}
              className="p-8 rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#f7fff6] border border-[#a7ec4f]/30 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#a7ec4f]"
            >
              <div className="bg-[#a7ec4f]/20 rounded-full p-5 mb-5 shadow-inner">
                <FaChartBar className="w-12 h-12 text-[#013024]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#013024]">
                {t("about.performanceTitle")}
              </h3>
              <p className="text-gray-700">{t("about.performanceDesc")}</p>
            </motion.div>
            {/* Security (bottom right) */}
            <motion.div
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 #a7ec4f33" }}
              className="p-8 rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#f7fff6] border border-[#a7ec4f]/30 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#a7ec4f]"
            >
              <div className="bg-[#a7ec4f]/20 rounded-full p-5 mb-5 shadow-inner">
                <FaUserLock className="w-12 h-12 text-[#013024]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#013024]">
                {t("about.securityTitle")}
              </h3>
              <p className="text-gray-700">{t("about.securityDesc")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#013024] text-white text-center relative mt-10">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">
            {t("about.ctaTitle")}
          </h2>
          <p className="text-lg text-green-100 mb-8">{t("about.ctaDesc")}</p>
          <div className="flex justify-center">
            <Link
              to={getPath("/get-started")}
              onClick={(e) => handleNavClick(getPath("/get-started"), e)}
              className="px-8 py-3 bg-[#a7ec4f] text-[#013024] font-bold rounded-full shadow-lg hover:bg-[#bfff5c] transition-all text-lg flex items-center group"
            >
              {t("about.ctaButton")}
              <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
          <p className="mt-6 text-green-200 text-sm">{t("about.ctaNote")}</p>
        </div>
      </section>
    </div>
  );
};

export default About;
