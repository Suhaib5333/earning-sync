import React from "react";
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
import { useTranslation } from "react-i18next";






const Home = () => {
  const { t } = useTranslation("home");
  const navigate = useNavigate();

  // Scroll to top and navigate instantly
  const handleNavClick = (to, e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate(to);
  };

  const stats = [
    { number: "25+", label: t("stats.years_of_experience"), icon: FaAward },
    {
      number: "5%", // CHANGED from "8%" to "5%"
      label: t("stats.historical_profit"),
      icon: FaAnchor,
    },
    {
      number: "31%",
      label: t("stats.maximum_drawdown"),
      subLabel:  t("stats.on_earning_sync_classic"),
      icon: FaShieldAlt,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center min-h-[80vh] py-16 relative bg-[#013024]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg text-white">
            {t("hero.title")}
            <br />
            <span className="text-[#a7ec4f]">{t("hero.highlight")}</span>{" "}
            {/* CHANGED from "Secure Returns" to "Better Investing" */}
          </h1>
          <motion.div
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4, duration: 0.6 }}
           className="mx-auto w-fit flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-semibold mt-4 shadow-sm border border-white/20"
>
           <FaShieldAlt className="text-yellow-400 text-base" />
           {t("hero.badge")}
           </motion.div>


          <p className="text-lg md:text-xl text-green-100 mt-6 mb-10 max-w-2xl mx-auto px-6 sm:px-0">
           {t("hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/get-started"
              onClick={(e) => handleNavClick("/get-started", e)}
              className="px-8 py-3 bg-[#a7ec4f] text-[#013024] font-bold rounded-full shadow-lg hover:bg-[#bfff5c] transition-all text-lg flex items-center group"
            >
              {t("hero.cta")}
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
            {t("features.title")}{" "}
            <span className="text-[#a7ec4f]">{t("features.brand")}</span>?
            </h2>
             <p className="text-lg text-gray-600">
             {t("features.subtitle")}
            </p>
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
               {t("features.security.title")}
              </h3>
              <p className="text-gray-700 mb-4">
                {t("features.security.desc")}
              </p>
              <div className="flex gap-2 justify-center">
              {t("features.security.badges", { returnObjects: true }).map((badge, idx) => (
                <span
                  key={idx}
                  className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {badge}
                </span>
              ))}
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
               {t("features.transparency.title")}
              </h3>
              <p className="text-gray-700 mb-4">
                {t("features.transparency.desc")}
              </p>
              <div className="flex gap-2 justify-center">
              {t("features.transparency.badges", { returnObjects: true }).map((badge, idx) => (
                <span
                  key={idx}
                  className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {badge}
                </span>
              ))}
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
                {t("features.community.title")}
              </h3>
              <p className="text-gray-700 mb-4">
                {t("features.community.desc")}
              </p>
              <div className="flex gap-2 justify-center">
                <a
                  href="https://chat.whatsapp.com/L0OdHDeFk96AAjSVbJ87Ii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold underline hover:bg-green-200 transition"
                >
                 {t("features.community.badges.whatsapp")}
                </a>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {t("features.community.badges.support")}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Packages */}
      <section className="py-20 bg-[#f3f8e6]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-[#013024] drop-shadow-lg">
            {t("packages.title")}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
            {t("packages.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Starter */}
          <div
            className="bg-white rounded-2xl border border-[#a7ec4f]/30 shadow-lg p-6 flex flex-col items-center text-center hover:border-[#a7ec4f] transition"
            tabIndex={0}
            onClick={(e) => handleNavClick("/get-started", e)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleNavClick("/get-started", e);
            }}
            style={{ cursor: "pointer" }}
          >
            <span className="bg-[#a7ec4f] text-[#013024] font-bold px-5 py-1 rounded-full mb-4">
              {t("packages.starter.label")}
            </span>
            <div className="font-bold mb-2">{t("packages.common.profitShare")}</div>
            <div className="bg-[#013024]/10 text-[#013024] px-3 py-1 rounded-full font-semibold text-sm mb-4">
              {t("packages.starter.range")}
            </div>
            <ul className="text-gray-700 mb-4 space-y-1 text-left text-sm w-full max-w-xs mx-auto">
              <li className="flex items-center gap-2">
                <FaStar className="text-[#a7ec4f]" /> {t("packages.starter.features.0")}
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight className="text-[#a7ec4f]" /> {t("packages.starter.features.1")}
              </li>
              <li className="flex items-center gap-2">
                <FaShieldAlt className="text-[#a7ec4f]" /> {t("packages.starter.features.2")}
              </li>
            </ul>
            <span className="text-xs text-gray-400">{t("packages.common.note")}</span>
          </div>

          {/* Pro */}
          <div
            className="bg-white rounded-2xl border-2 border-[#a7ec4f] shadow-xl p-6 flex flex-col items-center text-center hover:border-[#013024] transition"
            tabIndex={0}
            onClick={(e) => handleNavClick("/get-started", e)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleNavClick("/get-started", e);
            }}
            style={{ cursor: "pointer" }}
          >
            <span className="bg-[#013024] text-[#a7ec4f] font-bold px-7 py-1 rounded-full mb-4 border-2 border-[#a7ec4f]">
              {t("packages.pro.label")}
            </span>
            <div className="text-4xl font-extrabold text-[#013024] mb-1">20%</div>
            <div className="font-bold mb-2">{t("packages.common.profitShare")}</div>
            <div className="bg-[#013024]/10 text-[#013024] px-3 py-1 rounded-full font-semibold text-sm mb-4">
              {t("packages.pro.range")}
            </div>
            <ul className="text-gray-700 mb-4 space-y-1 text-left text-sm w-full max-w-xs mx-auto">
              <li className="flex items-center gap-2">
                <FaStar className="text-[#a7ec4f]" /> {t("packages.pro.features.0")}
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight className="text-[#a7ec4f]" /> {t("packages.pro.features.1")}
              </li>
              <li className="flex items-center gap-2">
                <FaShieldAlt className="text-[#a7ec4f]" /> {t("packages.pro.features.2")}
              </li>
            </ul>
            <span className="text-xs text-gray-400">{t("packages.common.note")}</span>
          </div>

          {/* Elite */}
          <div
            className="bg-white rounded-2xl border border-[#a7ec4f]/30 shadow-lg p-6 flex flex-col items-center text-center hover:border-[#a7ec4f] transition"
            tabIndex={0}
            onClick={(e) => handleNavClick("/get-started", e)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleNavClick("/get-started", e);
            }}
            style={{ cursor: "pointer" }}
          >
            <span className="bg-[#a7ec4f] text-[#013024] font-bold px-5 py-1 rounded-full mb-4">
              {t("packages.elite.label")}
            </span>
            <div className="text-4xl font-extrabold text-[#013024] mb-1">15%</div>
            <div className="font-bold mb-2">{t("packages.common.profitShare")}</div>
            <div className="bg-[#013024]/10 text-[#013024] px-3 py-1 rounded-full font-semibold text-sm mb-4">
              {t("packages.elite.range")}
            </div>
            <ul className="text-gray-700 mb-4 space-y-1 text-left text-sm w-full max-w-xs mx-auto">
              <li className="flex items-center gap-2">
                <FaStar className="text-[#a7ec4f]" /> {t("packages.elite.features.0")}
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight className="text-[#a7ec4f]" /> {t("packages.elite.features.1")}
              </li>
              <li className="flex items-center gap-2">
                <FaShieldAlt className="text-[#a7ec4f]" /> {t("packages.elite.features.2")}
              </li>
            </ul>
            <span className="text-xs text-gray-400">{t("packages.common.note")}</span>
          </div>

        </div>
      </div>
    </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#013024] text-white text-center relative">
        <div className="max-w-2xl mx-auto px-4">
         <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {t("cta.title")}
            <span className="text-[#a7ec4f]">{t("cta.highlight")}</span>
          </h2>
          <p className="text-lg text-green-100 mb-8">
           {t("cta.subtitle")}
          </p>
          <div className="flex justify-center">
            <Link
              to="/get-started"
              onClick={(e) => handleNavClick("/get-started", e)}
              className="px-8 py-3 bg-[#a7ec4f] text-[#013024] font-bold rounded-full shadow-lg hover:bg-[#bfff5c] transition-all text-lg flex items-center group"
            >
             {t("cta.button")}
              <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
          <p className="mt-6 text-green-200 text-sm">
           {t("cta.note")}
          </p>
        </div>
      </section>
    </div>
  );
};
export default Home;
