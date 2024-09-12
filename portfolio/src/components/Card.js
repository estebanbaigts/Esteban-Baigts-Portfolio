import React, { useState } from 'react';
import { motion } from 'framer-motion';
import myPhoto from './moi.jpeg';

const Button = ({ label, onClick }) => {
  return (
    <button
      className="relative w-24 h-10 text-white bg-transparent border-none rounded-md text-sm font-bold flex items-center justify-center overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <span className="absolute inset-0 flex items-center justify-center z-10">{label}</span>
      <span className="absolute w-32 h-32 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom" />
      <span className="absolute w-32 h-32 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom" />
      <span className="absolute w-32 h-32 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom" />
    </button>
  );
};

const Card = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="absolute top-20 left-20 bg-[#000] w-[350px] h-[350px] rounded-xl border border-white/30 p-4 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Flou en arrière-plan */}
      {isHovered && (
        <motion.div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: '600px',
            height: '600px',
            top: mousePosition.y - 300,
            left: mousePosition.x - 300,
            background: '#5D2CA8',
            filter: 'blur(100px)',
            zIndex: 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        />
      )}
      {/* Contenu principal */}
      <div className="relative w-full h-full bg-gradient-to-r from-transparent via-black to-transparent opacity-75 flex flex-col items-center justify-center text-center rounded-2xl overflow-hidden">
        {/* Photo */}
        <div className="relative w-32 h-32 rounded-full border-4 border-slate-50 z-10 group-hover:scale-100 group-hover:-translate-x-10 group-hover:-translate-y-10 transition-transform duration-500">
          <img
            src={myPhoto}
            alt="Esteban Baigts"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        {/* Texte et bouton */}
        <div className="flex flex-col items-center justify-center mt-4 z-10 group-hover:-translate-y-10 transition-all duration-500">
          <div className="flex flex-col items-center">
            <span className="text-2xl text-white text-center font-semibold">Esteban Baigts</span>
            <p className="text-2xl text-white text-center font-semibold mt-2">Software Dev</p>
          </div>
          <div className="mt-6">
            <Button label="Follow" onClick={() => window.location.href = "https://www.linkedin.com/in/esteban-baigts-70b423232/"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
