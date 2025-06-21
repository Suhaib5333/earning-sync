import React from "react";

const Terms = () => (
  <div className="max-w-2xl mx-auto px-4 py-16 text-[#013024] bg-white/90 rounded-2xl shadow-lg mt-10 mb-10 border-2 border-[#a7ec4f]">
    <h1 className="text-4xl font-extrabold mb-6 text-center tracking-tight">
      Terms and Conditions
    </h1>
    <div className="space-y-6 text-lg leading-relaxed">
      <p>
        By accessing or using EarningSync, you agree to follow all applicable
        laws and these terms. Our services are provided for informational and
        educational purposes. You are responsible for your own trading decisions
        and account security.
      </p>
      <p>
        EarningSync does not guarantee profits or prevent losses. Past
        performance is not indicative of future results. We reserve the right to
        update these terms at any time. Continued use of our services means you
        accept any changes.
      </p>
      <p>
        If you have questions about these terms, contact us at{" "}
        <a
          href="mailto:info@earningsync.com"
          className="text-[#000000] underline hover:text-[#013024]"
        >
          info@earningsync.com
        </a>
        .
      </p>
    </div>
  </div>
);

export default Terms;
