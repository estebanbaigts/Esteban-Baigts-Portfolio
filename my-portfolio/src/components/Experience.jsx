import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: "Young's Startup of Streetwear",
        role: 'Website Creator',
        description: 'Created a full-fledged e-commerce website for a streetwear brand.',
        link: 'https://www.badjeans.fr/'
    },
    {
        company: 'MikMak',
        role: 'Graphic Designer',
        description: 'Worked as a 3D graphic designer for MikMak.',
    },
    // Add more experiences here
];

const Experience = () => {
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
            id="experience"
            className="my-20 px-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-4xl font-bold mb-8 text-blue-500">Experience</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
                {experiences.map(exp => (
                    <motion.div
                        key={exp.company}
                        className="p-6 bg-gray-800 rounded-lg shadow-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <h3 className="text-2xl font-semibold text-blue-400">{exp.company}</h3>
                        <p className="text-lg text-gray-300">{exp.role}</p>
                        <p className="mt-2 text-gray-400">{exp.description}</p>
                        {exp.link && <a href={exp.link} className="text-blue-500 hover:underline mt-4 block">Visit Website</a>}
                    </motion.div>
                ))}
            </div>
        </motion.section>
        </motion.div>
        </div>
    );
}

export default Experience;
