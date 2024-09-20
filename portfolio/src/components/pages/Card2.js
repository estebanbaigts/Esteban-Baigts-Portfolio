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
          <h2 className="text-2xl font-bold mb-4">À propos de moi</h2>
          <p className="text-lg">
            Je suis Esteban Baigts, un jeune développeur passionné par l'innovation technologique.
            Actuellement en Master of Science en Business & Technology à Epitech Digital School,
            j'ai travaillé sur plusieurs projets, notamment dans le développement logiciel et la data.
            Je suis à la recherche d'une alternance de janvier 2025 à septembre 2027 dans les domaines
            de la data ou du développement logiciel.
          </p>
          <p className="text-lg mt-4">
            Compétences : C, C++, JavaScript, Node.js, React.js, Docker, Postgres, Python, HTML, CSS
          </p>
          <p className="text-lg mt-4">
            Expériences récentes : Développeur logiciel chez Omind Neurotechnologies (création d'un
            luxmètre et de jeux pour un prototype de suivi oculaire), Fullstack Developer chez Masae Analytics.
          </p>
        </div>
      </motion.div>
  );
};

export default Card;
