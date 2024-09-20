import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import createGlobe from 'cobe';

const Card = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [144 / 255, 238 / 255, 144 / 255],
      glowColor: [2, 2, 2],
      markers: [
        { location: [48.8566, 2.3522], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current.style.opacity = '1'));
    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientX - rect.top });
  };

  return (
    <motion.div
      className="absolute top-[10%] left-[27%] w-[320px] h-[350px] rounded-xl border border-white/30 p-4 overflow-hidden m-4 cursor-pointer"
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

      <div
        style={{
          width: '100%',
          maxWidth: 600,
          aspectRatio: 1,
          margin: 'auto',
          position: 'relative',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
            contain: 'layout paint size',
            opacity: 0,
            transition: 'opacity 1s ease',
          }}
        />
      </div>

      <div style={{ textAlign: 'left', marginTop: '10px', color: 'white' }}>
        <p>Currently in Paris 📍</p>
      </div>
    </motion.div>
  );
};

export default Card;
