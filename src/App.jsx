import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import {
  Footer,
  Navbar,
  ExploreDetails,
  Hero,
  Stats,
  ProductsServices,
  AboutUs,
  ContactUs,
  InstallationSupport,
  Brands,
  ClientsMarquee,
} from './components';

import styles from './style';
import './index.css';
import Services from './components/Services';
import IndustriesWeServe from './components/IndustriesWeServe';
import Blog from './components/Blog';
import Welcome from './components/Welcome';
import Chatbot from './components/ChatBot.jsx';
import { Autoplay } from 'swiper/modules';

const App = () => {
  const location = useLocation();
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      section?.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleGetStarted = () => {
    setShowWelcome(false); // trigger fade out
  };

  return (
    <div className="bg-primary w-full overflow-hidden flex flex-col min-h-screen">
      {/* Welcome Page Transition */}
      <AnimatePresence>
        {showWelcome && <Welcome onGetStarted={handleGetStarted} />}
      </AnimatePresence>

      {!showWelcome && (
        <>
          {/* Navbar */}
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>

          {/* Main Content */}
          <main className={`${styles.paddingX} ${styles.flexCenter} flex-grow`}>
            <div className={`${styles.boxWidth}`}>
              <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="hero"><Hero /></section>
                  <Chatbot/>                                                         
                  <Brands />                                     
                  <ProductsServices />                                 
                  <InstallationSupport />                
                  <ClientsMarquee />                         
                             
                  <section id="aboutus"><AboutUs /></section>          
                  <section id="contactus"><ContactUs/></section> 

                  

                </>
              }
            />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<IndustriesWeServe />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/explore" element={<ExploreDetails />} />
          </Routes>

            </div>
          </main>

          {/* Footer */}
          <footer className={`${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Footer />
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
