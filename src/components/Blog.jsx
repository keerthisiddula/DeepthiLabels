import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "How to Choose the Right Barcode Printer",
    excerpt:
      "Learn the key factors to consider when choosing a barcode printer including print technology, resolution, connectivity, and more.",
    searchQuery: "how to choose the right barcode printer for small business",
  },
  {
    title: "Benefits of Custom Labels for Small Businesses",
    excerpt:
      "Explore how custom labels can boost brand identity, enhance shelf presence, and streamline operations for startups and local businesses.",
    searchQuery: "benefits of custom labels for small businesses",
  },
  {
    title: "Smart Labels & QR Codes: The Future of Packaging",
    excerpt:
      "Smart labels embedded with QR codes and RFID tech are transforming how brands interact with customers. Discover why they’re the future.",
    searchQuery: "smart labels QR codes in modern packaging",
  },
  {
    title: "Top Barcode Mistakes & How to Avoid Them",
    excerpt:
      "Barcode printing and scanning errors can cost businesses thousands. Learn common mistakes and best practices to avoid them.",
    searchQuery: "barcode printing scanning mistakes and solutions",
  },
  {
    title: "Label Design Tips That Actually Convert",
    excerpt:
      "Want labels that sell? From color theory to layout, here are proven design principles that grab attention and drive conversions.",
    searchQuery: "label design tips that increase product sales",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Blog = () => {
  return (
    <motion.section
      className="py-16 px-6 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-extrabold mb-3 mt-20 text-center text-gradient bg-gradient-to-r from-green-400 to-teal-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Latest Blogs
      </motion.h2>

      <motion.div
        className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />

      <motion.div
        className="flex flex-wrap gap-6 justify-center max-w-6xl mx-auto"
        variants={containerVariants}
      >
        {blogPosts.map(({ title, excerpt, searchQuery }, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl p-6 max-w-sm w-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300"
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              {title}
            </h3>
            <p className="text-gray-200 mb-4">{excerpt}</p>
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Read More →
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Blog;
