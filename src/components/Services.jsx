import React from 'react';
import { motion } from 'framer-motion';

const servicesList = [
  {
    id: 1,
    title: 'Custom Label Design',
    desc: 'We select premium materials and finishes to enhance the look and durability of your labels. Whether you need waterproof, scratch-resistant, or eco-friendly options, we ensure that your labels not only look great but also perform exceptionally.',
  },
  {
    id: 2,
    title: 'Technical Support & Maintenance',
    desc: 'We recognize that seamless operation of your labeling equipment is crucial to your business. Our Technical Support and Maintenance services are designed to keep your equipment running smoothly and efficiently, minimizing downtime and ensuring peak performance.',
  },
  {
    id: 3,
    title: 'Label Printing Services',
    desc: 'We utilize advanced printing technology and premium materials to produce labels that are sharp, vibrant, and durable. Our prints maintain their integrity and appearance even in challenging conditions.',
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.3,
      ease: 'easeOut',
    },
  }),
};

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 font-sans text-white">
      <section>
        <h2 className="text-3xl font-extrabold mt-16 mb-4 text-center text-gradient bg-gradient-to-r from-purple-400 to-pink-600">
          Our Services
        </h2>
        <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"></div>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-stretch">
          {servicesList.map(({ id, title, desc }, index) => (
            <motion.div
              key={id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-gray-900 rounded-3xl p-8 w-full md:w-1/3 text-center shadow-2xl cursor-pointer transform transition duration-300 hover:scale-105"
              role="article"
              aria-label={title}
            >
              <h5 className="text-2xl font-semibold text-purple-400 mb-4 tracking-wide">
                {title}
              </h5>
              <p className="text-gray-300 text-base leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
