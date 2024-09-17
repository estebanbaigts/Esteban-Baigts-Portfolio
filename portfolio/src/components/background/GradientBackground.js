import React, { useEffect, useState } from 'react';

const InteractiveCard = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const bubbleStyle = {
    transform: `translate(${mousePosition.x / 10}px, ${mousePosition.y / 10}px)`,
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-[#080a0f] to-[#001120] overflow-hidden">
      <div className="absolute inset-0 z-10 flex items-center justify-center p-12 max-w-lg m-auto bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
        <svg
          className="absolute inset-0 w-full h-full opacity-10 z-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100% 100%"
        >
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="6"
              stitchTiles="stitch"
            />
          </filter>
          <rect
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            filter="url(#noiseFilter)"
          />
        </svg>
        <div className="relative z-10 text-white">
          <h1 className="text-3xl font-bold mb-4">Interactive Gradient</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempore unde ex pariatur distinctio laboriosam, dolorem quibusdam aperiam expedita.
          </p>
        </div>
      </div>

      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-30 z-0 mix-blend-soft-light"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100vw 100vw"
        >
          <filter id="noiseFilterBg">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.6"
              stitchTiles="stitch"
            />
          </filter>
          <rect
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            filter="url(#noiseFilterBg)"
          />
        </svg>

        <div className="absolute inset-0 flex justify-center items-center z-1 filter blur-3xl">
          <div className="absolute w-[80%] h-[80%] rounded-full bg-blue-400 opacity-70 animate-moveVertical"></div>
          <div className="absolute w-[80%] h-[80%] rounded-full bg-purple-400 opacity-70 animate-moveInCircle"></div>
          <div className="absolute w-[80%] h-[80%] rounded-full bg-blue-700 opacity-70 animate-moveInCircle"></div>
          <div
            className="absolute w-full h-full rounded-full bg-purple-200 opacity-50"
            style={bubbleStyle}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCard;
