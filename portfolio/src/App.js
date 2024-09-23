import React, { useState, useEffect } from 'react';
import BackgroundParticle from './components/background/BackgroundParticle';
import Landing from './components/background/LandingPage';
import { motion } from 'framer-motion';

const App = () => {
  const [isLanding, setIsLanding] = useState(true); // Always show landing page on reload


  useEffect(() => {
    localStorage.setItem('showLanding', 'true');

    const landingTimer = setTimeout(() => {
      setIsLanding(false);
      localStorage.setItem('showLanding', 'false');
    }, 5000);

    return () => {
      clearTimeout(landingTimer);
    };
  }, []);

  return (
    <div className="relative">
      {isLanding ? (
        <Landing />
      ) : (
        <div className="fixed inset-0 z-0 flex flex-col items-center justify-center">
          <BackgroundParticle />
          </div>
      )}
    </div>
  );
};

export default App;
