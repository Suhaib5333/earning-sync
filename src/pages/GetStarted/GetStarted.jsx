import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import StepCreateAccount from "./StepCreateAccount";
import StepStartCopying from "./StepStartCopying";
import StepJoinCommunity from "./StepJoinCommunity";

const fixArabicFullStop = (html) => {
  // Only for Arabic: move Arabic full stop (U+002E) to the left of the sentence if it is at the end
  // and not inside a tag.
  if (!html) return html;
  // Replace any Arabic sentence-ending . (not inside tags) with <span dir="ltr">.</span>
  // This ensures the dot is visually left for RTL text.
  return html.replace(
    /([\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\u0621-\u064A])\.(?![^<]*>)/g,
    '$1<span dir="ltr">.</span>'
  );
};

const GetStarted = () => {
  const [openStep, setOpenStep] = useState(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const heroTitle = t("getStarted.heroTitle");
  const heroDesc = t("getStarted.heroDesc");

  return (
    <div className={`min-h-screen relative ${isRTL ? "rtl" : ""}`}>
      {/* Hero Section */}
      <section className="bg-[#013024] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1
              className="text-4xl md:text-6xl font-bold mb-6"
              dangerouslySetInnerHTML={{
                __html: isRTL ? fixArabicFullStop(heroTitle) : heroTitle,
              }}
            />
            <p
              className="text-xl mb-8 text-gray-300"
              dangerouslySetInnerHTML={{
                __html: isRTL ? fixArabicFullStop(heroDesc) : heroDesc,
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <StepCreateAccount
              openStep={openStep}
              setOpenStep={setOpenStep}
              isRTL={isRTL}
            />
            <StepStartCopying
              openStep={openStep}
              setOpenStep={setOpenStep}
              isRTL={isRTL}
            />
            <StepJoinCommunity
              openStep={openStep}
              setOpenStep={setOpenStep}
              isRTL={isRTL}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
