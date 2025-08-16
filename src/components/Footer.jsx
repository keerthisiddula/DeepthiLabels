// Footer.jsx
import React from 'react';
import { socialMedia } from '../constants';

const Footer = () => {
  return (
    <footer className=" text-gray-300 py-10 w-full">
      <div className="text-center px-4 max-w-screen-xl mx-auto">
        {/* Company Info */}
        <div className="mb-6">
          <h3 className="text-white text-xl font-semibold mb-4">Deepthi Labels</h3>
          <p className="text-sm leading-relaxed">
            Delivering excellence in labeling solutions with a focus on quality, durability, and customer satisfaction.
          </p>
        </div>

        {/* Social Media */}
        <div className="mb-6">
          <h4 className="text-white text-lg font-medium mb-4">Follow Us</h4>
          <div className="flex justify-center space-x-4">
            {socialMedia.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="text-gray-400 hover:text-white transition text-xl"
              >
                {React.createElement(social.icon)}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-sm">
          &copy; 2014 Deepthi Labels. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
