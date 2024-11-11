import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const CombinedFooter: React.FC = () => {
  return (
    <footer className=" py-9 px-9">
      {/* Top Part: Logo and Social Icons */}
      <div className="container  ">
        <div className="my-9 footer-top-inner flex justify-between items-center">
          <a href="/" className="text-2xl font-semibold text-gray-800">
            Lovely
          </a>
          <div className="flex space-x-4 ml-8">
            <a href="#" className="text-green-600 hover:text-green-800">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-green-600 hover:text-green-800">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-green-600 hover:text-green-800">
              <FaTwitter size={24} />
            </a>
          </div>
     </div>
      <div className="hline mb-9 w-full h-[2px] bg-[#E6E6E6]"></div>
      </div>

      {/* Bottom Part: Info Columns and Subscribe Form */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-12 text-gray-800">
        {/* Company Info Column */}
        <div>
          <h3 className="font-semibold mb-4">Company Info</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-green-600 transition-colors">About Us</a></li>
            <li><a href="/carrier" className="hover:text-green-600 transition-colors">Carrier</a></li>
            <li><a href="/hiring" className="hover:text-green-600 transition-colors">We are hiring</a></li>
            <li><a href="/blog" className="hover:text-green-600 transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-green-600 transition-colors">About Us</a></li>
            <li><a href="/carrier" className="hover:text-green-600 transition-colors">Carrier</a></li>
            <li><a href="/hiring" className="hover:text-green-600 transition-colors">We are hiring</a></li>
            <li><a href="/blog" className="hover:text-green-600 transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* Features Column */}
        <div>
          <h3 className="font-semibold mb-4">Features</h3>
          <ul className="space-y-2">
            <li><a href="/business-marketing" className="hover:text-green-600 transition-colors">Business Marketing</a></li>
            <li><a href="/user-analytic" className="hover:text-green-600 transition-colors">User Analytic</a></li>
            <li><a href="/live-chat" className="hover:text-green-600 transition-colors">Live Chat</a></li>
            <li><a href="/unlimited-support" className="hover:text-green-600 transition-colors">Unlimited Support</a></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="/ios-android" className="hover:text-green-600 transition-colors">iOS & Android</a></li>
            <li><a href="/watch-a-demo" className="hover:text-green-600 transition-colors">Watch a Demo</a></li>
            <li><a href="/customers" className="hover:text-green-600 transition-colors">Customers</a></li>
            <li><a href="/api" className="hover:text-green-600 transition-colors">API</a></li>
          </ul>
        </div>

        {/* Get In Touch Column */}
        <div className="lg:col-span-2">
          <h3 className="font-bold text-xl mb-4">Get In Touch</h3>
          <form className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-grow px-4 py-2 focus:outline-none bg-white"
            />
            <button className="bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition-colors">
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-4">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </footer>
  );
};

export default CombinedFooter;