import React, { useState } from "react";
import logo from "../assets/logo_transparent.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
        <img
          src={logo}
          alt="Logo"
          className="w-20 h-20 mx-auto mb-6 drop-shadow-lg"
        />
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
              <FaChevronLeft className="w-6 h-6" />
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
              <FaChevronRight className="w-6 h-6" />
            </button>
          </div>
          {/* Slide Content */}
          <div className="w-full flex-1 flex items-center justify-center px-4 md:px-8 pb-8 pt-2">
            <div className="w-full animate-fade-in">
              <div className="bg-white/90 rounded-2xl shadow-lg p-6 md:p-8 border border-black flex flex-col items-center gap-4">
                {/* Per-slide icons restored from old code */}
                <div className="mb-2">
                  {activeProduct === 0 && (
                    <>
                      {activeSlide === 0 && (
                        // Chart/Bar/Arrow icon
                        <svg
                          className="w-12 h-12"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <rect
                            x="4"
                            y="16"
                            width="4"
                            height="10"
                            rx="1.5"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2.5"
                          />
                          <rect
                            x="12"
                            y="10"
                            width="4"
                            height="16"
                            rx="1.5"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2.5"
                          />
                          <rect
                            x="20"
                            y="6"
                            width="4"
                            height="20"
                            rx="1.5"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2.5"
                          />
                          <polyline
                            points="4,22 12,18 20,12 28,8"
                            fill="none"
                            stroke="#013024"
                            strokeWidth="3.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="28"
                            cy="8"
                            r="2.5"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2"
                          />
                        </svg>
                      )}
                      {activeSlide === 1 && (
                        // Shield/Check icon
                        <svg
                          className="w-12 h-12"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <path
                            d="M16 5L27 9.5V16c0 7-5.5 10.5-11 13-5.5-2.5-11-6-11-13V9.5L16 5Z"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2.5"
                          />
                          <path
                            d="M11.5 17.5l3 3 6-6"
                            fill="none"
                            stroke="#013024"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {activeSlide === 2 && (
                        // Piggy Bank icon
                        <svg
                          className="w-12 h-12"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <ellipse
                            cx="16"
                            cy="18"
                            rx="10"
                            ry="7"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2.5"
                          />
                          <circle cx="22" cy="16" r="1" fill="#013024" />
                          <rect
                            x="10"
                            y="23"
                            width="3"
                            height="4"
                            rx="1.5"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2"
                          />
                          <rect
                            x="19"
                            y="23"
                            width="3"
                            height="4"
                            rx="1.5"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2"
                          />
                          <path
                            d="M8 14c-2-2-3-5 1-6"
                            stroke="#013024"
                            strokeWidth="2"
                            strokeLinecap="round"
                            fill="none"
                          />
                          <rect
                            x="14"
                            y="13"
                            width="4"
                            height="2"
                            rx="1"
                            fill="#fff"
                            stroke="#013024"
                            strokeWidth="1"
                          />
                          <path
                            d="M26 18c1 0 2 1 2 2s-1 2-2 2"
                            stroke="#013024"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                          />
                          <ellipse
                            cx="16"
                            cy="18"
                            rx="10"
                            ry="7"
                            fill="none"
                            stroke="#013024"
                            strokeWidth="2.5"
                          />
                          <circle
                            cx="16"
                            cy="18"
                            r="10"
                            fill="none"
                            stroke="#013024"
                            strokeWidth="0.5"
                            opacity="0.1"
                          />
                        </svg>
                      )}
                      {activeSlide === 3 && (
                        // Alert/Warning/Info icon
                        <svg
                          className="w-12 h-12"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <circle
                            cx="16"
                            cy="16"
                            r="13"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2.5"
                          />
                          <rect
                            x="14.5"
                            y="10"
                            width="3"
                            height="10"
                            rx="1.5"
                            fill="#013024"
                            stroke="#013024"
                            strokeWidth="1"
                          />
                          <rect
                            x="14.5"
                            y="22"
                            width="3"
                            height="3"
                            rx="1.5"
                            fill="#013024"
                            stroke="#013024"
                            strokeWidth="1"
                          />
                        </svg>
                      )}
                    </>
                  )}
                  {activeProduct === 1 && (
                    <>
                      {activeSlide === 0 && (
                        // Lightning bolt
                        <svg
                          className="w-12 h-12"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <polygon
                            points="18,3 6,18 15,18 14,29 26,13 17,13"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2.5"
                            strokeLinejoin="round"
                          />
                          <polyline
                            points="18,3 6,18 15,18 14,29 26,13 17,13"
                            fill="none"
                            stroke="#013024"
                            strokeWidth="2.5"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {activeSlide === 1 && (
                        // Multi-asset: coins + chart
                        <svg
                          className="w-12 h-12"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <ellipse
                            cx="10"
                            cy="24"
                            rx="6"
                            ry="3"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2"
                          />
                          <ellipse
                            cx="22"
                            cy="18"
                            rx="6"
                            ry="3"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2"
                          />
                          <rect
                            x="18"
                            y="8"
                            width="4"
                            height="8"
                            rx="1.5"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2"
                          />
                          <rect
                            x="24"
                            y="12"
                            width="4"
                            height="4"
                            rx="1.5"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2"
                          />
                          <rect
                            x="12"
                            y="14"
                            width="4"
                            height="6"
                            rx="1.5"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2"
                          />
                        </svg>
                      )}
                      {activeSlide === 2 && (
                        // Scaling arrows
                        <svg
                          className="w-12 h-12"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <rect
                            x="8"
                            y="20"
                            width="4"
                            height="8"
                            rx="1.5"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2"
                          />
                          <rect
                            x="16"
                            y="12"
                            width="4"
                            height="16"
                            rx="1.5"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2"
                          />
                          <rect
                            x="24"
                            y="4"
                            width="4"
                            height="24"
                            rx="1.5"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2"
                          />
                          <polyline
                            points="10,24 18,20 26,8"
                            fill="none"
                            stroke="#013024"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <polygon
                            points="24,4 30,10 26,8 24,4"
                            fill="#013024"
                          />
                        </svg>
                      )}
                      {activeSlide === 3 && (
                        // Warning triangle
                        <svg
                          className="w-12 h-12"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <polygon
                            points="16,5 29,27 3,27"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2.5"
                            strokeLinejoin="round"
                          />
                          <rect
                            x="14.5"
                            y="14"
                            width="3"
                            height="7"
                            rx="1.5"
                            fill="#013024"
                          />
                          <rect
                            x="14.5"
                            y="23"
                            width="3"
                            height="3"
                            rx="1.5"
                            fill="#013024"
                          />
                        </svg>
                      )}
                    </>
                  )}
                  {activeProduct === 2 && (
                    <>
                      {activeSlide === 0 && (
                        // Use the same bar chart as Classic
                        <svg
                          className="w-12 h-12"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <rect
                            x="4"
                            y="16"
                            width="4"
                            height="10"
                            rx="1.5"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2.5"
                          />
                          <rect
                            x="12"
                            y="10"
                            width="4"
                            height="16"
                            rx="1.5"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2.5"
                          />
                          <rect
                            x="20"
                            y="6"
                            width="4"
                            height="20"
                            rx="1.5"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2.5"
                          />
                          <polyline
                            points="4,22 12,18 20,12 28,8"
                            fill="none"
                            stroke="#013024"
                            strokeWidth="3.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="28"
                            cy="8"
                            r="2.5"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2"
                          />
                        </svg>
                      )}
                      {activeSlide === 1 && (
                        // Bell/alert icon with outline
                        <svg
                          className="w-12 h-12"
                          fill="#a7ec4f"
                          viewBox="0 0 32 32"
                        >
                          <path
                            d="M16 28a4 4 0 0 0 4-4H12a4 4 0 0 0 4 4Z"
                            stroke="#013024"
                            strokeWidth="2.5"
                          />
                          <path
                            d="M24 20v-6a8 8 0 1 0-16 0v6l-2 2v2h20v-2l-2-2Z"
                            stroke="#013024"
                            strokeWidth="2.5"
                            fill="#a7ec4f"
                          />
                        </svg>
                      )}
                      {activeSlide === 2 && (
                        // Money bill icon with outline
                        <svg
                          className="w-12 h-12"
                          fill="#a7ec4f"
                          viewBox="0 0 32 32"
                        >
                          <rect
                            x="4"
                            y="10"
                            width="24"
                            height="12"
                            rx="2"
                            stroke="#013024"
                            strokeWidth="2.5"
                            fill="#a7ec4f"
                          />
                          <circle
                            cx="16"
                            cy="16"
                            r="3"
                            stroke="#013024"
                            strokeWidth="2"
                            fill="#fff"
                          />
                          <path
                            d="M8 10v2M24 10v2M8 22v-2M24 22v-2"
                            stroke="#013024"
                            strokeWidth="2"
                          />
                        </svg>
                      )}
                      {activeSlide === 3 && (
                        // Top rated/award badge icon with star
                        <svg
                          className="w-12 h-12"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <circle
                            cx="16"
                            cy="16"
                            r="13"
                            fill="#a7ec4f"
                            stroke="#013024"
                            strokeWidth="2.5"
                          />
                          <polygon
                            points="16,9 18.09,14.26 23.82,14.27 19.36,17.74 21.45,23 16,19.77 10.55,23 12.64,17.74 8.18,14.27 13.91,14.26"
                            fill="#fff"
                            stroke="#013024"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </>
                  )}
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
              href={
                (location.pathname.startsWith("/ar") ? "/ar" : "") +
                "/get-started"
              }
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
