import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaUsers } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-transparent">
      {/* Hero/Banner Section */}
      <section className="bg-[#013024] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact <span className="text-[#a7ec4f]">EarningSync</span>
            </h1>
            <p className="text-xl mb-4 text-gray-300">
              Reach out to us anytime through your preferred channel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-4 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Email */}
            <motion.a
              href="mailto:info@earningsync.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 #a7ec4f33" }}
              className="flex flex-col items-center justify-center h-full rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#f7fff6] border border-[#a7ec4f]/30 transition-all duration-300 hover:-translate-y-1 hover:border-[#a7ec4f] group text-center p-8"
            >
              <div className="bg-[#a7ec4f]/20 rounded-full p-5 mb-4 shadow-inner flex items-center justify-center">
                <FaEnvelope className="w-12 h-12 text-[#013024]" />
              </div>
              <div className="w-full flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2 text-[#013024]">
                  Email
                </h3>
                <span className="text-gray-700 mb-2 block break-all">
                  info@earningsync.com
                </span>
                <span className="bg-[#013024] text-white px-4 py-1 rounded-full font-semibold group-hover:underline transition text-sm">
                  Send Email
                </span>
              </div>
            </motion.a>
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/97366386602"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 #a7ec4f33" }}
              className="flex flex-col items-center justify-center h-full rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#f7fff6] border border-[#a7ec4f]/30 transition-all duration-300 hover:-translate-y-1 hover:border-[#a7ec4f] group text-center p-8"
            >
              <div className="bg-[#a7ec4f]/20 rounded-full p-5 mb-4 shadow-inner flex items-center justify-center">
                <FaWhatsapp className="w-12 h-12 text-[#25D366]" />
              </div>
              <div className="w-full flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2 text-[#013024]">
                  WhatsApp
                </h3>
                <span className="text-gray-700 mb-2 block">+973 6638 6602</span>
                <span className="bg-[#25D366] text-white px-4 py-1 rounded-full font-semibold group-hover:underline transition text-sm">
                  Chat on WhatsApp
                </span>
              </div>
            </motion.a>
            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/company/earningsync"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 #a7ec4f33" }}
              className="flex flex-col items-center justify-center h-full rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#f7fff6] border border-[#a7ec4f]/30 transition-all duration-300 hover:-translate-y-1 hover:border-[#a7ec4f] group text-center p-8"
            >
              <div className="bg-[#a7ec4f]/20 rounded-full p-5 mb-4 shadow-inner flex items-center justify-center">
                <FaLinkedin className="w-12 h-12 text-[#0077b5]" />
              </div>
              <div className="w-full flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2 text-[#013024]">
                  LinkedIn
                </h3>
                <span className="text-gray-700 mb-2 block break-all">
                  linkedin.com/company/earningsync
                </span>
                <span className="bg-[#0077b5] text-white px-4 py-1 rounded-full font-semibold group-hover:underline transition text-sm">
                  View Profile
                </span>
              </div>
            </motion.a>
            {/* WhatsApp Community */}
            <motion.a
              href="https://chat.whatsapp.com/L0OdHDeFk96AAjSVbJ87Ii"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 #a7ec4f33" }}
              className="flex flex-col items-center justify-center h-full rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#f7fff6] border border-[#a7ec4f]/30 transition-all duration-300 hover:-translate-y-1 hover:border-[#a7ec4f] group text-center p-8"
            >
              <div className="bg-[#a7ec4f]/20 rounded-full p-5 mb-4 shadow-inner flex items-center justify-center">
                <FaUsers className="w-12 h-12 text-[#25D366]" />
              </div>
              <div className="w-full flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2 text-[#013024]">
                  WhatsApp Community
                </h3>
                <span className="text-gray-700 mb-2 block text-sm">
                  Get updates & support from our team and members.
                </span>
                <span className="bg-[#25D366] text-white px-4 py-1 rounded-full font-semibold group-hover:underline transition text-sm">
                  Join Group
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
