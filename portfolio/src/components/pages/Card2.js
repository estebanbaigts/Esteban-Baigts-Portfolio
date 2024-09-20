import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Card = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      className="absolute top-[10%] right-20 w-[800px] h-[350px] rounded-xl border border-white/30 p-4 overflow-hidden m-4 cursor-pointer"
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
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I am Esteban Baigts, a passionate young developer with a keen interest in technological innovation.
          Currently pursuing a Master of Science in Business & Technology at Epitech Digital School,
          I have worked on various projects, particularly in software development and data.
          I am seeking an apprenticeship from January 2025 to September 2027 in the fields of data or software development.
        </p>
        <p className="text-lg mt-4">
          Skills: C, C++, JavaScript, Node.js, React.js, Docker, Postgres, Python, HTML, CSS
        </p>
        <p className="text-lg mt-4">
          Recent Experiences: Software Developer at Omind Neurotechnologies (created a luxmeter and games for an eye-tracking prototype),
          Fullstack Developer at Masae Analytics.
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
