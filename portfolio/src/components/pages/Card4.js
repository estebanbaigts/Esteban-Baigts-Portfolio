import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import InfiniteMovingCards from './InfiniteMovingCards'; // Import du composant InfiniteMovingCards

const Button = ({ label, onClick, href, target, rel }) => {
  return href ? (
    <a href={href} target={target} rel={rel} className="relative w-24 h-10 text-white bg-transparent border-none rounded-md text-sm font-bold flex items-center justify-center overflow-hidden cursor-pointer group">
      <span className="absolute inset-0 flex items-center justify-center z-10">{label}</span>
      <span className="absolute w-32 h-32 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom" />
      <span className="absolute w-32 h-32 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom" />
      <span className="absolute w-32 h-32 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom" />
    </a>
  ) : (
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
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const TESTIMONIALS = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "John Doe",
      title: "CEO, Example Corp",
    },
    {
      quote: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Jane Smith",
      title: "CTO, Tech Solutions",
    },
    {
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      name: "Jim Beam",
      title: "Engineer, Beam Inc.",
    },
  ];

  return (
    <motion.div
      className="absolute bottom-[10%] left-20 w-[700px] h-[350px] rounded-xl border border-white/30 p-4 overflow-hidden m-4 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
      {/* Intégration des cartes défilantes à l'infini */}
      <div className="relative z-10">
        <InfiniteMovingCards items={TESTIMONIALS} direction="right" speed="slow" />
      </div>
    </motion.div>
  );
};

export default Card;
