import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="aboutus" className="text-white py-16 px-6 md:px-20 text-base">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold mt-18 mb-4 text-center text-gradient bg-gradient-to-r from-green-400 to-teal-600"
        >
          About Us
        </motion.h2>

        <motion.div
          className="w-24 h-1 font-sans mx-auto mb-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Introduction */}
        <motion.p
          className="text-lg leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Hi, I'm <span className="font-semibold text-blue-500">Raju Siddula</span>, the Business Head of <span className="font-semibold text-blue-400">Deepthi Labels</span>.
          With over <span className="font-semibold">20+ years of experience</span> in the labeling industry,
          I started this business in <span className="font-semibold">2014</span> with a vision to provide high-quality, reliable
          total labeling solutions that exceed customer expectations. Thank you for choosing us!
        </motion.p>

        {/* Business Profile */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gradient bg-gradient-to-r from-green-400 to-teal-600">
            Business Profile
          </h3>
          <p className="text-base leading-relaxed">
            <span className="font-semibold">M/s. DEEPTHI LABELS</span> is a label manufacturing company based out of
            Hyderabad, serving multiple industries across India. We supply all types of self-adhesive labels,
            including specialty labels tailored for diverse end-user applications.
          </p>
        </motion.div>

        {/* Mission & Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gradient bg-gradient-to-r from-green-400 to-teal-600">
            Our Mission & Values
          </h3>
          <p className="text-base leading-relaxed mb-4">
            Our mission is to be the <span className="font-semibold">premier choice</span> for labeling solutions by offering
            exceptional products, outstanding customer service, and innovative solutions.
          </p>
          <motion.ul
            className="list-disc list-inside space-y-2 text-base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {[
              {
                key: 'Quality',
                text: 'Ensuring the highest standards in our products and services.',
              },
              {
                key: 'Innovation',
                text: 'Continuously improving and adopting new technologies.',
              },
              {
                key: 'Customer Satisfaction',
                text: 'Providing unparalleled support and service.',
              },
              {
                key: 'Integrity',
                text: 'Maintaining transparency and ethical practices.',
              },
            ].map(({ key, text }) => (
              <motion.li
                key={key}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                }}
              >
                <span className="font-semibold text-blue-400">{key}:</span> {text}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
