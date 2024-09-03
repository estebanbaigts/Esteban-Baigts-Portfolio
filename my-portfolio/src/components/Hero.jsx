import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const Hero = () => {
    return (
        <div className="relative h-screen flex justify-center items-center text-white">
            <div className="fluid-animation">
                <div className="wave"></div>
            </div>
            <motion.div
                className="glass-effect p-10 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-6xl font-bold">Esteban Baigts</h1>
                <p className="text-2xl mt-4">Young developer at the heart of technological innovation.</p>
                <div className="mt-8">
                    <a href="#projects" className="bg-gray-800 text-blue-500 px-4 py-2 rounded-full mr-4 shadow-lg hover:bg-blue-500 hover:text-white transition duration-300">View My Work</a>
                    <a href="#contact" className="bg-gray-800 text-blue-500 px-4 py-2 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition duration-300">Contact Me</a>
                </div>
            </motion.div>
        </div>
    );
}

export default Hero;
