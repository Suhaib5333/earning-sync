import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#013024] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">EarningSync</h3>
            <p className="text-gray-300">
              Your trusted partner in copy trading success
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-[#a7ec4f]">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#a7ec4f]">About Us</Link></li>
              <li><Link to="/get-started" className="text-gray-300 hover:text-[#a7ec4f]">Get Started</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-300 hover:text-[#a7ec4f]">FAQs</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#a7ec4f]">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#a7ec4f]">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#a7ec4f]">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#a7ec4f]">
                <FaTelegram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} EarningSync. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;