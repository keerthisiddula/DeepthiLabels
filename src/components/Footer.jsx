import React from 'react';
import { socialMedia } from '../constants'; // Array with {name, icon, link}

const Footer = () => (
  <footer className="w-full border-t border-gray-200 py-10">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start px-4">
      {/* Left: Business Details */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h3 className="text-xl font-semibold text-white mb-2">Deepthi Labels</h3>
        <p className="text-sm text-gray-500">
          Delivering excellence in labeling solutions<br />
          Focus on quality, durability, and customer satisfaction.
        </p>
        {/* Optional: Social Icons below details */}
        <div className="flex gap-3 mt-4">
          {socialMedia.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition"
              aria-label={item.name}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      {/* Right: Navigation Links */}
      <div className="md:w-1/2 flex flex-col items-start md:items-end">
        <nav>
          <ul className="flex flex-col md:flex-row gap-4 text-sm font-medium">
            <li>
              <a href="#home" className="text-gray-700 hover:text-blue-500 py-2 block">
                Home
              </a>
            </li>
            <li>
              <a href="#aboutus" className="text-gray-700 hover:text-blue-500 py-2 block">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-700 hover:text-blue-500 py-2 block">
                Services
              </a>
            </li>
            <li>
              <a href="#contactus" className="text-gray-700 hover:text-blue-500 py-2 block">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-xs text-gray-400 mt-6">
          &copy; 2014 Deepthi Labels. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
