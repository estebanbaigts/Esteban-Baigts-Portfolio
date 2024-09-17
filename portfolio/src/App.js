import React, { useState, useEffect } from 'react';
import BackgroundParticle from './components/background/BackgroundParticle';
import Navbar from './components/Navbar';
import Landing from './components/background/LandingPage';
import AnimatedText from './components/LetterPullUp';
import Card1 from './components/pages/Card1';
import Card2 from './components/pages/Card2';
import Card3 from './components/pages/Card3';
import Card4 from './components/pages/Card4';
import Card5 from './components/pages/Card5';
import { motion } from 'framer-motion';

const App = () => {
  const [isLanding, setIsLanding] = useState(() => {
    return localStorage.getItem('showLanding') !== 'false';
  });
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    if (isLanding) {
      const timer = setTimeout(() => {
        setIsLanding(false);
        localStorage.setItem('showLanding', 'false');
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      // Timing adjustments
      const navbarTimer = setTimeout(() => {
        setNavbarVisible(true);
      }, 5500);

      const cardsTimer = setTimeout(() => {
        setCardsVisible(true);
      }, 5500);

      return () => {
        clearTimeout(navbarTimer);
        clearTimeout(cardsTimer);
      };
    }
  }, [isLanding]);

  return (
    <div className="relative">
      {isLanding ? (
        <Landing />
      ) : (
        <div className="fixed inset-0 z-0 flex flex-col items-center justify-center">
          <BackgroundParticle />
          <div className="absolute inset-0 z-10 flex flex-col text-white items-center justify-center">
            <AnimatedText text="Welcome on my amazing portfolio !" />
            <motion.div
              className="mt-8 flex flex-wrap justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: cardsVisible ? 1 : 0, scale: cardsVisible ? 1 : 0.5 }}
              transition={{
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
            >
              <Card1/>
              <Card2/>
              <Card3/>
              <Card4/>
              <Card5/>
            </motion.div>
          </div>
          <motion.div
            className="absolute inset-x-0 bottom-0 z-20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: navbarVisible ? 1 : 0, scale: navbarVisible ? 1 : 0.5 }}
            transition={{
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
          >
            <Navbar />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default App;
