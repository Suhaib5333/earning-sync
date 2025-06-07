import React, { useState } from "react";
import { motion } from "framer-motion";
import StepCreateAccount from "./StepCreateAccount";
import StepStartCopying from "./StepStartCopying";
import StepJoinCommunity from "./StepJoinCommunity";
import ComingSoon from "../../components/ComingSoon";

const GetStarted = () => {
  const [openStep, setOpenStep] = useState(null);

  return (
    <div className="min-h-screen relative">
      {/* Coming Soon Overlay */}
      {/* <ComingSoon /> */}

      {/* Hero Section */}
      <section className="bg-[#013024] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Start Your Journey with
              <span className="text-[#a7ec4f]"> EarningSync</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Follow these simple steps to begin your copy trading journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <StepCreateAccount openStep={openStep} setOpenStep={setOpenStep} />
            <StepStartCopying openStep={openStep} setOpenStep={setOpenStep} />
            <StepJoinCommunity openStep={openStep} setOpenStep={setOpenStep} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
