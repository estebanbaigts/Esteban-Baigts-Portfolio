import React from 'react';

const Button = ({ label }) => {
    return (
        <button className="relative w-24 h-10 bg-transparent text-white border-none rounded-md text-sm font-bold flex items-center justify-center overflow-hidden cursor-pointer group">
            <span className="absolute inset-0 flex items-center justify-center z-10">{label}</span>
            <span className="absolute w-32 h-32 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom" />
            <span className="absolute w-32 h-32 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom" />
            <span className="absolute w-32 h-32 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom" />
        </button>
    );
};

const Navbar = () => {
    return (
        <footer className="w-max max-w-lg bg-transparent text-white shadow-md fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 border border-green-600 rounded-md">
            <nav className="flex justify-around items-center p-2 h-12 space-x-1">
                <Button label="Projects" />
                <Button label="About" />
                <Button label="Contact" />
            </nav>
        </footer>
    );
};

export default Navbar;
