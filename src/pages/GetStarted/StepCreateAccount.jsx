import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaDesktop,
  FaMobileAlt,
  FaChevronDown,
  FaCheckCircle,
} from "react-icons/fa";

// Use import for images so they work with Vite/CRA/Next.js
import desktopImg from "../../assets/register_pc.png";
import mobileImg from "../../assets/register_mobile.png";

const screenshots = {
  desktop: desktopImg,
  mobile: mobileImg,
};

const StepCreateAccount = ({ openStep, setOpenStep }) => {
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
                        href="https://one.exnesstrack.org/a/ake680s6t2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#013024] underline"
                      >
                        Exness website
                      </a>
                      .
                    </li>
                    <li>
                      Click <b>Register</b> and fill in your country, email, and
                      password.
                    </li>
                    <li>
                      Complete the verification process of both your <b>ID</b>{" "}
                      and <b>Proof of Address</b>.
                    </li>
                  </ol>
                  <div className="mt-3 italic text-[#013024]">
                    Do <b>not</b> fund your account at this step.
                  </div>
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
                      Go to the{" "}
                      <a
                        href="https://one.exnesstrack.org/a/ake680s6t2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#013024] underline"
                      >
                        Exness website
                      </a>
                      .
                    </li>
                    <li>
                      Click <b>Register</b> and fill in your country, email, and
                      password.
                    </li>
                    <li>
                      Complete the verification process of both your <b>ID</b>{" "}
                      and <b>Proof of Address</b>.
                    </li>
                  </ol>
                  <div className="mt-3 italic text-[#013024]">
                    Do <b>not</b> fund your account at this step.
                  </div>
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
