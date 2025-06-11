import React from "react";
import { motion } from "framer-motion";

const ComingSoon = () => (
  <div className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-black/80">
    <motion.h1
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-5xl md:text-7xl font-extrabold text-[#a7ec4f] mb-6 drop-shadow-lg text-center"
    >
      Coming Soon
    </motion.h1>
    <p className="text-xl md:text-2xl text-white mb-8 text-center max-w-xl">
      This page is launching soon. Stay tuned!
    </p>
  </div>
);
// test
export default ComingSoon;
