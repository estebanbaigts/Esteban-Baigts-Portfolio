import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -50, // Animation de sortie en sens inverse
    transition: {
      duration: 0.8,
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -30, // Animation de sortie en sens inverse
    transition: {
      duration: 0.5,
    },
  },
};

const AnimatedText = ({ text }) => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 5000); // Le texte disparaît après 5 secondes
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-white flex items-center justify-center h-screen px-4 sm:px-8">
      <motion.div
        variants={textVariants}
        initial="initial"
        animate={showText ? "animate" : "exit"}
        className="text-center font-bold text-xl sm:text-3xl md:text-5xl lg:text-6xl"
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block mr-2 text-white"
            style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text' }}
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedText;
