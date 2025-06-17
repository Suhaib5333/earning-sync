import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDesktop,
  FaMobileAlt,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

import copyingDesktop1 from "../../assets/copying_desktop1.png";
import copyingDesktop2 from "../../assets/copying_desktop2.png";
import copyingDesktop3 from "../../assets/copying_desktop3.png";
import copyingDesktop4 from "../../assets/copying_desktop4.png";
import copyingDesktop5 from "../../assets/copying_desktop5.png";
import copyingDesktop6 from "../../assets/copying_desktop6.png";
import copyingDesktop7 from "../../assets/copying_desktop7.png";
import copyingMobile2  from "../../assets/copying_mobile2.png";
import copyingMobile3  from "../../assets/copying_mobile3.png";
import copyingMobile4  from "../../assets/copying_mobile4.png";
import copyingMobile5  from "../../assets/copying_mobile5.png";
import copyingMobile6  from "../../assets/copying_mobile6.png";
import copyingMobile7  from "../../assets/copying_mobile7.png";

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

export default function StepStartCopying({ openStep }) {
  const [accountTab, setAccountTab]   = useState("desktop");
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    setAccountTab(window.innerWidth <= 768 ? "mobile" : "desktop");
  }, []);

  useEffect(() => {
    setCarouselIdx(0);
  }, [accountTab]);

  const images = accountTab === "desktop" ? desktopImages : mobileImages;
  const handlePrev = () =>
    setCarouselIdx(i => (i === 0 ? images.length - 1 : i - 1));
  const handleNext = () =>
    setCarouselIdx(i => (i === images.length - 1 ? 0 : i + 1));

  return (
    <AnimatePresence>
      {openStep === 2 && (
        <motion.div
          key="copying-content"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="px-6 md:px-12 py-6"
        >
          <div className="flex flex-col md:flex-row gap-10 items-start">

            {/* ── Instructions Column ── */}
            <div className="flex-1 max-w-xl">
              <nav className="flex gap-4 mb-6">
                {["desktop","mobile"].map(key => {
                  const Icon = key==="desktop"?FaDesktop:FaMobileAlt;
                  return (
                    <button
                      key={key}
                      onClick={()=>setAccountTab(key)}
                      className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition ${
                        accountTab===key
                          ? "bg-[#a7ec4f] text-[#013024] shadow"
                          : "bg-white text-[#013024] border border-[#a7ec4f]"
                      }`}
                    >
                      <Icon /> {key.charAt(0).toUpperCase()+key.slice(1)}
                    </button>
                  );
                })}
              </nav>

              <h4 className="flex items-center gap-2 text-xl font-bold mb-4 text-[#013024]">
                <FaCheckCircle className="text-[#a7ec4f]" />
                Quick Start
              </h4>

              <ol className="list-decimal list-inside space-y-2 text-gray-800 text-base md:text-lg">
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-[#a7ec4f] rounded-full" />
                  <span>
                    Pick a strategy:{" "}
                    <a
                      href="https://social-trading.exness.com/strategy/110356021/a/ake680s6t2/?platform=mobile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-[#a7ec4f] transition font-semibold"
                    >
                      Classic
                    </a>
                    {" / "}
                    <a
                      href="https://social-trading.exness.com/strategy/110321946/a/ake680s6t2/?platform=mobile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-[#a7ec4f] transition font-semibold"
                    >
                      High Risk
                    </a>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-[#a7ec4f] rounded-full" />
                  <span>
                    Click <span className="font-semibold">Start Copying</span> & sign in
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-[#a7ec4f] rounded-full" />
                  <span>
                    <span className="font-semibold">Create Investment</span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-[#a7ec4f] rounded-full" />
                  <span>
                    <span className="font-semibold">Top up</span> & confirm
                  </span>
                </li>
              </ol>
            </div>

            {/* ── Carousel Column ── */}
            <div className="flex-1 flex flex-col items-center">
              <div
                className={`
                  relative w-full 
                  ${accountTab==="mobile"?"max-w-xs":"max-w-2xl md:max-w-3xl"}
                  rounded-xl overflow-hidden shadow-lg border border-[#a7ec4f]/30 bg-white
                `}
              >
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#013024]/80 text-white rounded-full p-2 hover:bg-[#a7ec4f] hover:text-[#013024] transition"
                  aria-label="Previous"
                >
                  <FaChevronLeft size={20}/>
                </button>

                <img
                  src={images[carouselIdx]}
                  alt={`Screenshot ${carouselIdx+1}`}
                  className="w-full object-contain cursor-zoom-in"
                  style={{maxHeight: accountTab==="mobile"?"320px":"700px"}}
                  onClick={()=>setPreviewOpen(true)}
                />

                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#013024]/80 text-white rounded-full p-2 hover:bg-[#a7ec4f] hover:text-[#013024] transition"
                  aria-label="Next"
                >
                  <FaChevronRight size={20}/>
                </button>

                <div className="flex justify-center gap-1 mt-2 mb-1">
                  {images.map((_,i)=>(
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i===carouselIdx?"bg-[#a7ec4f]":"bg-[#013024]/30"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Fullscreen Preview */}
              {previewOpen && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                  onClick={()=>setPreviewOpen(false)}
                >
                  <div className="relative max-w-5xl w-full">
                    <button
                      onClick={e=>{e.stopPropagation();setPreviewOpen(false)}}
                      className="absolute top-4 right-4 text-white text-2xl bg-black/60 rounded-full p-2 hover:bg-[#a7ec4f] hover:text-[#013024] transition"
                    >
                      <FaTimes/>
                    </button>
                    <img
                      src={images[carouselIdx]}
                      alt="Preview"
                      className="w-auto max-h-[90vh] block mx-auto rounded-lg shadow-2xl"
                      onClick={e=>e.stopPropagation()}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
