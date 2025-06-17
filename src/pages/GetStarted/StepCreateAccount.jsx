import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const tabs = [
  {
    key: "desktop",
    label: "Desktop",
    icon: FaDesktop,
    img: desktopImg,
  },
  {
    key: "mobile",
    label: "Mobile",
    icon: FaMobileAlt,
    img: mobileImg,
  },
];

const instructions = [
  "Go to the Exness website",
  "Register with your country, email, and password",
  "Verify your ID & address",
];

export default function StepCreateAccount({ openStep }) {
  const [activeTab, setActiveTab] = useState("desktop");

  useEffect(() => {
    setActiveTab(window.innerWidth <= 768 ? "mobile" : "desktop");
  }, []);

  if (openStep !== 1) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="step1-content"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="px-6 md:px-12 py-10"
      >
        <div className="flex flex-col md:flex-row gap-10 items-start justify-center">
          {/* ── Instructions Column ── */}
          <div className="flex-1 max-w-xl">
            <nav className="flex gap-4 mb-6">
              {tabs.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition ${
                    activeTab === key
                      ? "bg-[#a7ec4f] text-[#013024] shadow"
                      : "bg-white text-[#013024] border border-[#a7ec4f]"
                  }`}
                >
                  <Icon />
                  {label}
                </button>
              ))}
            </nav>

            <h4 className="flex items-center gap-2 text-xl font-bold mb-4 text-[#013024]">
              <FaCheckCircle className="text-[#a7ec4f]" />
              Quick Start
            </h4>

            <ol className="list-decimal list-inside space-y-2 text-gray-800 text-base md:text-lg">
              {instructions.map((step, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-[#a7ec4f] rounded-full" />
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <p className="mt-4 italic text-[#013024] text-sm md:text-base">
              <strong>Note:</strong>{" "}
              <span className="font-semibold text-[#a7ec4f]">
                Do not fund your account at this step.
              </span>
            </p>
          </div>

          {/* ── Screenshot Column ── */}
          <div className="flex-1 flex flex-col items-center gap-4">
            <div className="w-full flex flex-col items-center">
              <div className="flex gap-6 justify-center w-full">
                {tabs.map(({ key, img, label }) => (
                  <div
                    key={key}
                    className={`group flex flex-col items-center cursor-pointer transition-transform duration-200 ${
                      activeTab === key
                        ? "scale-105"
                        : "opacity-60 hover:opacity-90"
                    }`}
                    onClick={() => setActiveTab(key)}
                    title={label}
                    style={{ maxWidth: 220, minWidth: 120 }}
                  >
                    <div
                      className={`rounded-2xl overflow-hidden shadow-xl border-4 transition-all duration-200 ${
                        activeTab === key
                          ? "border-[#a7ec4f]"
                          : "border-gray-200"
                      } bg-white`}
                      style={{
                        aspectRatio: "9/16",
                        width: "100%",
                        maxWidth: 180,
                        minHeight: 260,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={img}
                        alt={`${label} screenshot`}
                        className="w-full h-full object-contain bg-white"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div
                      className={`mt-2 text-center font-semibold text-base ${
                        activeTab === key
                          ? "text-[#013024]"
                          : "text-gray-400"
                      }`}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
