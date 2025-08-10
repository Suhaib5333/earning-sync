import React, { useState, useEffect } from "react";
import logo from "../assets/logo_transparent.png";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const plans = [
  {
    name: "EarningSync Classic",
    rate: 0.05,
    color: "#a7ec4f",
    desc: "Stable, low-risk copy trading. 5% average monthly profit.",
  },
  {
    name: "EarningSync HR",
    rate: 0.1,
    color: "#ffb300",
    desc: "High risk, high reward. 10% average monthly profit.",
  },
];

function formatCurrency(num) {
  return num.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
}

const Calculator = () => {
  const [planIdx, setPlanIdx] = useState(0);
  const [initial, setInitial] = useState(1000);
  const [monthly, setMonthly] = useState(0);
  const [months, setMonths] = useState(12);
  const [results, setResults] = useState(null);

  // Validation constants
  const MAX_INITIAL = 10000000;
  const MAX_MONTHLY = 10000;

  const handleCalculate = (e) => {
    e.preventDefault();
    // Clamp values to max allowed
    const safeInitial = Math.min(Number(initial), MAX_INITIAL);
    const safeMonthly = Math.min(Number(monthly), MAX_MONTHLY);
    let balance = safeInitial;
    let totalInvested = safeInitial;
    let totalProfit = 0;
    let monthlyHistory = [];
    for (let i = 1; i <= months; i++) {
      // Calculate gross profit for the month
      const grossProfit = balance * plans[planIdx].rate;
      // Apply 30% fee, so only 70% of profit is added
      const netProfit = grossProfit * 0.7;
      balance = balance + netProfit + safeMonthly;
      totalInvested += safeMonthly;
      monthlyHistory.push({
        month: i,
        balance,
        invested: totalInvested,
        profit: balance - totalInvested,
      });
    }
    totalProfit = balance - totalInvested;
    setResults({
      finalBalance: balance,
      totalInvested,
      totalProfit,
      monthlyHistory,
    });
  };

  const handleReset = () => {
    setInitial(1000);
    setMonthly(0);
    setMonths(12);
    setResults(null);
  };

  // Prepare chart data

  const chartData = results
    ? {
        labels: results.monthlyHistory.map((row) => `M${row.month}`),
        datasets: [
          {
            label: "Balance",
            data: results.monthlyHistory.map((row) => row.balance),
            borderColor: plans[planIdx].color,
            backgroundColor: "rgba(167,236,79,0.10)",
            tension: 0.35,
            pointRadius: 2,
            fill: true,
            borderWidth: 3,
          },
          {
            label: "Total Invested",
            data: results.monthlyHistory.map((row) => row.invested),
            borderColor: "#1a3a2d",
            backgroundColor: "rgba(26,58,45,0.10)",
            // Make line solid
            borderDash: [],
            pointRadius: 2,
            pointBackgroundColor: "#1a3a2d",
            pointBorderColor: "#a7ec4f",
            fill: false,
            borderWidth: 2,
          },
        ],
      }
    : null;

  // Responsive legend alignment: left on mobile, center on desktop
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const chartOptions = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        display: true,
        align: isMobile ? "start" : "center",
        labels: {
          color: "#e0ffe0",
          font: { size: 15, weight: "bold" },
          padding: 24,
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#013024",
        titleColor: "#a7ec4f",
        bodyColor: "#fff",
        borderColor: "#a7ec4f",
        borderWidth: 1,
        padding: 16,
        caretPadding: 10,
        displayColors: false,
        mode: "index",
        intersect: false,
        callbacks: {
          label: function (context) {
            // Only show the full set of values for the first dataset per index to avoid duplicate popups
            if (context.datasetIndex !== 0) return "";
            const idx = context.dataIndex;
            const history = results.monthlyHistory[idx];
            if (!history) return "";
            return [
              `Total Invested: ${formatCurrency(history.invested)}`,
              `Profit: ${formatCurrency(history.profit)}`,
              `Balance: ${formatCurrency(history.balance)}`,
            ];
          },
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#013024", font: { weight: "bold" } },
        grid: { color: "rgba(167,236,79,0.08)" },
      },
      y: {
        ticks: { color: "#013024", font: { weight: "bold" } },
        grid: { color: "rgba(167,236,79,0.08)" },
        // Start axis a bit below the initial invested amount
        suggestedMin: Math.max(0, initial * 0.85),
      },
    },
    layout: {
      padding: 24,
    },
  };

  // Input logic for all fields: keep 0 as default, black text, but clear on focus
  const [initialInputValue, setInitialInputValue] = useState("1000");
  const [monthlyInputValue, setMonthlyInputValue] = useState("0");
  const [periodInputValue, setPeriodInputValue] = useState("12");

  useEffect(() => {
    setInitialInputValue(initial === 0 ? "0" : String(initial));
  }, [initial]);
  useEffect(() => {
    setMonthlyInputValue(monthly === 0 ? "0" : String(monthly));
  }, [monthly]);
  useEffect(() => {
    setPeriodInputValue(months === 0 ? "0" : String(months));
  }, [months]);

  const handleInitialChange = (e) => {
    let val = e.target.value;
    if (val === "") {
      setInitial(0);
      setInitialInputValue("");
    } else {
      let num = Number(val);
      if (num > MAX_INITIAL) num = MAX_INITIAL;
      setInitial(num);
      setInitialInputValue(val.replace(/^0+(?=\d)/, ""));
    }
  };
  const handleMonthlyChange = (e) => {
    let val = e.target.value;
    if (val === "") {
      setMonthly(0);
      setMonthlyInputValue("");
    } else {
      let num = Number(val);
      if (num > MAX_MONTHLY) num = MAX_MONTHLY;
      setMonthly(num);
      setMonthlyInputValue(val.replace(/^0+(?=\d)/, ""));
    }
  };
  const handlePeriodChange = (e) => {
    let val = e.target.value;
    if (val === "") {
      setMonths(0);
      setPeriodInputValue("");
    } else {
      let num = Number(val);
      if (num > 120) num = 120;
      setMonths(num);
      setPeriodInputValue(val.replace(/^0+(?=\d)/, ""));
    }
  };
  return (
    <div className="flex flex-col items-center justify-start w-full">
      {/* Hero Section */}
      <section className="w-full bg-[#013024] text-white py-16 md:py-20 mb-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Investment <span className="text-[#a7ec4f]">Calculator</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 text-center max-w-3xl mx-auto font-medium">
            Estimate your future balance with EarningSync Classic or HR. Adjust
            your investment, monthly additions, and period to see your potential
            growth.
          </p>
        </div>
      </section>
      <div className="w-full max-w-6xl mx-auto bg-white/95 dark:bg-[#101c1c]/90 rounded-2xl shadow-2xl p-8 md:p-16 border border-[#e5e7eb]">
        <form onSubmit={handleCalculate} className="flex flex-col gap-6 mb-8">
          <div className="flex flex-col gap-4">
            {/* Product-style selector buttons, mobile and desktop */}
            <div className="flex flex-row gap-4 px-0 mt-2 mb-2 w-full max-w-md mx-auto md:hidden">
              {plans.map((plan, idx) => (
                <button
                  key={plan.name}
                  type="button"
                  className={`flex-1 px-4 py-4 rounded-2xl shadow-lg font-bold text-lg transition-all duration-200 border-2 focus:outline-none flex flex-col items-center gap-2
                    ${
                      planIdx === idx
                        ? "bg-[#013024] text-[#a7ec4f] border-[#a7ec4f] scale-105"
                        : "bg-white text-[#013024] border-transparent hover:border-[#a7ec4f]/40"
                    }
                  `}
                  onClick={() => setPlanIdx(idx)}
                  aria-pressed={planIdx === idx}
                  style={{ minWidth: 0, maxWidth: "100%" }}
                >
                  <img src={logo} alt="Logo" className="w-12 h-12 mx-auto mb-2" />
                  {plan.name}
                </button>
              ))}
            </div>
            <div className="hidden md:flex flex-row gap-8 justify-center items-center mt-2 mb-2">
              {plans.map((plan, idx) => (
                <button
                  key={plan.name}
                  type="button"
                  className={`px-8 py-4 rounded-2xl shadow-lg font-bold text-2xl transition-all duration-200 border-2 focus:outline-none flex flex-col items-center gap-2 w-72 md:w-96
                    ${
                      planIdx === idx
                        ? "bg-[#013024] text-[#a7ec4f] border-[#a7ec4f] scale-105"
                        : "bg-white text-[#013024] border-transparent hover:border-[#a7ec4f]/40"
                    }
                  `}
                  onClick={() => setPlanIdx(idx)}
                  aria-pressed={planIdx === idx}
                >
                  <img src={logo} alt="Logo" className="w-16 h-16 mx-auto mb-2" />
                  {plan.name}
                </button>
              ))}
            </div>
            <div className="text-xs text-gray-500 text-center mt-1">
              {plans[planIdx].desc}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[#013024] font-semibold text-base md:text-lg">
                Initial Investment ($)
              </label>
              <input
                type="number"
                min="0"
                max={MAX_INITIAL}
                step="100"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#a7ec4f] text-base md:text-lg font-bold placeholder-black placeholder-opacity-100"
                value={initialInputValue}
                onChange={handleInitialChange}
                required
                placeholder="e.g. 1000"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#013024] font-semibold text-base md:text-lg">
                Monthly Addition ($)
              </label>
              <input
                type="number"
                min="0"
                max={MAX_MONTHLY}
                step="50"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#a7ec4f] text-base md:text-lg font-bold placeholder-black placeholder-opacity-100"
                value={monthlyInputValue}
                onChange={handleMonthlyChange}
                placeholder="e.g. 200"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#013024] font-semibold text-base md:text-lg">
                Period (months)
              </label>
              <input
                type="number"
                min="1"
                max="120"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#a7ec4f] text-base md:text-lg font-bold placeholder-black placeholder-opacity-100"
                value={periodInputValue}
                onChange={handlePeriodChange}
                required
                placeholder="e.g. 12"
              />
            </div>
          </div>
          <div className="flex gap-4 justify-center mt-2">
            <button
              type="submit"
              className="bg-[#a7ec4f] text-[#013024] px-8 py-2 rounded-lg font-extrabold text-base md:text-lg shadow-lg hover:scale-105 transition-all"
            >
              Calculate
            </button>
            <button
              type="button"
              className="bg-gray-200 text-gray-700 px-8 py-2 rounded-lg font-bold text-base shadow hover:bg-gray-300 transition-all"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>

        {results && (
          <div className="bg-white rounded-xl shadow-lg p-6 mt-4 border border-gray-200">
            <h2 className="text-xl font-extrabold mb-4 text-[#013024] text-center tracking-tight">
              Projection Results
            </h2>
            <div className="flex flex-wrap gap-4 md:gap-8 justify-center mb-8 w-full">
              <div className="flex-1 min-w-[120px] max-w-[180px] mx-auto text-center mb-4">
                <div className="text-base text-gray-500">Total Invested</div>
                <div className="text-2xl font-extrabold text-[#013024]">
                  {formatCurrency(results.totalInvested)}
                </div>
              </div>
              <div className="flex-1 min-w-[120px] max-w-[180px] mx-auto text-center">
                <div className="text-base text-gray-500">Estimated Profit</div>
                <div className="text-2xl font-extrabold text-[#ffb300]">
                  {formatCurrency(results.totalProfit)}
                </div>
              </div>
              <div className="flex-1 min-w-[120px] max-w-[180px] mx-auto text-center">
                <div className="text-base text-gray-500">Final Balance</div>
                <div className="text-2xl font-extrabold text-[#a7ec4f]">
                  {formatCurrency(results.finalBalance)}
                </div>
              </div>
            </div>
            <div className="mb-8" />
            {/* Graph Card */}
            {/* Responsive Graph Card: Separate mobile and desktop for max size and custom legend */}
            <div>
              {/* Mobile View */}
              <div className="block md:hidden w-full mb-8 rounded-2xl bg-[#101c1c] shadow-lg border border-[#a7ec4f]/10 flex flex-col items-start p-1 pt-4 pb-4">
                <h3 className="text-base font-bold text-[#a7ec4f] mb-4 text-left tracking-wide w-full pl-4">
                  Growth Projection
                </h3>
                {/* Custom legend for mobile, left-aligned, spaced */}
                <div className="flex flex-col gap-2 mb-6 w-full pl-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-4 h-2 rounded bg-[#a7ec4f]" />
                    <span className="text-[#e0ffe0] text-sm font-bold">
                      Balance
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-4 h-2 rounded bg-[#1a3a2d]" />
                    <span className="text-[#e0ffe0] text-sm font-bold">
                      Total Invested
                    </span>
                  </div>
                </div>
                <div
                  className="w-full"
                  style={{ maxWidth: "100vw", minWidth: 0 }}
                >
                  <Line
                    data={chartData}
                    options={{
                      ...chartOptions,
                      plugins: {
                        ...chartOptions.plugins,
                        legend: { display: false },
                      },
                    }}
                    height={520}
                  />
                </div>
              </div>
              {/* Desktop View */}
              <div className="hidden md:flex w-full max-w-5xl mx-auto mb-12 rounded-2xl bg-[#101c1c] shadow-lg border border-[#a7ec4f]/10 flex-col items-center p-12">
                <h3 className="text-lg font-bold text-[#a7ec4f] mb-4 text-center tracking-wide w-full">
                  Growth Projection
                </h3>
                {/* Custom legend for desktop, centered, spaced */}
                <div className="flex flex-row gap-8 mb-8 justify-center w-full">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-6 h-2 rounded bg-[#a7ec4f]" />
                    <span className="text-[#e0ffe0] text-base font-bold">
                      Balance
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-6 h-2 rounded bg-[#1a3a2d]" />
                    <span className="text-[#e0ffe0] text-base font-bold">
                      Total Invested
                    </span>
                  </div>
                </div>
                <div
                  className="w-full"
                  style={{ maxWidth: "100%", minWidth: 0 }}
                >
                  <Line
                    data={chartData}
                    options={{
                      ...chartOptions,
                      plugins: {
                        ...chartOptions.plugins,
                        legend: { display: false },
                      },
                    }}
                    height={180}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
