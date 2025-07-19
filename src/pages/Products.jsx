import React, { useState } from "react";
import logo from "../assets/logo_transparent.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    name: "EarningSync Classic",
    description: [
      // Slide 1: Overview (Shortened)
      <>
        <span className="block text-2xl font-bold text-[#013024] mb-2">
          What is EarningSync Classic?
        </span>
        <span>
          <span className="font-semibold text-[#013024]">
            EarningSync Classic
          </span>{" "}
          is a semi-automated strategy for{" "}
          <span className="font-semibold text-[#013024]">
            USTEC (NASDAQ), GOLD, USOIL, and US30
          </span>
          . It trades only buy-side, using strict risk and capital rules for
          steady, sustainable results. Designed to capture upside momentum with
          low risk, it's ideal for investors seeking stable returns.
        </span>
      </>,
      // Slide 2: Trade Allocation & Risk Management (Shortened)
      <>
        <span className="block text-xl font-bold text-[#013024] mb-2">
          Trade Allocation & Risk Management
        </span>
        <ul className="list-disc list-inside text-left mx-auto max-w-lg text-base">
          <li>
            <span className="font-semibold text-[#013024]">
              Lot Size Control:
            </span>{" "}
            Max 0.05 lots per $1,000 balance for consistent, conservative
            sizing.
          </li>
          <li>
            <span className="font-semibold text-[#013024]">
              Focused Market Exposure:
            </span>{" "}
            Only one symbol is traded at a time, no overlap between US30, GOLD,
            USTEC, or USOIL, to avoid overexposure and keep precision.
          </li>
        </ul>
      </>,
      // Slide 3: Minimum Investment & Objective
      <>
        <span className="block text-xl font-bold text-[#013024] mb-2">
          Minimum Investment & Objective
        </span>
        <div className="text-base text-left mx-auto max-w-lg">
          <div className="mb-2">
            <span className="font-semibold text-[#013024]">
              Minimum deposit:
            </span>{" "}
            $100, accessible to a broad range of investors.
          </div>
          <div>
            <span className="font-semibold text-[#013024]">Objective:</span>{" "}
            Generate stable annual income while preserving capital. Best for
            long-term investors seeking balanced, steady returns. Follows a{" "}
            <span className="font-semibold text-[#013024]">
              strictly rule-based plan
            </span>{" "}
            for consistent, emotion-free performance.
          </div>
        </div>
      </>,
      // Slide 4: Risk Disclosure
      <>
        <span className="block text-xl font-bold text-[#013024] mb-2">
          Risk Disclosure
        </span>
        <span className="text-base">
          While the strategy is built with conservative exposure levels, it is{" "}
          <span className="font-semibold text-[#013024]">not risk-free</span>.
          The main risk arises if the{" "}
          <span className="font-semibold text-[#013024]">NASDAQ index</span>{" "}
          crashes more than{" "}
          <span className="font-semibold text-[#013024]">50%</span> while all
          trades are fully allocated. Past performance is not a guarantee of
          future results, and market anomalies may still occur.
        </span>
      </>,
    ],
  },
  {
    name: "EarningSync HR (High Risk)",
    description: [
      // Slide 1: Overview (EXTRAVAGANT, using your text)
      <>
        <span className="block text-2xl font-bold text-[#013024] mb-2">
          What is EarningSync High-Risk?
        </span>
        <span>
          At{" "}
          <span className="font-semibold text-[#013024]">
            EarningSync High-Risk
          </span>
          , we rely on an{" "}
          <span className="font-semibold text-[#013024]">
            advanced trading strategy
          </span>{" "}
          built around a{" "}
          <span className="font-semibold text-[#013024]">
            custom indicator developed using Pine Script
          </span>
          . This indicator generates{" "}
          <span className="font-semibold text-[#013024]">
            precise trade signals
          </span>{" "}
          that are executed automatically on a dedicated trading account, with{" "}
          <span className="font-semibold text-[#013024]">
            continuous monitoring and control by our expert trading team
          </span>
          .
        </span>
      </>,
      // Slide 2: Instruments Traded (EXTRAVAGANT, using your text)
      <>
        <span className="block text-xl font-bold text-[#013024] mb-2">
          Instruments Traded
        </span>
        <ul className="list-disc list-inside text-left mx-auto max-w-lg text-base">
          <li>
            <span className="font-semibold text-[#013024]">Gold (XAUUSD)</span>
          </li>
          <li>
            <span className="font-semibold text-[#013024]">
              Dow Jones Index (US30)
            </span>
          </li>
          <li>
            <span className="font-semibold text-[#013024]">
              Nasdaq Index (NAS100)
            </span>
          </li>
          <li>
            <span className="font-semibold text-[#013024]">
              Bitcoin (BTCUSD)
            </span>
          </li>
        </ul>
        <span>
          The strategy focuses on these high-potential instruments, seeking to
          capture opportunities across diverse and volatile markets.
        </span>
      </>,
      // Slide 3: Position Scaling & Risk Approach (EXTRAVAGANT, using your text)
      <>
        <span className="block text-xl font-bold text-[#013024] mb-2">
          Position Scaling & Risk Approach
        </span>
        <ul className="list-disc list-inside text-left mx-auto max-w-lg text-base">
          <li>
            We utilize a{" "}
            <span className="font-semibold text-[#013024]">
              position-scaling approach
            </span>{" "}
            to reach a favorable average entry price.
          </li>
          <li>
            <span className="font-semibold text-[#013024]">
              No stop-loss levels
            </span>{" "}
            are applied, given the strategy’s nature and risk control
            mechanisms.
          </li>
        </ul>
        <span>
          All trades are executed automatically and are under the vigilant
          supervision of our expert team, ensuring manual intervension when
          needed.
        </span>
      </>,
      // Slide 4: Risk Disclosure (EXTRAVAGANT, standard warning)
      <>
        <span className="block text-xl font-bold text-[#013024] mb-2">
          Risk Disclosure
        </span>
        <span className="text-base">
          This strategy is{" "}
          <span className="font-semibold text-[#013024]">high risk</span> and is
          intended for experienced copy trading investors seeking aggressive
          growth. The absence of stop-losses and the use of position scaling can
          result in significant drawdowns or loss of capital. Only invest what
          you can afford to lose, and ensure you fully understand the risks
          involved.
        </span>
      </>,
    ],
  },
];

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleProductChange = (idx) => {
    setActiveProduct(idx);
    setActiveSlide(0);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveSlide((prev) =>
      prev < products[activeProduct].description.length - 1 ? prev + 1 : prev
    );
  };

  // Progress bar for carousel
  const progress =
    ((activeSlide + 1) / products[activeProduct].description.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eaffd0] to-[#f7fff6] pb-16">
      {/* Header */}
      <div className="w-full bg-[#013024] py-16 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#a7ec4f] mb-4 drop-shadow-lg">
          Our Products
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl px-4 md:px-0 mx-auto">
          Discover our range of investment products designed for different risk
          appetites and goals.
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
              {activeSlide + 1} / {products[activeProduct].description.length}
            </span>
            <button
              onClick={handleNext}
              disabled={
                activeSlide === products[activeProduct].description.length - 1
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
              <div className="bg-white/90 rounded-2xl shadow-lg p-6 md:p-8 border border-[#eaffd0] flex flex-col items-center gap-4">
                {/* Upgraded icons for each slide (bolder, #a7ec4f, visually appealing) */}
                <div className="mb-2">
                  {activeProduct === 0 && (
                    <>
                      {activeSlide === 0 && (
                        // Chart/Bar/Arrow icon with black outline
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
                        // Shield/Check icon with black outline
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
                        // Improved Piggy Bank icon with black outline
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
                        // Alert/Warning/Info icon with black outline
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
                        // Lightning bolt for advanced/active strategy
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
                        // Scaling arrows for position scaling
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
                        // Bold warning triangle for risk
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
                </div>
                <div className="text-[#013024] text-lg md:text-xl font-normal leading-relaxed w-full">
                  {products[activeProduct].description[activeSlide]}
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
            Ready to Get Started?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Join our community and start your journey with EarningSync today.
          </p>
          <div className="flex justify-center">
            <a
              href="/get-started"
              className="px-8 py-3 bg-[#a7ec4f] text-[#013024] font-bold rounded-full shadow-lg hover:bg-[#bfff5c] transition-all text-lg flex items-center group"
              style={{ textDecoration: "none" }}
            >
              Get Started Now
              <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">
                <FaChevronRight />
              </span>
            </a>
          </div>
          <p className="mt-6 text-green-200 text-sm">
            Start with just $100 • Stop copying & withdraw at anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default Products;
