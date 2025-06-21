import React from "react";

const Privacy = () => (
  <div className="max-w-2xl mx-auto px-4 py-16 text-[#013024] bg-white/90 rounded-2xl shadow-lg mt-10 mb-10 border-2 border-[#a7ec4f]">
    <h1 className="text-4xl font-extrabold mb-6 text-center tracking-tight">
      Privacy Policy
    </h1>
    <div className="space-y-6 text-lg leading-relaxed">
      <p>
        EarningSync values your privacy. We only collect information necessary
        to provide our services, such as your name, email, and account details.
        Your data is never sold or shared with third parties except as required
        to deliver our services or comply with legal obligations.
      </p>
      <p>
        We do not store sensitive personal data. Information you provide is used
        only for communication and service delivery. We do not offer user
        accounts or portals that allow you to access or delete stored data.
      </p>
      <p>
        For any questions about your privacy or data, please contact us at{" "}
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

export default Privacy;
