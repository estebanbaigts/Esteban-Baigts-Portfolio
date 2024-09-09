import React from 'react';

const Button = () => {
    return (
        <button className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
            Hover me!
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom" />
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom" />
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom" />
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                Explore!
            </span>
        </button>
    );
};

const Navbar = () => {
    return (
        <header className="w-full bg-black/30 backdrop-blur-lg text-white shadow-lg fixed top-0 left-0 z-50">
            <nav className="flex justify-between items-center p-4">
                <div className="text-2xl font-bold">Esteban Baigts</div>
                <ul className="flex space-x-4">
                    <li>
                        <Button />
                    </li>
                    <li>
                        <Button />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
