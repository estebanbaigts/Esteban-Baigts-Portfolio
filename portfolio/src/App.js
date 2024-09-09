import React from 'react';
import BackgroundParticle from './components/background/BackgroundParticle';
import Bento from './components/Bento'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <BackgroundParticle />
      </div>
      <Navbar />
    </div>
  );
};

export default App;
