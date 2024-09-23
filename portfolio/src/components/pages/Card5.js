import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Carousel from './CarouselTech';

const Card = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div
            className="absolute bottom-[10%] left-[48%] w-[800px] h-[350px] rounded-xl border border-white/30 p-4 overflow-hidden m-4 cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute bottom-[10%] left-5 text-white">
                <p className="text-xs">CURRENTLY USING</p>
                <h2 className="text-xl font-bold">THIS TECH</h2>
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
    );
};

export default Card;
