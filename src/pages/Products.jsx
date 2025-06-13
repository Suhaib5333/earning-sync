import React, { useState } from "react";
import logo from "../assets/logo_transparent.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    name: "EarningSync Classic",
    description: [
      // Slide 1: Overview
      <>
        <span className="block text-2xl font-bold text-[#013024] mb-2">
          What is EarningSync Classic?
        </span>
        <span>
          <span className="font-semibold text-[#013024]">
            EarningSync Classic
          </span>{" "}
          is a{" "}
          <span className="font-semibold text-[#013024]">
            semi automated trading strategy
          </span>{" "}
          for the{" "}
          <span className="font-semibold text-[#013024]">NASDAQ index</span>,
          executing{" "}
          <span className="font-semibold text-[#013024]">buy-only trades</span>{" "}
          within a carefully defined risk and capital allocation framework.
        </span>
      </>,
      // Slide 2: Trade Allocation & Risk Management
      <>
        <span className="block text-xl font-bold text-[#013024] mb-2">
          Trade Allocation & Risk Management
        </span>
        <ul className="list-disc list-inside text-left mx-auto max-w-lg text-base">
          <li>
            Strict cap of{" "}
            <span className="font-semibold text-[#013024]">
              0.12 lots per $1,000
            </span>{" "}
            account balance, never exceeded.
          </li>
          <li>
            Exposure limit based on historical{" "}
            <span className="font-semibold text-[#013024]">NASDAQ</span>{" "}
            drawdowns, engineered to withstand declines of{" "}
            <span className="font-semibold text-[#013024]">up to 40%-50%</span>.
          </li>
          <li>
            Designed for long-term sustainability and consistency, even in
            volatile markets.
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Mauris euismod, nisl eget aliquam ultricies, nunc nisl aliquam nunc, eget aliquam massa nisl quis neque.",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
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
        <p className="text-lg md:text-xl text-white max-w-2xl">
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
      <div className="mt-12 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl bg-gradient-to-br from-white via-[#f7fff6] to-[#eaffd0] rounded-3xl shadow-2xl p-0 relative flex flex-col items-center min-h-[340px] border border-[#eaffd0] transition-all duration-300
          mx-0 md:mx-0"
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
          <div className="flex items-center justify-between w-full px-6 mt-6 mb-4">
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
                        // Upgraded: Chart/Bar/Arrow icon, bold, #a7ec4f
                        <svg
                          className="w-12 h-12 text-[#a7ec4f]"
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
                            stroke="#a7ec4f"
                            strokeWidth="3"
                          />
                          <rect
                            x="12"
                            y="10"
                            width="4"
                            height="16"
                            rx="1.5"
                            fill="#a7ec4f"
                            stroke="#a7ec4f"
                            strokeWidth="3"
                          />
                          <rect
                            x="20"
                            y="6"
                            width="4"
                            height="20"
                            rx="1.5"
                            fill="#a7ec4f"
                            stroke="#a7ec4f"
                            strokeWidth="3"
                          />
                          <polyline
                            points="4,22 12,18 20,12 28,8"
                            fill="none"
                            stroke="#013024"
                            strokeWidth="4"
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
                        // Upgraded: Shield/Check/Lock icon, bold, #a7ec4f
                        <svg
                          className="w-12 h-12 text-[#a7ec4f]"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <path
                            d="M16 5L27 9.5V16c0 7-5.5 10.5-11 13-5.5-2.5-11-6-11-13V9.5L16 5Z"
                            fill="#a7ec4f"
                            stroke="#a7ec4f"
                            strokeWidth="3"
                          />
                          <path
                            d="M11.5 17.5l3 3 6-6"
                            fill="none"
                            stroke="#013024"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {activeSlide === 2 && (
                        // Upgraded: Dollar/Target/Goal icon, bold, #a7ec4f
                        <svg
                          className="w-12 h-12 text-[#a7ec4f]"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <circle
                            cx="16"
                            cy="16"
                            r="13"
                            fill="#a7ec4f"
                            stroke="#a7ec4f"
                            strokeWidth="3"
                          />
                          <circle
                            cx="16"
                            cy="16"
                            r="7"
                            fill="none"
                            stroke="#013024"
                            strokeWidth="3.5"
                          />
                          <path
                            d="M16 11v10M13 14h6M13 18h6"
                            stroke="#013024"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                      {activeSlide === 3 && (
                        // Upgraded: Alert/Warning/Info icon, bold, #a7ec4f
                        <svg
                          className="w-12 h-12 text-[#a7ec4f]"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <circle
                            cx="16"
                            cy="16"
                            r="13"
                            fill="#a7ec4f"
                            stroke="#a7ec4f"
                            strokeWidth="3"
                          />
                          <rect
                            x="14.5"
                            y="10"
                            width="3"
                            height="10"
                            rx="1.5"
                            fill="#013024"
                          />
                          <rect
                            x="14.5"
                            y="22"
                            width="3"
                            height="3"
                            rx="1.5"
                            fill="#013024"
                          />
                          <circle
                            cx="16"
                            cy="16"
                            r="13"
                            fill="none"
                            stroke="#a7ec4f"
                            strokeWidth="3"
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
