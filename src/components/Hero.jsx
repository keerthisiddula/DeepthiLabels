import { motion } from "framer-motion";
import { useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Stats from "./Stats";

const sentences = [
  { id: 1, text: "Creating", className: "text-white" },
  { id: 2, text: "Custom Labels", className: "text-gradient" },
  { id: 3, text: "with precision.", className: "text-white" },
];

const paragraph =
  "Delivering high-quality, tailor-made labels that bring your brand’s vision to life with unmatched accuracy and style.";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const sentenceVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", delay: 1.8 },
  },
};

const injectStyles = () => {
  const style = document.createElement("style");
  style.innerHTML = `
    .hero-background {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: transparent !important;
      position: relative;
      overflow: hidden;
    }

    .glass-box {
      padding: 1.5rem;
      border-radius: 1rem;
      text-align: center;
      width: 100%;
      max-width: 980px;
      margin-top: 10px;
      margin-bottom: 0; /* Remove bottom margin */
    }

    @media (min-width: 640px) {
      .glass-box {
        padding: 2.5rem;
        margin-top: 20px;
        margin-bottom: 0; /* Prevent gap on tablets/desktops */
      }
    }

    .text-gradient {
      background: linear-gradient(to right, #60a5fa, #a78bfa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
    }
  `;
  document.head.appendChild(style);
};

const Hero = () => {
  useEffect(() => {
    injectStyles();
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="hero-background px-5 sm:px-6 relative overflow-y-auto sm:overflow-visible pb-12 sm:pb-0">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: { value: "transparent" } },
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, color: "#999", distance: 100 },
            move: { enable: true, speed: 1 },
            number: { value: 40 },
            size: { value: { min: 1, max: 3 } },
            opacity: { value: 0.5 },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Content */}
      <motion.div
        className="glass-box relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mt-20 sm:mt-28 md:mt-16">
          {sentences.map(({ id, text, className }, index) => (
            <motion.h1
  key={id}
  className={`text-center font-bold leading-snug py-1
    text-[27px] sm:text-6xl md:text-8xl
    mb-1 md:mb-3 ${className}
    max-w-[90%] mx-auto
    whitespace-normal
    break-words
  `}
  variants={sentenceVariants}
>
  {text}
</motion.h1>



          ))}
        </div>


        <motion.p
          className="text-gray-300 text-[15px] sm:text-base leading-relaxed mt-6 sm:mt-10 lg:mt-8 mb-6 mx-auto px-4 max-w-[800px] sm:max-w-[70%]"
          variants={paragraphVariants}
        >
          {paragraph}
        </motion.p>


        <motion.a
          href="#contactus"
          className="inline-block px-5 py-3 lg:mt-1 lg:mb-1 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-base sm:text-lg font-semibold transition hover:opacity-90 mb-0"
          whileHover={{ scale: 1.05 }}
        >
          Contact Us
        </motion.a>
      </motion.div>

      {/* Stats - with no gap on desktop/tablet */}
      <div className="mt-0 mb-1 sm:mb-4 w-full px-4 sm:px-8 max-w-5xl mx-auto z-10 relative">
        <Stats />
      </div>

    </section>
  );
};

export default Hero;
