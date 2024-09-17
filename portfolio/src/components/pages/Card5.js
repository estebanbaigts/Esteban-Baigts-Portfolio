import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Draggable from 'react-draggable';
import Carousel from './Carousel';  // Import du composant Carousel

const Card = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <Draggable>
            <motion.div
                className="absolute bottom-[10%] right-20 w-[750px] h-[350px] rounded-xl border border-white/30 p-4 overflow-hidden m-4 cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute bottom-[10%] left-5 text-white">
                    <p className="text-xs">CURRENTLY USING</p>
                    <h2 className="text-xl font-bold">MY TECH</h2>
                </div>
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

                <div className="relative w-full h-full flex items-center justify-center">
                    <Carousel />
                </div>
            </motion.div>
        </Draggable>
    );
};

export default Card;
