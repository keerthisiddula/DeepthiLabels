import React from 'react';

import barcodeprinter from '../assets/barcodeprinter.png';
import barcodescanner from '../assets/barcodescanner.png';
import barcodeplain from '../assets/barcodeplain.png';
import barcodeprinted from '../assets/barcodeprinted.png';
import multicolorlabel from '../assets/multicolorlabel.png';
import polysynth from '../assets/polysynth.png';
import ttribbon from '../assets/ttribbon.png';
import spec from '../assets/spec.png';

const printersAndScanners = [
  {
    id: 1,
    title: 'Barcode Printers',
    img: barcodeprinter,
    bio: 'Our high-performance Barcode printers deliver exceptional print quality and durability. Ideal for various labeling needs.',
  },
  {
    id: 2,
    title: 'Barcode Scanners',
    img: barcodescanner,
    bio: 'Our Barcode Scanners ensures rapid and precise barcode recognition. Elevate Your Efficiency with Our Barcode scanners.',
  },
];

const labelVariants = [
  {
    id: 1,
    name: 'Barcode Plain & Printed Labels',
    img: barcodeprinted,
    bio: 'Versatile and Reliable Barcode Labels for Every Need. Our barcode labels, available in both plain and printed formats, offer unparalleled flexibility and efficiency for your labeling requirements.',
  },
  {
    id: 2,
    name: 'Multicolor Roll Labels',
    img: multicolorlabel,
    bio: 'Brighten Up Your Labels with Our Multicolour Rolls. Our multicolour labels in roll form offer a vibrant and versatile solution for all your labeling needs. Perfect for adding a splash of color to your products!',
  },
  {
    id: 3,
    name: 'Polyester / Synthetic Labels',
    img: polysynth,
    bio: 'Durable and Versatile Polyester/Synthetic Labels for Every Application. Made from high-quality polyester or synthetic materials, these labels are resistant to water, chemicals, ensuring long-lasting performance even in harsh conditions.',
  },
  {
    id: 4,
    name: 'Thermal Transfer Ribbons',
    img: ttribbon,
    bio: 'Precision and Quality with Our Thermal Transfer Ribbons. These ribbons deliver high-quality prints that are both durable and vibrant, ensuring your labels and tags look professional and remain legible over time.',
  },
  {
    id: 5,
    name: 'Speciality Labels',
    img: spec,
    bio: 'Our Speciality Tamper Evident Labels are engineered to offer unparalleled protection against unauthorized access and tampering, making them a perfect choice for businesses that prioritize security and integrity.',
  },
];

const ExploreDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 font-sans text-white">

      {/* Intro Section */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-70 rounded-xl shadow-2xl p-8 max-w-4xl mx-auto mt-16 mb-12 backdrop-blur-md border border-gray-700">
        <p className="text-lg text-center text-gray-300 leading-relaxed">
          Empower your business with advanced barcode and labeling technology built for speed, precision, and durability.
          From high-performance barcode printers to versatile labeling solutions, we provide everything you need to streamline your operations.
          Discover products that combine innovation, quality, and reliability — crafted to support businesses across every industry.
        </p>
      </div>

      {/* Section: Barcode Printers & Scanners */}
      <section className="mb-20">
        <h2 className="text-3xl font-extrabold mt-14 mb-4 text-center text-white">
          Barcode Printers & Scanners
        </h2>
        <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {printersAndScanners.map(({ id, title, img, bio }) => (
            <div
              key={id}
              className="bg-gray-900 rounded-xl shadow-2xl p-6 flex flex-col items-center text-center cursor-pointer transform transition duration-500 hover:scale-105"
              role="article"
              aria-label={title}
            >
              <img
                src={img}
                alt={title}
                className="w-48 h-48 object-cover rounded-lg mb-6 drop-shadow-lg"
                loading="lazy"
              />
              <h3 className="text-2xl font-semibold text-purple-400 mb-3 tracking-wide">
                {title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed max-w-md">
                {bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Self-Adhesive Labels */}
      <section className="mb-20">
        <h2 className="text-3xl font-extrabold mt-20 mb-4 text-center text-white">
          Self-Adhesive Labels
        </h2>
        <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500" />

        <div className="flex flex-wrap justify-center gap-12">
          {labelVariants.map(({ id, name, img, bio }) => (
            <div
              key={id}
              className="bg-gray-900 rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center cursor-pointer transform transition duration-500 hover:scale-105 w-full sm:w-1/2 lg:w-1/3 max-w-xs"
              role="article"
              aria-label={name}
            >
              <img
                src={img}
                alt={name}
                className="w-44 h-44 object-contain mb-6 rounded-lg drop-shadow-md"
                loading="lazy"
              />
              <h4 className="text-2xl font-semibold text-purple-400 mb-3 tracking-wide">
                {name}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                {bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExploreDetails;
