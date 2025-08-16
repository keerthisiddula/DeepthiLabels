import React from 'react';

import tscLogo from '../assets/tsc.png';
import zebraLogo from '../assets/zebra.png';
import datamaxLogo from '../assets/datamax.png';
import CitizenLogo from '../assets/Citizen-logo.png';
import motoLogo from '../assets/moto.png';
import dlLogo from '../assets/dl1.png';

const Brands = () => {
  const printerBrands = [
    { id: 1, name: 'TSC Printronix', logo: tscLogo },
    { id: 2, name: 'Zebra', logo: zebraLogo },
    { id: 3, name: 'Datamaxoniel', logo: datamaxLogo },
    { id: 4, name: 'Citizen', logo: CitizenLogo },
  ];

  const scannerBrands = [
    { id: 1, name: 'Motorola', logo: motoLogo },
    { id: 2, name: 'DataLogic', logo: dlLogo },
    { id: 3, name: 'Zebra', logo: zebraLogo },
  ];

  return (
    <section id="brands" className="my-16 px-6 max-w-7xl mx-auto">
      {/* Printers Section */}
      <div>
        <h2 className="text-3xl font-extrabold mt-6 sm:mt-20 mb-4 text-center text-gradient bg-gradient-to-r from-green-400 to-teal-600">
          Trusted Printer Brands
        </h2>


        <div className="w-24 h-1 mx-auto mb-5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500" />

        <p className="text-gray-400 max-w-3xl mx-auto mb-10 text-center text-[18px] leading-relaxed">
          We collaborate with industry-leading printer brands to ensure you get reliable, high-performance printing solutions tailored to your business needs.
        </p>

        <div className="flex justify-center gap-4 sm:gap-8 flex-wrap max-w-4xl mx-auto">
          {printerBrands.map((brand) => (
            <div
              key={brand.id}
              className="flex justify-center items-center rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{ width: '180px', height: '120px' }}
              title={brand.name}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scanners Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-extrabold mb-4 text-center text-gradient bg-gradient-to-r from-green-400 to-teal-600">
          Leading Scanner Brands
        </h2>

        <div className="w-24 h-1 mx-auto mb-5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500" />

        <p className="text-gray-400 max-w-3xl mx-auto mb-10 text-center text-[18px] leading-relaxed">
          Our selection of premium scanners ensures crisp, efficient, and accurate digitization to streamline your document management process.
        </p>

        <div className="flex justify-center gap-4 sm:gap-8 flex-wrap max-w-3xl mx-auto">
          {scannerBrands.map((brand) => (
            <div
              key={brand.id}
              className="flex justify-center items-center rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{ width: '180px', height: '120px' }}
              title={brand.name}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
