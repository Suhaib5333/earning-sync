import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaDesktop,
  FaMobileAlt,
  FaChevronDown,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

// Use import so Vite/CRA/Next.js will bundle the images correctly
import copyingDesktop1 from "../../assets/copying_desktop1.png";
import copyingDesktop2 from "../../assets/copying_desktop2.png";
import copyingDesktop3 from "../../assets/copying_desktop3.png";
import copyingDesktop4 from "../../assets/copying_desktop4.png";
import copyingDesktop5 from "../../assets/copying_desktop5.png";
import copyingDesktop6 from "../../assets/copying_desktop6.png";
import copyingDesktop7 from "../../assets/copying_desktop7.png";
import copyingMobile2 from "../../assets/copying_mobile2.png";
import copyingMobile3 from "../../assets/copying_mobile3.png";
import copyingMobile4 from "../../assets/copying_mobile4.png";
import copyingMobile5 from "../../assets/copying_mobile5.png";
import copyingMobile6 from "../../assets/copying_mobile6.png";
import copyingMobile7 from "../../assets/copying_mobile7.png";

// Carousel image arrays
const desktopImages = [
  copyingDesktop1,
  copyingDesktop2,
  copyingDesktop3,
  copyingDesktop4,
  copyingDesktop5,
  copyingDesktop6,
  copyingDesktop7,
];
const mobileImages = [
  copyingDesktop1,
  copyingMobile2,
  copyingMobile3,
  copyingMobile4,
  copyingMobile5,
  copyingMobile6,
  copyingMobile7,
];

const StepStartCopying = ({ openStep, setOpenStep }) => {
  const [accountTab, setAccountTab] = useState("desktop");
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);

  // Detect device type on mount and set tab accordingly
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setAccountTab("mobile");
    } else {
      setAccountTab("desktop");
    }
  }, []);

  // Reset carousel index when tab changes
  useEffect(() => {
    setCarouselIdx(0);
  }, [accountTab]);

  const images = accountTab === "desktop" ? desktopImages : mobileImages;

  const handlePrev = () => {
    setCarouselIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

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
                          href="https://social-trading.exness.com/strategy/110356021/a/ake680s6t2/?platform=mobile&af_web_dp=https://social-trading.exness.com/strategy/110356021/&st_strategy=110356021&sharer=investor
"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#013024] underline font-semibold hover:text-[#a7ec4f] transition"
                        >
                          EarningSync Classic
                        </a>
                        <a
                          href="https://social-trading.exness.com/strategy/110321946/a/ake680s6t2/?platform=mobile&af_web_dp=https://social-trading.exness.com/strategy/110321946/&st_strategy=110321946&sharer=investor
"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#013024] underline font-semibold hover:text-[#a7ec4f] transition"
                        >
                          EarningSync High Risk
                        </a>
                      </div>
                    </li>
                    <li>
                      Click <b>start copying</b>.
                    </li>
                    <li>
                      Continue with <b>web version</b>.
                    </li>
                    <li>Sign in.</li>
                    <li>
                      Click <b>create investment</b>.
                    </li>
                    <li>
                      Top up your{" "}
                      <i>
                        <b>Investment</b>
                      </i>{" "}
                      wallet.
                    </li>
                    <li>
                      Click on <b>create investment</b> again.
                    </li>
                    <li>Enter the amount deposited to invest.</li>
                  </ol>
                </div>
              )}
            </div>
            {/* Carousel */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <div
                className={`
                  w-full 
                  ${
                    accountTab === "mobile"
                      ? "max-w-xs"
                      : "max-w-2xl md:max-w-3xl"
                  } 
                  rounded-xl overflow-hidden shadow-lg border border-[#a7ec4f]/30 bg-white relative
                `}
                style={accountTab === "mobile" ? { maxHeight: "350px" } : {}}
              >
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#013024] bg-opacity-80 text-white rounded-full p-3 hover:bg-[#a7ec4f] hover:text-[#013024] transition"
                  aria-label="Previous"
                  type="button"
                  style={{ outline: "none" }}
                >
                  <FaChevronLeft size={28} />
                </button>
                <img
                  src={images[carouselIdx]}
                  alt={`Step screenshot ${carouselIdx + 1}`}
                  className="w-full h-auto object-contain cursor-zoom-in"
                  style={{
                    background: "#f8fafc",
                    maxHeight: accountTab === "mobile" ? "320px" : "700px",
                  }}
                  onClick={() => setPreviewOpen(true)}
                />
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#013024] bg-opacity-80 text-white rounded-full p-3 hover:bg-[#a7ec4f] hover:text-[#013024] transition"
                  aria-label="Next"
                  type="button"
                  style={{ outline: "none" }}
                >
                  <FaChevronRight size={28} />
                </button>
                <div className="flex justify-center gap-1 mt-2 mb-1">
                  {images.map((_, idx) => (
                    <span
                      key={idx}
                      className={`inline-block w-2 h-2 rounded-full ${
                        idx === carouselIdx ? "bg-[#a7ec4f]" : "bg-[#013024]/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
              {/* Fullscreen Preview Popup */}
              {previewOpen && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                  onClick={() => setPreviewOpen(false)}
                >
                  <div className="relative max-w-5xl w-full flex justify-center">
                    <button
                      className="absolute top-4 right-4 text-white text-3xl z-50 bg-black/60 rounded-full p-2 hover:bg-[#a7ec4f] hover:text-[#013024] transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPreviewOpen(false);
                      }}
                      aria-label="Close"
                    >
                      <FaTimes />
                    </button>
                    <img
                      src={images[carouselIdx]}
                      alt="Full Preview"
                      className="max-h-[90vh] w-auto rounded-lg shadow-2xl"
                      style={{ background: "#f8fafc" }}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default StepStartCopying;
