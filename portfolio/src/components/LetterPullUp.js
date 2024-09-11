import React from 'react';
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
};

const AnimatedText = ({ text }) => {
  console.log('Text prop:', text);

  if (!text) {
    return <div>Error: Text is required!</div>;
  }

  return (
    <div className="text-white flex items-center justify-center h-screen">
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="text-center font-bold"
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
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
