import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        name: 'POPEYE',
        description: 'A project using Dockerfile and docker-compose.',
        technologies: ['Docker', 'Docker Compose']
    },
    {
        name: 'MyRPG',
        description: 'An RPG-style game created with the CSFML library.',
        technologies: ['C++', 'CSFML']
    },
];

const Projects = () => {
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
            id="projects"
            className="my-20 px-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-4xl font-bold mb-8 text-blue-500">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <motion.div
                        key={project.name}
                        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-56 object-cover transition-transform duration-300 transform hover:scale-110"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-blue-400">{project.name}</h3>
                            <p className="mt-2 text-gray-400">{project.description}</p>
                            <div className="mt-2 flex flex-wrap justify-center">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="text-sm bg-blue-500 text-white px-3 py-1 rounded-full mr-2 mb-2">{tech}</span>
                                ))}
                            </div>
                            <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">Learn More</a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
        </motion.div>
        </div>
    );
}

export default Projects;
