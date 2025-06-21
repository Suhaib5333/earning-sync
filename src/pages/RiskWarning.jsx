import React from "react";

const RiskWarning = () => (
  <div className="max-w-2xl mx-auto px-4 py-16 text-[#013024] bg-white/90 rounded-2xl shadow-lg mt-10 mb-10 border-2 border-[#a7ec4f]">
    <h1 className="text-4xl font-extrabold mb-6 text-center tracking-tight">
      Risk Warning
    </h1>
    <div className="space-y-6 text-lg leading-relaxed">
      <p>
        Trading and investing involve significant risk. You may lose more than
        your initial investment. EarningSync provides tools and information to
        help you make informed decisions, but we do not provide financial advice
        or guarantees.
      </p>
      <p>
        All strategies, including EarningSync Classic and High Risk, carry the
        potential for both profit and loss. Past results do not guarantee future
        performance. Only trade with capital you can afford to lose and consider
        seeking independent advice if needed.
      </p>
      <p>By using EarningSync, you acknowledge and accept these risks.</p>
    </div>
  </div>
);

export default RiskWarning;
