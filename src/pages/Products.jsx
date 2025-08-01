import React, { useState } from "react";
import logo from "../assets/logo_transparent.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  FaChartBar,
  FaShieldAlt,
  FaPiggyBank,
  FaInfoCircle,
  FaBolt,
  FaCoins,
  FaArrowsAltV,
  FaExclamationTriangle,
  FaBell,
  FaMoneyBillWave,
  FaStar,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t, i18n } = useTranslation();
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  // Get products from translation
  const products = t("productsPage.products", { returnObjects: true });

  const handleProductChange = (idx) => {
    setActiveProduct(idx);
    setActiveSlide(0);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveSlide((prev) =>
      prev < products[activeProduct].slides.length - 1 ? prev + 1 : prev
    );
  };

  // Progress bar for carousel
  const progress =
    ((activeSlide + 1) / products[activeProduct].slides.length) * 100;

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#eaffd0] to-[#f7fff6] pb-16"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      {/* Header with Icon */}
      <div className="w-full bg-[#013024] py-16 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#a7ec4f] mb-4 drop-shadow-lg">
          {t("productsPage.title")}
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl px-4 md:px-0 mx-auto">
          {t("productsPage.desc")}
        </p>
      </div>
      {/* Product Selector */}
      <div className="w-full">
        {/* Mobile: side by side, Desktop: original */}
        <div className="flex flex-row gap-4 px-4 mt-8 mb-4 md:hidden w-full max-w-md mx-auto">
          {products.map((product, idx) => (
            <button
              key={product.name}
              className={`flex-1 px-4 py-4 rounded-2xl shadow-lg font-bold text-lg transition-all duration-200 border-2 focus:outline-none flex flex-col items-center gap-2
                ${
                  activeProduct === idx
                    ? "bg-[#013024] text-[#a7ec4f] border-[#a7ec4f] scale-105"
                    : "bg-white text-[#013024] border-transparent hover:border-[#a7ec4f]/40"
                }
              `}
              onClick={() => handleProductChange(idx)}
              style={{
                minWidth: 0,
                maxWidth: "100%",
              }}
            >
              <img src={logo} alt="Logo" className="w-12 h-12 mx-auto mb-2" />
              {product.name}
            </button>
          ))}
        </div>
        <div className="hidden md:flex flex-col md:flex-row gap-8 justify-center items-center mt-10">
          {products.map((product, idx) => (
            <button
              key={product.name}
              className={`px-8 py-4 rounded-2xl shadow-lg font-bold text-2xl transition-all duration-200 border-2 focus:outline-none flex flex-col items-center gap-2 w-72 md:w-96
                ${
                  activeProduct === idx
                    ? "bg-[#013024] text-[#a7ec4f] border-[#a7ec4f] scale-105"
                    : "bg-white text-[#013024] border-transparent hover:border-[#a7ec4f]/40"
                }
              `}
              onClick={() => handleProductChange(idx)}
            >
              <img src={logo} alt="Logo" className="w-16 h-16 mx-auto mb-2" />
              {product.name}
            </button>
          ))}
        </div>
      </div>
      {/* Product Content */}
      <div className="mt-12 flex flex-col items-center justify-center px-6 md:px-0">
        <div
          className="w-full max-w-2xl bg-gradient-to-br from-white via-[#f7fff6] to-[#eaffd0] rounded-3xl shadow-2xl p-0 relative flex flex-col items-center min-h-[340px] border border-[#eaffd0] transition-all duration-300"
          style={{ boxSizing: "border-box" }}
        >
          {/* Progress Bar */}
          <div className="w-full h-2 rounded-t-3xl overflow-hidden bg-[#eaffd0]">
            <div
              className="h-full bg-gradient-to-r from-[#4e7c3a] to-[#013024] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Carousel Controls */}
          <div className="flex items-center justify-between w-full px-4 md:px-6 mt-6 mb-4">
            <button
              onClick={handlePrev}
              disabled={activeSlide === 0}
              className={`p-3 rounded-full border-2 border-[#4e7c3a] text-[#013024] bg-[#eaffd0] shadow-md hover:bg-[#4e7c3a]/10 transition disabled:opacity-30 disabled:cursor-not-allowed`}
              aria-label="Previous"
            >
              {i18n.language === "ar" ? (
                <FaChevronRight className="w-6 h-6" />
              ) : (
                <FaChevronLeft className="w-6 h-6" />
              )}
            </button>
            <span className="text-base font-semibold text-[#013024] tracking-wide bg-[#eaffd0] px-4 py-1 rounded-full shadow">
              {activeSlide + 1} / {products[activeProduct].slides.length}
            </span>
            <button
              onClick={handleNext}
              disabled={
                activeSlide === products[activeProduct].slides.length - 1
              }
              className={`p-3 rounded-full border-2 border-[#4e7c3a] text-[#013024] bg-[#eaffd0] shadow-md hover:bg-[#4e7c3a]/10 transition disabled:opacity-30 disabled:cursor-not-allowed`}
              aria-label="Next"
            >
              {i18n.language === "ar" ? (
                <FaChevronLeft className="w-6 h-6" />
              ) : (
                <FaChevronRight className="w-6 h-6" />
              )}
            </button>
          </div>
          {/* Slide Content */}
          <div className="w-full flex-1 flex items-center justify-center px-4 md:px-8 pb-8 pt-2">
            <div className="w-full animate-fade-in">
              <div className="bg-white/90 rounded-2xl shadow-lg p-6 md:p-8 border border-[#eaffd0] flex flex-col items-center gap-4">
                {/* Slide Icon: choose based on activeProduct and activeSlide */}
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[#4e7c3a]">
                  {activeProduct === 0 && [
                    <FaChartBar
                      key="0-0"
                      size={56}
                      color="#a7ec4f"
                      style={{
                        display: activeSlide === 0 ? "block" : "none",
                        filter:
                          "drop-shadow(0 0 4px #000) drop-shadow(0 0 2px #000)",
                      }}
                      stroke="#000"
                      strokeWidth={2}
                    />,
                    <FaShieldAlt
                      key="0-1"
                      size={56}
                      color="#a7ec4f"
                      style={{
                        display: activeSlide === 1 ? "block" : "none",
                        filter:
                          "drop-shadow(0 0 4px #000) drop-shadow(0 0 2px #000)",
                      }}
                      stroke="#000"
                      strokeWidth={2}
                    />,
                    <FaPiggyBank
                      key="0-2"
                      size={56}
                      color="#a7ec4f"
                      style={{
                        display: activeSlide === 2 ? "block" : "none",
                        filter:
                          "drop-shadow(0 0 4px #000) drop-shadow(0 0 2px #000)",
                      }}
                      stroke="#000"
                      strokeWidth={2}
                    />,
                    <FaInfoCircle
                      key="0-3"
                      size={56}
                      color="#a7ec4f"
                      style={{
                        display: activeSlide === 3 ? "block" : "none",
                        filter:
                          "drop-shadow(0 0 4px #000) drop-shadow(0 0 2px #000)",
                      }}
                      stroke="#000"
                      strokeWidth={2}
                    />,
                  ]}
                  {activeProduct === 1 && [
                    <FaBolt
                      key="1-0"
                      size={56}
                      color="#a7ec4f"
                      style={{
                        display: activeSlide === 0 ? "block" : "none",
                        filter:
                          "drop-shadow(0 0 4px #000) drop-shadow(0 0 2px #000)",
                      }}
                      stroke="#000"
                      strokeWidth={2}
                    />,
                    <FaCoins
                      key="1-1"
                      size={56}
                      color="#a7ec4f"
                      style={{
                        display: activeSlide === 1 ? "block" : "none",
                        filter:
                          "drop-shadow(0 0 4px #000) drop-shadow(0 0 2px #000)",
                      }}
                      stroke="#000"
                      strokeWidth={2}
                    />,
                    <FaArrowsAltV
                      key="1-2"
                      size={56}
                      color="#a7ec4f"
                      style={{
                        display: activeSlide === 2 ? "block" : "none",
                        filter:
                          "drop-shadow(0 0 4px #000) drop-shadow(0 0 2px #000)",
                      }}
                      stroke="#000"
                      strokeWidth={2}
                    />,
                    <FaExclamationTriangle
                      key="1-3"
                      size={56}
                      color="#a7ec4f"
                      style={{
                        display: activeSlide === 3 ? "block" : "none",
                        filter:
                          "drop-shadow(0 0 4px #000) drop-shadow(0 0 2px #000)",
                      }}
                      stroke="#000"
                      strokeWidth={2}
                    />,
                  ]}
                  {activeProduct === 2 && [
                    <FaChartBar
                      key="2-0"
                      size={56}
                      color="#a7ec4f"
                      style={{
                        display: activeSlide === 0 ? "block" : "none",
                        filter:
                          "drop-shadow(0 0 4px #000) drop-shadow(0 0 2px #000)",
                      }}
                      stroke="#000"
                      strokeWidth={2}
                    />,
                    <FaBell
                      key="2-1"
                      size={56}
                      color="#a7ec4f"
                      style={{
                        display: activeSlide === 1 ? "block" : "none",
                        filter:
                          "drop-shadow(0 0 4px #000) drop-shadow(0 0 2px #000)",
                      }}
                      stroke="#000"
                      strokeWidth={2}
                    />,
                    <FaMoneyBillWave
                      key="2-2"
                      size={56}
                      color="#a7ec4f"
                      style={{
                        display: activeSlide === 2 ? "block" : "none",
                        filter:
                          "drop-shadow(0 0 4px #000) drop-shadow(0 0 2px #000)",
                      }}
                      stroke="#000"
                      strokeWidth={2}
                    />,
                    <FaStar
                      key="2-3"
                      size={56}
                      color="#a7ec4f"
                      style={{
                        display: activeSlide === 3 ? "block" : "none",
                        filter:
                          "drop-shadow(0 0 4px #000) drop-shadow(0 0 2px #000)",
                      }}
                      stroke="#000"
                      strokeWidth={2}
                    />,
                  ]}
                </div>
                <div className="text-[#013024] text-lg md:text-xl font-normal leading-relaxed w-full">
                  <span
                    className="block text-2xl font-bold text-[#013024] mb-2"
                    dangerouslySetInnerHTML={{
                      __html: products[activeProduct].slides[activeSlide].title,
                    }}
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: products[activeProduct].slides[activeSlide].desc,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <section className="py-20 bg-[#013024] text-white text-center relative mt-20">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {t("productsPage.ctaTitle")}
          </h2>
          <p className="text-lg text-green-100 mb-8">
            {t("productsPage.ctaDesc")}
          </p>
          <div className="flex justify-center">
            <a
              href={i18n.language === "ar" ? "/ar/get-started" : "/get-started"}
              className="px-8 py-3 bg-[#a7ec4f] text-[#013024] font-bold rounded-full shadow-lg hover:bg-[#bfff5c] transition-all text-lg flex items-center group"
              style={{ textDecoration: "none" }}
            >
              {t("productsPage.ctaButton")}
              <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">
                <FaChevronRight />
              </span>
            </a>
          </div>
          <p className="mt-6 text-green-200 text-sm">
            {t("productsPage.ctaNote")}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Products;
