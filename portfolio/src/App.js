import React, { useState, useEffect } from 'react';
import BackgroundParticle from './components/background/BackgroundParticle';
import Navbar from './components/Navbar';
import Landing from './components/LandingPage';
import AnimatedText from './components/LetterPullUp';

const App = () => {
  const [isLanding, setIsLanding] = useState(() => {
    return localStorage.getItem('showLanding') !== 'false';
  });

  useEffect(() => {
    if (isLanding) {
      const timer = setTimeout(() => {
        setIsLanding(false);
        localStorage.setItem('showLanding', 'false');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isLanding]);

  return (
    <div className="relative">
      {isLanding ? (
        <Landing />
      ) : (
        <div className="fixed inset-0 z-0 flex flex-col items-center justify-center">
          <BackgroundParticle />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
            <AnimatedText text="Welcome on my amazing portfolio !"/>
          </div>
          <Navbar className="absolute inset-x-0 bottom-0 z-20" />
        </div>
      )}
    </div>
  );
};

export default App;
