import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaArrowRight,
  FaStar,
  FaTrophy,
  FaAnchor,
  FaAward,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Scroll to top and navigate instantly
  const handleNavClick = (to, e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate(to);
  };

  const stats = [
    { number: "25+", label: t("home.stats.yearsExperience"), icon: FaAward },
    {
      number: "5%",
      label: t("home.stats.historicalProfit"),
      icon: FaAnchor,
    },
    {
      number: "31%",
      label: t("home.stats.maxDrawdown"),
      subLabel: t("home.stats.onClassic"),
      icon: FaShieldAlt,
    },
  ];

  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <div className="min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center min-h-[80vh] py-16 relative bg-[#013024]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg text-white"
            dangerouslySetInnerHTML={{ __html: t("home.heroTitle") }}
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto w-fit flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-semibold mt-4 shadow-sm border border-white/20"
          >
            <FaShieldAlt className="text-yellow-400 text-base" />
            <span
              dangerouslySetInnerHTML={{ __html: t("home.heroSubtitle") }}
            />
          </motion.div>
          <p
            className="text-lg md:text-xl text-green-100 mt-6 mb-10 max-w-2xl mx-auto px-6 sm:px-0"
            dangerouslySetInnerHTML={{ __html: t("home.heroDescription") }}
          />
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to={
                (location.pathname.startsWith("/ar") ? "/ar" : "") +
                "/get-started"
              }
              className="px-8 py-3 bg-[#a7ec4f] text-[#013024] font-bold rounded-full shadow-lg hover:bg-[#bfff5c] transition-all text-lg flex items-center group"
            >
              {t("home.getStarted")}
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 8px 32px 0 #a7ec4f33",
                }}
                className="p-8 rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#f7fff6] border border-[#a7ec4f]/30 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#a7ec4f]"
              >
                <div className="bg-[#a7ec4f]/20 rounded-full p-5 mb-5 shadow-inner">
                  <stat.icon className="w-12 h-12 text-[#013024]" />
                </div>
                <div className="text-3xl font-bold text-[#013024] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium text-center">
                  {stat.label}
                  {stat.subLabel && (
                    <div className="text-xs italic text-gray-400 mt-1">
                      {stat.subLabel}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#013024]">
              {t("home.whyChoose")}
            </h2>
            <p className="text-lg text-gray-600">{t("home.whyChooseDesc")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Security First */}
            <motion.div
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 #a7ec4f33" }}
              className="p-8 rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#f7fff6] border border-[#a7ec4f]/30 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#a7ec4f]"
            >
              <div className="bg-[#a7ec4f]/20 rounded-full p-5 mb-5 shadow-inner">
                <FaShieldAlt className="w-12 h-12 text-[#013024]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#013024]">
                {t("home.features.securityTitle")}
              </h3>
              <p className="text-gray-700 mb-4">
                {t("home.features.securityDesc")}
              </p>
              <div className="flex gap-2 justify-center">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {t("home.features.riskManagement")}
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {t("home.features.secureCustody")}
                </span>
              </div>
            </motion.div>
            {/* Transparency & Integrity */}
            <motion.div
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 #a7ec4f33" }}
              className="p-8 rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#f7fff6] border border-[#a7ec4f]/30 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#a7ec4f]"
            >
              <div className="bg-[#a7ec4f]/20 rounded-full p-5 mb-5 shadow-inner">
                <FaChartLine className="w-12 h-12 text-[#013024]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#013024]">
                {t("home.features.transparencyTitle")}
              </h3>
              <p className="text-gray-700 mb-4">
                {t("home.features.transparencyDesc")}
              </p>
              <div className="flex gap-2 justify-center">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {t("home.features.honestReporting")}
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {t("home.features.sustainableReturns")}
                </span>
              </div>
            </motion.div>
            {/* Community & Support */}
            <motion.div
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 #a7ec4f33" }}
              className="p-8 rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#f7fff6] border border-[#a7ec4f]/30 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#a7ec4f]"
            >
              <div className="bg-[#a7ec4f]/20 rounded-full p-5 mb-5 shadow-inner">
                <FaUsers className="w-12 h-12 text-[#013024]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#013024]">
                {t("home.features.communityTitle")}
              </h3>
              <p className="text-gray-700 mb-4">
                {t("home.features.communityDesc")}
              </p>
              <div className="flex gap-2 justify-center">
                <a
                  href="https://chat.whatsapp.com/L0OdHDeFk96AAjSVbJ87Ii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold underline hover:bg-green-200 transition"
                >
                  {t("home.features.whatsappGroup")}
                </a>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {t("home.features.directSupport")}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-[#f3f8e6]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-[#013024] drop-shadow-lg">
              {t("home.packagesTitle")}
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
              {t("home.packagesDesc")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Starter */}
            <div
              className="bg-white rounded-2xl border border-[#a7ec4f]/30 shadow-lg p-6 flex flex-col items-center text-center hover:border-[#a7ec4f] transition"
              tabIndex={0}
              onClick={(e) => handleNavClick("/get-started", e)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  handleNavClick("/get-started", e);
              }}
              style={{ cursor: "pointer" }}
            >
              <span className="bg-[#a7ec4f] text-[#013024] font-bold px-5 py-1 rounded-full mb-4">
                {t("home.starter")}
              </span>
              <div className="text-4xl font-extrabold text-[#013024] mb-1">
                {t("home.starterPercent")}
              </div>
              <div className="font-bold mb-2">{t("home.profitShare")}</div>
              <div className="bg-[#013024]/10 text-[#013024] px-3 py-1 rounded-full font-semibold text-sm mb-4">
                {t("home.rangeStarter")}
              </div>
              <ul className="text-gray-700 mb-4 space-y-1 text-left text-sm w-full max-w-xs mx-auto">
                <li className="flex items-center gap-2">
                  <FaStar className="text-[#a7ec4f]" />{" "}
                  {t("home.autoDeduction")}
                </li>
                <li className="flex items-center gap-2">
                  <FaArrowRight className="text-[#a7ec4f]" />{" "}
                  {t("home.fullControl")}
                </li>
                <li className="flex items-center gap-2">
                  <FaShieldAlt className="text-[#a7ec4f]" />{" "}
                  {t("home.communitySupport")}
                </li>
              </ul>
              <span className="text-xs text-gray-400">
                {t("home.noHiddenFees")}
              </span>
            </div>
            {/* Pro */}
            <div
              className="bg-white rounded-2xl border-2 border-[#a7ec4f] shadow-xl p-6 flex flex-col items-center text-center hover:border-[#013024] transition"
              tabIndex={0}
              onClick={(e) => handleNavClick("/get-started", e)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  handleNavClick("/get-started", e);
              }}
              style={{ cursor: "pointer" }}
            >
              <span className="bg-[#013024] text-[#a7ec4f] font-bold px-7 py-1 rounded-full mb-4 border-2 border-[#a7ec4f]">
                {t("home.pro")}
              </span>
              <div className="text-4xl font-extrabold text-[#013024] mb-1">
                {t("home.proPercent")}
              </div>
              <div className="font-bold mb-2">{t("home.profitShare")}</div>
              <div className="bg-[#013024]/10 text-[#013024] px-3 py-1 rounded-full font-semibold text-sm mb-4">
                {t("home.rangePro")}
              </div>
              <ul className="text-gray-700 mb-4 space-y-1 text-left text-sm w-full max-w-xs mx-auto">
                <li className="flex items-center gap-2">
                  <FaStar className="text-[#a7ec4f]" />{" "}
                  {t("home.autoDeduction")}
                </li>
                <li className="flex items-center gap-2">
                  <FaArrowRight className="text-[#a7ec4f]" />{" "}
                  {t("home.lowerFee")}
                </li>
                <li className="flex items-center gap-2">
                  <FaShieldAlt className="text-[#a7ec4f]" />{" "}
                  {t("home.prioritySupport")}
                </li>
              </ul>
              <span className="text-xs text-gray-400">
                {t("home.noHiddenFees")}
              </span>
            </div>
            {/* Elite */}
            <div
              className="bg-white rounded-2xl border border-[#a7ec4f]/30 shadow-lg p-6 flex flex-col items-center text-center hover:border-[#a7ec4f] transition"
              tabIndex={0}
              onClick={(e) => handleNavClick("/get-started", e)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  handleNavClick("/get-started", e);
              }}
              style={{ cursor: "pointer" }}
            >
              <span className="bg-[#a7ec4f] text-[#013024] font-bold px-5 py-1 rounded-full mb-4">
                {t("home.elite")}
              </span>
              <div className="text-4xl font-extrabold text-[#013024] mb-1">
                {t("home.elitePercent")}
              </div>
              <div className="font-bold mb-2">{t("home.profitShare")}</div>
              <div className="bg-[#013024]/10 text-[#013024] px-3 py-1 rounded-full font-semibold text-sm mb-4">
                {t("home.rangeElite")}
              </div>
              <ul className="text-gray-700 mb-4 space-y-1 text-left text-sm w-full max-w-xs mx-auto">
                <li className="flex items-center gap-2">
                  <FaStar className="text-[#a7ec4f]" />{" "}
                  {t("home.autoDeduction")}
                </li>
                <li className="flex items-center gap-2">
                  <FaArrowRight className="text-[#a7ec4f]" />{" "}
                  {t("home.bestValue")}
                </li>
                <li className="flex items-center gap-2">
                  <FaShieldAlt className="text-[#a7ec4f]" />{" "}
                  {t("home.dedicatedManager")}
                </li>
              </ul>
              <span className="text-xs text-gray-400">
                {t("home.noHiddenFees")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#013024] text-white text-center relative">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {t("home.ctaTitle")}
          </h2>
          <p className="text-lg text-green-100 mb-8">{t("home.ctaDesc")}</p>
          <div className="flex justify-center">
            <Link
              to={
                (location.pathname.startsWith("/ar") ? "/ar" : "") +
                "/get-started"
              }
              className="px-8 py-3 bg-[#a7ec4f] text-[#013024] font-bold rounded-full shadow-lg hover:bg-[#bfff5c] transition-all text-lg flex items-center group"
            >
              {t("home.getStarted")}
              <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
          <p className="mt-6 text-green-200 text-sm">
            {t("home.startWith100")}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
