import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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
            id="contact"
            className="my-20 px-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-4xl font-bold mb-8 text-blue-500">Contact Me</h2>
            <form className="space-y-6 max-w-xl mx-auto">
                <motion.input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-md border-2 border-gray-700 bg-gray-800 text-white focus:border-blue-500 focus:ring-blue-500 transition duration-300"
                    whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-md border-2 border-gray-700 bg-gray-800 text-white focus:border-blue-500 focus:ring-blue-500 transition duration-300"
                    whileFocus={{ scale: 1.02 }}
                />
                <motion.textarea
                    placeholder="Your Message"
                    className="w-full p-3 rounded-md border-2 border-gray-700 bg-gray-800 text-white focus:border-blue-500 focus:ring-blue-500 transition duration-300"
                    rows="5"
                    whileFocus={{ scale: 1.02 }}
                ></motion.textarea>
                <motion.button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Send Message
                </motion.button>
            </form>
        </motion.section>
        </motion.div>
        </div>
    );
}

export default Contact;
