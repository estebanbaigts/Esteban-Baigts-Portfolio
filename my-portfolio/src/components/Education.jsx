import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
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
            id="education"
            className="my-20 px-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-4xl font-bold mb-8 text-blue-500">Education</h2>
            <div className="space-y-6">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold">Master of Science Business & Technology</h3>
                        <p className="text-lg">Epitech Digital School, 2022-2027</p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
        </motion.div>
        </div>
    );
}

export default Education;
