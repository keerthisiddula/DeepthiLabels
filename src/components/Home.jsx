// src/components/Home.jsx
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Hero from "./Hero";
import ProductsServices from "./ProductsServices";
import Stats from "./Stats";
import AboutUs from "./AboutUs";
import ClientsMarquee from "./ClientsMarquee";
import ContactUs from "./ContactUs";
import InstallationSupport from "./InstallationSupport";
import Brands from "./Brands";
import Welcome from "./Welcome"; // ✅ Importing the Welcome component

const Home = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleGetStarted = () => {
    setShowMainContent(true);

    // Delay scroll to allow exit animation to finish
    setTimeout(() => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 1100); // longer delay to match exit animation (1s)
  };

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        {!showMainContent && (
          <Welcome key="welcome" onGetStarted={handleGetStarted} />
        )}
      </AnimatePresence>

      {showMainContent && (
        <>
          <section id="home">
            <Hero />
          </section>
          <Stats />
          <section id="explore">
            <ProductsServices />
          </section>
          <InstallationSupport />
          <Brands />
          <section id="aboutus">
            <AboutUs />
          </section>
          <ClientsMarquee />
          <section id="contactus">
            <ContactUs />
          </section>
        </>
      )}
    </>
  );
};

export default Home;
