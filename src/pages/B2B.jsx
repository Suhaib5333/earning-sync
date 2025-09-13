import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const B2B = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="w-full bg-[#013024] text-white py-16 md:py-20 mb-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 text-center"
            dangerouslySetInnerHTML={{ __html: t("b2b.heroTitle") }}
          />
          <p
            className={`text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-medium ${
              isRTL ? "text-right" : "text-center"
            }`}
          >
            {t("b2b.heroDesc")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        {/* Program Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#013024] mb-8 text-center">
            {t("b2b.programTitle")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Setup Process */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-[#013024] mb-4">
                {t("b2b.program.setup.title")}
              </h3>
              <p className="text-gray-600 mb-4">
                {t("b2b.program.setup.desc")}
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {t("b2b.program.setup.features", {
                  returnObjects: true,
                }).map((feature, index) => (
                  <li key={index} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-[#013024] mb-4">
                {t("b2b.program.benefits.title")}
              </h3>
              <p className="text-gray-600 mb-4">
                {t("b2b.program.benefits.desc")}
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {t("b2b.program.benefits.features", {
                  returnObjects: true,
                }).map((feature, index) => (
                  <li key={index} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-[#013024] mb-4">
                {t("b2b.program.support.title")}
              </h3>
              <p className="text-gray-600 mb-4">
                {t("b2b.program.support.desc")}
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {t("b2b.program.support.features", {
                  returnObjects: true,
                }).map((feature, index) => (
                  <li key={index} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Cards Section */}
        <section className="bg-[#013024] rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-4 text-center">{t("b2b.contactTitle")}</h2>
          <p className="text-xl mb-8 text-center">{t("b2b.contactDesc")}</p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Email Card */}
            <motion.a
              href="mailto:info@earningsync.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="bg-white/20 rounded-full p-4 mb-4">
                <FaEnvelope className="w-8 h-8 text-[#a7ec4f]" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t("b2b.emailDesc")}</h3>
              <span className="text-[#a7ec4f] group-hover:underline">
                info@earningsync.com
              </span>
            </motion.a>

            {/* WhatsApp Card */}
            <motion.a
              href="https://wa.me/97366386602"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="bg-white/20 rounded-full p-4 mb-4">
                <FaWhatsapp className="w-8 h-8 text-[#a7ec4f]" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t("b2b.whatsappDesc")}</h3>
              <span className="text-[#a7ec4f] group-hover:underline">
                +973 6638 6602
              </span>
            </motion.a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default B2B;
