import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaCheckCircle, FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import qrImage from "../../assets/whatsappqr.jpg";

const whatsappLink = "https://chat.whatsapp.com/L0OdHDeFk96AAjSVbJ87Ii";

const StepJoinCommunity = ({ openStep, setOpenStep }) => {
  const { t, i18n } = useTranslation();
  return (
    <motion.div
      className={`rounded-2xl shadow-lg transition-all duration-300 ${
        openStep === 3
          ? "bg-gradient-to-br from-[#eaffd0] to-[#f7fff6]"
          : "bg-[#013024]"
      }`}
      initial={false}
      animate={{
        scale: openStep === 3 ? 1.01 : 1,
        boxShadow:
          openStep === 3
            ? "0 8px 32px 0 rgba(167,236,79,0.15)"
            : "0 2px 8px 0 rgba(1,48,36,0.08)",
      }}
      dir={i18n.dir()}
    >
      <button
        className={`w-full flex items-center justify-between px-8 py-8 text-left focus:outline-none rounded-2xl transition ${
          openStep === 3
            ? "bg-[#013024]/90 text-[#a7ec4f]"
            : "bg-[#013024] text-white"
        }`}
        onClick={() => setOpenStep(openStep === 3 ? null : 3)}
      >
        <div className="flex items-center gap-4">
          <FaUsers className="w-8 h-8" />
          <span
            className="text-2xl md:text-3xl font-bold"
            dangerouslySetInnerHTML={{
              __html: t("getStarted.steps.joinCommunityTitle"),
            }}
          />
        </div>
        <FaChevronDown
          className={`w-6 h-6 transition-transform duration-200 ${
            openStep === 3 ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: openStep === 3 ? "auto" : 0,
          opacity: openStep === 3 ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {openStep === 3 && (
          <div
            className={`
              flex flex-col md:flex-row gap-10 px-6 md:px-12 py-10 items-center justify-center min-h-[40vh]
              ${
                typeof window !== "undefined" && window.innerWidth <= 768
                  ? "text-center"
                  : ""
              }
            `}
          >
            {/* Instructions */}
            <div className="flex-1 max-w-xl flex flex-col items-center md:items-start">
              <h4 className="text-xl font-bold mb-4 text-[#013024] flex items-center gap-2">
                <FaCheckCircle className="text-[#a7ec4f]" />
                <span
                  dangerouslySetInnerHTML={{
                    __html: t("getStarted.steps.joinCommunityTitle"),
                  }}
                />
              </h4>
              <div
                className="text-gray-800 text-lg mb-6"
                dangerouslySetInnerHTML={{
                  __html: t("getStarted.steps.joinCommunityDesc"),
                }}
              />
              <div className="mt-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#25D366] text-white font-bold px-6 py-3 rounded-full shadow hover:bg-[#128C7E] transition text-lg"
                >
                  {t("getStarted.steps.joinCommunityButton")}
                </a>
              </div>
            </div>
            {/* QR Code */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-xs md:max-w-sm rounded-xl overflow-hidden shadow-lg border border-[#a7ec4f]/30 bg-white flex flex-col items-center">
                <img
                  src={qrImage}
                  alt="WhatsApp Community QR Code"
                  className="w-full h-auto object-contain p-4"
                  style={{ background: "#f8fafc" }}
                />
                <span className="text-sm text-[#013024] mt-2 mb-4 px-4 text-center block">
                  {t("getStarted.steps.joinCommunityScan")}
                </span>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default StepJoinCommunity;
