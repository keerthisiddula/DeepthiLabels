import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { FaTags, FaRocket, FaIndustry } from "react-icons/fa";

const Welcome = ({ onGetStarted }) => {
  const features = [
    {
      icon: <FaTags className="text-pink-400 text-2xl mb-2" />,
      title: "Custom Labels",
      desc: "Tailor-made labels that align with your brand identity and purpose.",
    },
    {
      icon: <FaRocket className="text-blue-400 text-2xl mb-2" />,
      title: "Boost Efficiency",
      desc: "Accelerate operations with advanced printing and scanning tech.",
    },
    {
      icon: <FaIndustry className="text-green-400 text-2xl mb-2" />,
      title: "Industry Focused",
      desc: "Serving pharma, retail, logistics, and more with premium quality.",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes blackGradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <motion.div
        className="fixed top-0 left-0 w-full h-full text-center z-50 overflow-y-auto sm:overflow-hidden"
        style={{
          background:
            "linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)",
          backgroundSize: "300% 300%",
          animation: "blackGradientAnimation 20s ease infinite",
          color: "#fff",
          fontFamily:
            "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        {/* Inner wrapper for spacing */}
        <div className="flex flex-col items-center px-6 pt-10 min-h-screen justify-start sm:justify-center">
          <motion.img
            src={logo}
            alt="Company Logo"
            className="w-24 h-24 rounded-full shadow-2xl mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          />

          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight"
            style={{
              background:
                "linear-gradient(90deg, #ffffff 10%, #6ee7b7 50%, #3b82f6 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            Welcome to <br /> Deepthi Labels
          </motion.h1>

          <motion.p
            className="max-w-xl text-white mb-8"
            style={{ fontSize: "18px", lineHeight: 1.8, fontWeight: 500 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Empowering your business with cutting-edge technology and creative
            design.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-md shadow-md"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7 },
                  },
                }}
              >
                <div className="flex flex-col items-center">
                  {feature.icon}
                  <h4 className="text-lg font-semibold mt-2 text-white">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-200 mt-1 text-center">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 mb-10 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full font-semibold"
            onClick={onGetStarted}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default Welcome;
