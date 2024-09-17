import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center">
      {/* Header avec les boutons */}
      <div className="mt-8 mb-8 flex justify-center space-x-4">
        <button className="bg-gray-800 text-white py-2 px-4 rounded-full">
          ALL
        </button>
        <button className="bg-gray-800 text-white py-2 px-4 rounded-full">
          ABOUT
        </button>
        <button className="bg-gray-800 text-white py-2 px-4 rounded-full">
          WORK
        </button>
      </div>

      {/* Section des "cards" avec un focus vertical */}
      <div className="grid grid-cols-2 gap-4 px-8 max-w-screen-lg w-full">
        {/* Colonne 1 */}
        <div className="row-span-2 bg-gray-400 rounded-lg h-96"></div>
        <div className="row-span-1 bg-gray-400 rounded-lg h-48"></div>
        <div className="row-span-1 bg-gray-400 rounded-lg h-48"></div>

        {/* Colonne 2 */}
        <div className="row-span-1 bg-gray-400 rounded-lg h-48"></div>
        <div className="row-span-2 bg-gray-400 rounded-lg h-96"></div>
        <div className="row-span-1 bg-gray-400 rounded-lg h-48"></div>

        {/* Colonne 3 */}
        <div className="row-span-1 bg-gray-400 rounded-lg h-48"></div>
        <div className="row-span-1 bg-gray-400 rounded-lg h-48"></div>
        <div className="row-span-2 bg-gray-400 rounded-lg h-96"></div>
      </div>
    </div>
  );
};

export default Portfolio;
