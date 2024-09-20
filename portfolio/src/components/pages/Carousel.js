import React from 'react';
import { motion } from 'framer-motion';
import Draggable from 'react-draggable';

import { ReactComponent as CLogo } from './c.svg';
import { ReactComponent as CPlusPlusLogo } from './c++.svg';
import { ReactComponent as CanvaLogo } from './canva.svg';
import { ReactComponent as ChartJSLogo } from './chartjs.svg';
import { ReactComponent as CSharpLogo } from './csharp.svg';
import { ReactComponent as NodeJSLogo } from './nodejs.svg';
import { ReactComponent as PlaywrightLogo } from './playwright.svg';
import { ReactComponent as ReactLogo } from './react.svg';

const techLogos = [
    { name: 'C', logo: <CLogo /> },
    { name: 'C++', logo: <CPlusPlusLogo /> },
    { name: 'Canva', logo: <CanvaLogo /> },
    { name: 'ChartJS', logo: <ChartJSLogo /> },
    { name: 'C#', logo: <CSharpLogo /> },
    { name: 'Node.js', logo: <NodeJSLogo /> },
    { name: 'Playwright', logo: <PlaywrightLogo /> },
    { name: 'React', logo: <ReactLogo /> },
];

const duplicatedLogos = [...techLogos, ...techLogos, ...techLogos, ...techLogos];

const Carousel = () => {
    const carouselVariants = {
        animate: {
            x: [0, -2000],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 30,
                    ease: 'linear'
                }
            }
        }
    };

    return (
        <div className="relative w-full h-screen flex flex-col items-center justify-center">
            <div className="w-full overflow-hidden">
                <motion.div
                    className="flex space-x-8"
                    variants={carouselVariants}
                    animate="animate"
                >
                    {duplicatedLogos.map((tech, index) => (
                        <Draggable key={index}>
                            <motion.div
                                className="text-white w-[80px] h-[80px] flex items-center justify-center p-4 cursor-pointer"
                            >
                                {tech.logo}
                            </motion.div>
                        </Draggable>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Carousel;
