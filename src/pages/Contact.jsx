import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaUsers } from "react-icons/fa";
import emailjs from "@emailjs/browser";
emailjs.init("NqVyP1tbFm3VvkKM3");

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // Controlled input states for floating label logic
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Track focus for each field
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    message: false,
  });

  // EmailJS credentials
  const EMAILJS_SERVICE_ID = "service_9jhmyoj";
  const EMAILJS_TEMPLATE_ID = "template_79lewzz";
  const EMAILJS_PUBLIC_KEY = "NqVyP1tbFm3VvkKM3";

  const getCurrentTime = () => new Date().toLocaleString();

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);

    const templateParams = {
      name,
      email,
      message,
      time: getCurrentTime(),
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSent(true);
          setSending(false);
          setName("");
          setEmail("");
          setMessage("");
          form.current.reset();
        },
        () => {
          setError("Failed to send. Please try again later.");
          setSending(false);
        }
      );
  };

  // Helper for floating label: floats if focused or has value
  const floatLabel = (field, value) =>
    focus[field] || value
      ? "-top-4 left-3 text-xs px-1 bg-transparent text-[#013024] z-10"
      : "top-3 left-4 text-base text-[#013024]/60 bg-transparent z-0";

  return (
    <div className="bg-[#f7fff6] min-h-screen">
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

      {/* Contact Form Section */}
      <section className="py-10 w-full bg-gradient-to-br from-[#f7fff6] via-[#eaffea] to-[#e6f9e6]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative bg-white/80 backdrop-blur-lg border-2 border-[#013024] rounded-3xl shadow-2xl p-10 flex flex-col gap-8"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(167,236,79,0.15), 0 1.5px 8px 0 #01302411",
            }}
          >
            {/* Decorative Gradient Accent */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-tr from-[#a7ec4f] via-[#eaffea] to-[#013024] opacity-30 rounded-full blur-2xl pointer-events-none"></div>
            <h2 className="text-4xl font-extrabold text-[#013024] mb-2 text-center tracking-tight drop-shadow-lg">
              Get in Touch
            </h2>
            <p className="text-lg text-[#013024]/80 text-center mb-2">
              We’d love to hear from you. Fill out the form and our team will
              respond promptly.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Name Field */}
              <div className="relative flex-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setFocus((f) => ({ ...f, name: true }))}
                  onBlur={() => setFocus((f) => ({ ...f, name: false }))}
                  className="peer w-full px-4 py-3 rounded-xl border-2 border-[#013024] bg-white/60 text-[#013024] font-medium focus:border-[#a7ec4f] focus:ring-2 focus:ring-[#a7ec4f]/30 outline-none transition-all placeholder-transparent"
                  placeholder="Your Name"
                  autoComplete="off"
                />
                <label
                  htmlFor="name"
                  className={`absolute transition-all duration-200 font-semibold pointer-events-none rounded-md ${floatLabel(
                    "name",
                    name
                  )}`}
                >
                  Your Name
                </label>
              </div>
              {/* Email Field */}
              <div className="relative flex-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocus((f) => ({ ...f, email: true }))}
                  onBlur={() => setFocus((f) => ({ ...f, email: false }))}
                  className="peer w-full px-4 py-3 rounded-xl border-2 border-[#013024] bg-white/60 text-[#013024] font-medium focus:border-[#a7ec4f] focus:ring-2 focus:ring-[#a7ec4f]/30 outline-none transition-all placeholder-transparent"
                  placeholder="Your Email"
                  autoComplete="off"
                />
                <label
                  htmlFor="email"
                  className={`absolute transition-all duration-200 font-semibold pointer-events-none rounded-md ${floatLabel(
                    "email",
                    email
                  )}`}
                >
                  Your Email
                </label>
              </div>
            </div>
            {/* Message Field */}
            <div className="relative">
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => setFocus((f) => ({ ...f, message: true }))}
                onBlur={() => setFocus((f) => ({ ...f, message: false }))}
                className="peer w-full px-4 py-3 rounded-xl border-2 border-[#013024] bg-white/60 text-[#013024] font-medium focus:border-[#a7ec4f] focus:ring-2 focus:ring-[#a7ec4f]/30 outline-none transition-all placeholder-transparent resize-none"
                placeholder="Your Message"
              />
              <label
                htmlFor="message"
                className={`absolute transition-all duration-200 font-semibold pointer-events-none rounded-md ${floatLabel(
                  "message",
                  message
                )}`}
              >
                Your Message
              </label>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-[#013024] hover:bg-[#025c3a] text-[#a7ec4f] font-bold py-3 rounded-xl shadow-lg transition-all duration-200 text-lg flex items-center justify-center gap-2 border-2 border-[#013024] tracking-wide"
              style={{
                fontSize: "1.15rem",
                boxShadow: "0 2px 12px 0 #01302422",
                textShadow: "0 1px 0 #00000022",
              }}
            >
              {sending ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-[#a7ec4f]"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#a7ec4f"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="#a7ec4f"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="#a7ec4f"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22 2L11 13"
                      stroke="#a7ec4f"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L15 22L11 13L2 9L22 2Z"
                      stroke="#a7ec4f"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Send Message
                </>
              )}
            </button>
            {/* Success/Error Messages */}
            {sent && (
              <div className="text-green-600 text-center font-semibold mt-2">
                Thank you! Your message has been sent.
              </div>
            )}
            {error && (
              <div className="text-red-600 text-center font-semibold mt-2">
                {error}
              </div>
            )}
          </motion.form>
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
              className="flex flex-col items-center justify-center h-full rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#f7fff6] border-2 border-[#013024] transition-all duration-300 hover:-translate-y-1 hover:border-[#a7ec4f] group text-center p-8"
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
              className="flex flex-col items-center justify-center h-full rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#f7fff6] border-2 border-[#013024] transition-all duration-300 hover:-translate-y-1 hover:border-[#a7ec4f] group text-center p-8"
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
              className="flex flex-col items-center justify-center h-full rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#f7fff6] border-2 border-[#013024] transition-all duration-300 hover:-translate-y-1 hover:border-[#a7ec4f] group text-center p-8"
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
              className="flex flex-col items-center justify-center h-full rounded-2xl shadow-xl bg-gradient-to-br from-white to-[#f7fff6] border-2 border-[#013024] transition-all duration-300 hover:-translate-y-1 hover:border-[#a7ec4f] group text-center p-8"
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
