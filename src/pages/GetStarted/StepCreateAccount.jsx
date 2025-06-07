import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaDesktop,
  FaMobileAlt,
  FaChevronDown,
  FaCheckCircle,
} from "react-icons/fa";

const screenshots = {
  desktop: "/src/assets/logo.png",
  mobile: "/src/assets/logo.png",
};

const StepCreateAccount = ({ openStep, setOpenStep }) => {
  const [accountTab, setAccountTab] = useState("desktop");

  return (
    <motion.div
      className={`rounded-2xl shadow-lg transition-all duration-300 ${
        openStep === 1
          ? "bg-gradient-to-br from-[#eaffd0] to-[#f7fff6]"
          : "bg-[#013024]"
      }`}
      initial={false}
      animate={{
        scale: openStep === 1 ? 1.01 : 1,
        boxShadow:
          openStep === 1
            ? "0 8px 32px 0 rgba(167,236,79,0.15)"
            : "0 2px 8px 0 rgba(1,48,36,0.08)",
      }}
    >
      <button
        className={`w-full flex items-center justify-between px-8 py-8 text-left focus:outline-none rounded-2xl transition ${
          openStep === 1
            ? "bg-[#013024]/90 text-[#a7ec4f]"
            : "bg-[#013024] text-white"
        }`}
        onClick={() => setOpenStep(openStep === 1 ? null : 1)}
      >
        <div className="flex items-center gap-4">
          <FaUserPlus className="w-8 h-8" />
          <span className="text-2xl md:text-3xl font-bold">
            1. Create an Account
          </span>
        </div>
        <FaChevronDown
          className={`w-6 h-6 transition-transform duration-200 ${
            openStep === 1 ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: openStep === 1 ? "auto" : 0,
          opacity: openStep === 1 ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {openStep === 1 && (
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
              {accountTab === "desktop" && (
                <div>
                  <h4 className="text-xl font-bold mb-4 text-[#013024] flex items-center gap-2">
                    <FaCheckCircle className="text-[#a7ec4f]" /> Desktop
                    Instructions
                  </h4>
                  <ol className="list-decimal list-inside text-gray-800 space-y-3 text-lg">
                    <li>
                      Go to the{" "}
                      <a
                        href="https://www.exness.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#a7ec4f] underline"
                      >
                        Exness website
                      </a>
                      .
                    </li>
                    <li>
                      Click <b>Open Account</b> and fill in your email and
                      password.
                    </li>
                    <li>Complete the verification process as prompted.</li>
                    <li>Fund your account to get started.</li>
                  </ol>
                </div>
              )}
              {accountTab === "mobile" && (
                <div>
                  <h4 className="text-xl font-bold mb-4 text-[#013024] flex items-center gap-2">
                    <FaCheckCircle className="text-[#a7ec4f]" /> Mobile
                    Instructions
                  </h4>
                  <ol className="list-decimal list-inside text-gray-800 space-y-3 text-lg">
                    <li>
                      Download the{" "}
                      <a
                        href="https://play.google.com/store/apps/details?id=com.exness.android.meta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#a7ec4f] underline"
                      >
                        Exness app for Android
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://apps.apple.com/app/exness-trade/id1438536237"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#a7ec4f] underline"
                      >
                        iOS
                      </a>
                      .
                    </li>
                    <li>
                      Open the app and tap <b>Sign Up</b>.
                    </li>
                    <li>
                      Enter your email and password, then follow the prompts to
                      verify your account.
                    </li>
                    <li>Fund your account to get started.</li>
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
                      ? "Exness Desktop Screenshot"
                      : "Exness Mobile Screenshot"
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

export default StepCreateAccount;
