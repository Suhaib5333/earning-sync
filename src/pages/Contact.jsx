import { motion } from 'framer-motion';
import { FaEnvelope, FaTelegram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen">
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
              Get in <span className="text-[#a7ec4f]">Touch</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              We're here to answer any questions you may have
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#013024] mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaEnvelope className="w-6 h-6 text-[#013024] mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-600">support@earningsync.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaTelegram className="w-6 h-6 text-[#013024] mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">Telegram</h3>
                    <p className="text-gray-600">@EarningSync</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaTwitter className="w-6 h-6 text-[#013024] mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">Twitter</h3>
                    <p className="text-gray-600">@EarningSync</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#013024] focus:border-[#013024]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#013024] focus:border-[#013024]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#013024] focus:border-[#013024]"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#013024] focus:border-[#013024]"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#013024] mb-6">
              Our Support Hours
            </h2>
            <p className="text-xl text-gray-600">
              We're available 24/7 to assist you with any questions or concerns
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;