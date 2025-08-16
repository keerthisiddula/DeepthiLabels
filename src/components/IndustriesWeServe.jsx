import React from 'react';
import { motion } from 'framer-motion';

import retail from '../assets/retail.png';
import pharma from '../assets/pharma.png';
import man from '../assets/man.png';
import ware from '../assets/ware.png';

const industries = [
  {
    name: 'Retail',
    description:
      'Enhancing retail operations with innovative labeling and barcode solutions that optimize inventory accuracy, accelerate checkout processes, and improve customer experience across all sales channels.',
    image: retail,
  },
  {
    name: 'Pharmaceuticals',
    description:
      'Providing precise tracking and labeling systems that ensure regulatory compliance, enhance product safety, and streamline supply chain management in the pharmaceutical sector.',
    image: pharma,
  },
  {
    name: 'Manufacturing',
    description:
      'Delivering robust solutions for real-time production tracking, quality assurance, and asset management to boost operational efficiency and reduce downtime in manufacturing facilities.',
    image: man,
  },
  {
    name: 'Warehousing',
    description:
      'Optimizing warehouse operations with advanced barcode and labeling technologies to improve inventory control, accelerate order fulfillment, and maximize storage utilization.',
    image: ware,
  },
];

// Animation variant
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut',
    },
  }),
};

const IndustriesWeServe = () => {
  return (
    <section id="industries-we-serve" className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mt-12 mb-3 text-gradient bg-gradient-to-r from-blue-400 to-purple-600">
          Industries We Serve
        </h2>
        <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"></div>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg">
          We provide tailored labeling and barcode solutions across diverse industries to enhance efficiency and accuracy.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ name, description, image }, index) => (
            <motion.div
              key={name}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
              aria-label={`${name} industry`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <img
                src={image}
                alt={`${name} industry`}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                {name}
              </h3>
              <p className="text-white leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
