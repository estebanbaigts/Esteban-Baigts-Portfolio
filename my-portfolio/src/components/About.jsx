import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
        <motion.section
            id="about"
            className="flex flex-col items-center justify-center my-20 px-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <img
                src="moi.jpg"
                alt="Esteban Baigts"
                className="w-48 h-48 rounded-full mb-6 border-2 border-gray-700 shadow-lg object-cover"
            />
            <div>
                <h2 className="text-4xl font-bold mb-4 text-blue-500">About Me</h2>
                <p className="text-lg">
                    I'm a passionate young developer at the heart of technological innovation, with experience in visual design, DevOps, and backend/frontend development. I love creating seamless and efficient solutions that make a difference.
                </p>
            </div>
        </motion.section>
        </motion.div>
        </div>
    );
}

export default About;
