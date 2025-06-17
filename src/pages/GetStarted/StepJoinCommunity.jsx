import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import qrImage from "../../assets/whatsappqr.jpg";

const whatsappLink = "https://chat.whatsapp.com/L0OdHDeFk96AAjSVbJ87Ii";

export default function StepJoinCommunity({ openStep }) {
  return (
    <AnimatePresence>
      {openStep === 3 && (
        <motion.div
          key="join-content"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="px-6 md:px-12 py-6"
        >
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
            
            {/* ── Instructions Column ── */}
            <div className="flex-1 max-w-xl flex flex-col items-center md:items-start">
              <h4 className="flex items-center gap-2 text-xl font-bold mb-4 text-[#013024]">
                <FaCheckCircle className="text-[#a7ec4f]" />
                Join our WhatsApp Community
              </h4>
              <p className="text-gray-800 text-lg mb-6 text-center md:text-left">
                Click the link below or scan the QR code to join our WhatsApp
                community and get the latest updates.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] text-white font-bold px-6 py-3 rounded-full shadow hover:bg-[#128C7E] transition text-lg"
              >
                Join WhatsApp Community
              </a>
            </div>

            {/* ── QR Code Column ── */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-xs md:max-w-sm rounded-xl overflow-hidden shadow-lg border border-[#a7ec4f]/30 bg-white flex flex-col items-center">
                <img
                  src={qrImage}
                  alt="WhatsApp Community QR Code"
                  className="w-full h-auto object-contain p-4"
                  style={{ background: "#f8fafc" }}
                />
                <span className="text-sm text-[#013024] mt-2 mb-4 px-4 text-center block">
                  Scan with WhatsApp camera to join via QR code
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
