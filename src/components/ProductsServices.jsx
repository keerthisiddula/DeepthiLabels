import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { printerIcon, labelIcon, supportIcon } from '../assets';

const services = [
  {
    icon: printerIcon,
    title: 'Printers & Scanners',
    description: `Our barcode printers offer high-quality, clear prints with consistent performance.
Seamless scanner integration for better productivity and accuracy.`,
  },
  {
    icon: labelIcon,
    title: 'Custom Labels',
    description: `We specialize in providing custom labels that perfectly align with your brand’s identity and functional requirements.
We customize the labels as per the end-users requirements to enhance your product’s presentation.`,
  },
  {
    icon: supportIcon,
    title: 'Service Support',
    description: `Our Service Support is designed to ensure that your labeling equipment and solutions operate at peak performance, minimizing downtime and maximizing efficiency.`,
  },
];

const ProductsServices = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    document.documentElement.style.scrollBehavior = 'auto';
    navigate('/explore');
    window.scrollTo(0, 0);
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 100);
  };

  const getCardAnimation = (index) => {
    if (index === 0) return { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
    if (index === 1) return { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };
    return { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  };

  return (
    <section className="py-10 px-6 min-h-screen">
      <motion.h2
        className="text-3xl font-extrabold mt-19 mb-4 text-center leading-relaxed text-gradient bg-gradient-to-r from-green-400 to-teal-600"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Your go-to solution for high-quality labeling products and services.
      </motion.h2>

      <motion.div
        className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {services.map((service, index) => (
          <motion.div
  key={index}
  initial="hidden"
  whileInView="visible"
  variants={getCardAnimation(index)}
  transition={{ duration: 0.7, delay: index * 0.2 }}
  viewport={{ once: true }}
  whileHover={{
    scale: 1.05,
    transition: { duration: 0.25, ease: 'easeOut' }, // 👈 fast hover
  }}
  className={`w-full max-w-sm p-6 rounded-xl bg-gray-800 shadow-lg text-white hover:bg-gray-800 
  transition-all duration-300 ease-in-out 
  ${services.length === 3 && index === 2 ? 'sm:col-span-2 sm:justify-self-center lg:col-span-1' : ''}`}
>


            <div className="flex justify-center mb-3">
              <img
                src={service.icon}
                alt={service.title}
                className="w-50 h-48 object-cover rounded-2xl shadow-md"
              />
            </div>
            <h3 className="text-[24px] font-bold mt-1 mb-3 text-center">{service.title}</h3>
            <p className="whitespace-pre-line text-center text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <button
          onClick={handleExploreClick}
          className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-xl"
        >
          Explore Now
        </button>
      </motion.div>
    </section>
  );
};

export default ProductsServices;
