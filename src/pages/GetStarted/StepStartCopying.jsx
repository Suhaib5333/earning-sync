import React from "react";
import { FaChartLine } from "react-icons/fa";

const StepStartCopying = ({ openStep, setOpenStep }) => (
  <div className="bg-white rounded-lg shadow-lg">
    <button
      className="w-full flex items-center justify-between px-8 py-6 text-left focus:outline-none"
      onClick={() => setOpenStep(openStep === 2 ? null : 2)}
    >
      <div className="flex items-center gap-4">
        <FaChartLine className="w-8 h-8 text-[#013024]" />
        <span className="text-2xl font-semibold text-[#013024]">
          2. Start Copying
        </span>
      </div>
    </button>
    {/* You can add dropdown content here if needed */}
  </div>
);

export default StepStartCopying;
