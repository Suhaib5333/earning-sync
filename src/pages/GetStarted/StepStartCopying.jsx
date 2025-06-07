import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaDesktop,
  FaMobileAlt,
  FaChevronDown,
  FaCheckCircle,
} from "react-icons/fa";

const screenshots = {
  desktop: "/src/assets/startcopy_pc.png",
  mobile: "/src/assets/startcopy_mobile.png",
};

const StepStartCopying = ({ openStep, setOpenStep }) => {
  const [accountTab, setAccountTab] = useState("desktop");

  // Detect device type on mount and set tab accordingly
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setAccountTab("mobile");
    } else {
      setAccountTab("desktop");
    }
  }, []);

  return (
    <motion.div
      className={`rounded-2xl shadow-lg transition-all duration-300 ${
        openStep === 2
          ? "bg-gradient-to-br from-[#eaffd0] to-[#f7fff6]"
          : "bg-[#013024]"
      }`}
      initial={false}
      animate={{
        scale: openStep === 2 ? 1.01 : 1,
        boxShadow:
          openStep === 2
            ? "0 8px 32px 0 rgba(167,236,79,0.15)"
            : "0 2px 8px 0 rgba(1,48,36,0.08)",
      }}
    >
      <button
        className={`w-full flex items-center justify-between px-8 py-8 text-left focus:outline-none rounded-2xl transition ${
          openStep === 2
            ? "bg-[#013024]/90 text-[#a7ec4f]"
            : "bg-[#013024] text-white"
        }`}
        onClick={() => setOpenStep(openStep === 2 ? null : 2)}
      >
        <div className="flex items-center gap-4">
          <FaChartLine className="w-8 h-8" />
          <span className="text-2xl md:text-3xl font-bold">
            2. Start Copying
          </span>
        </div>
        <FaChevronDown
          className={`w-6 h-6 transition-transform duration-200 ${
            openStep === 2 ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: openStep === 2 ? "auto" : 0,
          opacity: openStep === 2 ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {openStep === 2 && (
          <div className="flex flex-col md:flex-row gap-10 px-6 md:px-12 py-10 items-center justify-center min-h-[60vh]">
            {/* Instructions & Tabs */}
            <div className="flex-1 max-w-xl">
              <div className="flex gap-4 mb-8">
                <button
                  className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition text-lg ${
                    accountTab === "desktop"
                      ? "bg-[#a7ec4f] text-[#013024] shadow"
                      : "bg-white text-[#013024] border border-[#a7ec4f]"
                  }`}
                  onClick={() => setAccountTab("desktop")}
                  type="button"
                >
                  <FaDesktop /> Desktop
                </button>
                <button
                  className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition text-lg ${
                    accountTab === "mobile"
                      ? "bg-[#a7ec4f] text-[#013024] shadow"
                      : "bg-white text-[#013024] border border-[#a7ec4f]"
                  }`}
                  onClick={() => setAccountTab("mobile")}
                  type="button"
                >
                  <FaMobileAlt /> Mobile
                </button>
              </div>
              {(accountTab === "desktop" || accountTab === "mobile") && (
                <div>
                  <h4 className="text-xl font-bold mb-4 text-[#013024] flex items-center gap-2">
                    <FaCheckCircle className="text-[#a7ec4f]" />{" "}
                    {accountTab === "desktop" ? "Desktop" : "Mobile"}{" "}
                    Instructions
                  </h4>
                  <ol className="list-decimal list-inside text-gray-800 space-y-3 text-lg">
                    <li>
                      Select either:
                      <div className="flex flex-col mt-2 ml-4 gap-1">
                        <a
                          href="https://social-trading.club/strategy/110356021"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#013024] underline font-semibold hover:text-[#a7ec4f] transition"
                        >
                          EarningSync Classic
                        </a>
                        <a
                          href="https://social-trading.club/strategy/110321946"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#013024] underline font-semibold hover:text-[#a7ec4f] transition"
                        >
                          EarningSync High Risk
                        </a>
                      </div>
                    </li>
                    <li>
                      Click <b>start copying</b>
                    </li>
                    <li>
                      Continue with <b>web version</b>
                    </li>
                    <li>Sign in</li>
                    <li>
                      Click <b>create investment</b>
                    </li>
                    <li>
                      Top up your{" "}
                      <i>
                        <b>Investment</b>
                      </i>{" "}
                      wallet
                    </li>
                    <li>
                      Click on <b>create investment</b> again
                    </li>
                    <li>Enter the amount deposited to invest</li>
                  </ol>
                </div>
              )}
            </div>
            {/* Screenshot */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-xs md:max-w-sm rounded-xl overflow-hidden shadow-lg border border-[#a7ec4f]/30 bg-white">
                <img
                  src={
                    accountTab === "desktop"
                      ? screenshots.desktop
                      : screenshots.mobile
                  }
                  alt={
                    accountTab === "desktop"
                      ? "Start Copying Desktop Screenshot"
                      : "Start Copying Mobile Screenshot"
                  }
                  className="w-full h-auto object-contain"
                  style={{ background: "#f8fafc" }}
                />
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default StepStartCopying;
