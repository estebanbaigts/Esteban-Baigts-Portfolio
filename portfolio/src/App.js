import React, { useState, useEffect } from 'react';
import BackgroundParticle from './components/background/BackgroundParticle';
import Landing from './components/background/LandingPage';
import Card1 from './components/pages/Card1';
import Card2 from './components/pages/Card2';
import Card3 from './components/pages/Card3';
import Card4 from './components/pages/Card4';
import Card5 from './components/pages/Card5';
import { motion } from 'framer-motion';

const App = () => {
  const [isLanding, setIsLanding] = useState(true); // Always show landing page on reload
  const [textVisible, setTextVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem('showLanding', 'true');

    const landingTimer = setTimeout(() => {
      setIsLanding(false);
      localStorage.setItem('showLanding', 'false');
    }, 5000);

    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 5300);

    const cardsTimer = setTimeout(() => {
      setCardsVisible(true);
    }, 5500);

    return () => {
      clearTimeout(landingTimer);
      clearTimeout(cardsTimer);
    };
  }, []);

  return (
    <div className="relative">
      {isLanding ? (
        <Landing />
      ) : (
        <div className="fixed inset-0 z-0 flex flex-col items-center justify-center">
          <BackgroundParticle />
          <div className="absolute inset-0 z-10 flex flex-col text-white items-center justify-center">
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
            <Card5 />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
