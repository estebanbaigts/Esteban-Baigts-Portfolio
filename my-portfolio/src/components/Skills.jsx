import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'React', icon: 'path-to-react-icon.svg' },
    { name: 'Docker', icon: 'path-to-docker-icon.svg' },
];

const Skills = () => {
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
            id="skills"
            className="my-20 px-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-4xl font-bold mb-8 text-blue-500">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
                {skills.map(skill => (
                    <motion.div
                        key={skill.name}
                        className="p-6 bg-gray-800 rounded-lg shadow-md flex flex-col items-center"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
                        <p className="text-center text-xl font-semibold">{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
        </motion.div>
        </div>
    );
}

export default Skills;
