import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            className="py-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex justify-center space-x-6 mb-4">
                <motion.a
                    href="https://github.com/esteban_baigts"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                </motion.a>
                <motion.a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                </motion.a>
                <motion.a
                    href="mailto:youremail@example.com"
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                </motion.a>
            </div>
            <p className="text-gray-500">© {new Date().getFullYear()} Esteban Baigts. All rights reserved.</p>
        </motion.footer>
    );
}

export default Footer;
