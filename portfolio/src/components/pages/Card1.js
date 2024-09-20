import React, { useState } from 'react';
import { motion } from 'framer-motion';
import myPhoto from './moi.jpeg';

const Button = ({ label, onClick, href, target, rel }) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className="relative w-24 h-10 text-white bg-transparent border-none rounded-md text-sm font-bold flex items-center justify-center overflow-hidden cursor-pointer group"
            >
                <span className="absolute inset-0 flex items-center justify-center z-10">{label}</span>
                <span className="absolute w-32 h-32 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom" />
                <span className="absolute w-32 h-32 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom" />
                <span className="absolute w-32 h-32 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom" />
            </a>
        );
    }

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
        <motion.div
            className="absolute top-[10%] left-20 w-[365px] h-[350px] rounded-xl border border-white/30 p-4 overflow-hidden m-4 cursor-pointer"
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
            <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
                <div className=" relative bottom-[10%] w-32 h-32 rounded-full border-4 border-slate-50 transition-transform duration-500">
                    <img
                        src={myPhoto}
                        alt="Esteban Baigts"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <div className="absolute bottom-[10%] left-[2%] text-white flex space-x-4">
                    <Button
                        label="View CV"
                        href="./cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                    <Button
                        label="GitHub"
                        href="https://github.com/estebanbaigts"
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                    <Button
                        label="LinkedIn"
                        href="https://www.linkedin.com/in/esteban-baigts-70b423232/"
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Card;