import React from 'react';
import About from './sections/About';
import Work from './sections/Work';
import TechUsed from './sections/TechUsed';
import Contact from './sections/Contact';

const Bento = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
    <div className="bg-black/30 backdrop-blur-lg p-6 rounded-lg shadow-lg text-white">
      <About />
    </div>
    <div className="bg-black/30 backdrop-blur-lg p-6 rounded-lg shadow-lg text-white">
      <Work />
    </div>
    <div className="bg-black/30 backdrop-blur-lg p-6 rounded-lg shadow-lg text-white">
      <TechUsed />
    </div>
    <div className="bg-black/30 backdrop-blur-lg p-6 rounded-lg shadow-lg text-white">
      <Contact />
    </div>
  </div>
);

export default Bento;
