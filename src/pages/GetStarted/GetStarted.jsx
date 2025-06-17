import React, { useState } from "react";
import { motion } from "framer-motion";
 
import StepCreateAccount  from "./StepCreateAccount";
import StepStartCopying   from "./StepStartCopying";
import StepJoinCommunity  from "./StepJoinCommunity";
 
const steps = [
  { title: "Create an Account",  Component: StepCreateAccount },
  { title: "Start Copying",      Component: StepStartCopying },
  { title: "Join Our Community", Component: StepJoinCommunity },
];
 
export default function GetStarted() {
  // 1 = first, 2 = second, 3 = third, null = all collapsed
  const [openStep, setOpenStep] = useState(1);
 
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#013024] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Level-Up Your Returns with
              <span className="text-[#a7ec4f]"> EarningSync!</span>
            </h1>
            <p className="text-xl text-gray-300">
              -Jumpstart your copy trading in seconds-
            </p>
          </motion.div>
        </div>
      </section>
 
      {/* Flow & Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
 
          {/* ── Progress Flow ── */}
          <div className="flex items-center mb-6">
            {steps.map((step, idx) => {
              const stepNum = idx + 1;
              const isDone  = openStep >= stepNum;
              return (
                <React.Fragment key={idx}>
                  {idx > 0 && (
                    <div
                      className={`flex-1 h-1 transition-colors ${
                        isDone ? "bg-[#a7ec4f]" : "bg-gray-200"
                      }`}
                    />
                  )}
                  <div
                    onClick={() =>
                      setOpenStep(openStep === stepNum ? null : stepNum)
                    }
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <motion.div
                      animate={{ scale: isDone ? 1.1 : 1 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                        isDone
                          ? "bg-[#a7ec4f] border-[#a7ec4f] text-white"
                          : "bg-white border-gray-300 text-gray-500"
                      }`}
                    >
                      {stepNum}
                    </motion.div>
                    <span
                      className={`mt-2 text-sm md:text-base font-medium text-center ${
                        isDone ? "text-gray-800" : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
 
          {/* ── Only the active step’s CONTENT ── */}
          <div className="space-y-8">
            {steps.map((step, idx) => {
              const stepNum = idx + 1;
              return (
                openStep === stepNum && (
                  <step.Component
                    key={idx}
                    openStep={openStep}
                    setOpenStep={setOpenStep}
                  />
                )
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
 
 