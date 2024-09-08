import React from "react";

const Button = ({ onClick, children, theme }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[100px] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg 
        ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}
        before:absolute before:top-0 before:-left-full before:w-full before:h-full 
        before:bg-gradient-to-r 
        ${theme === 'dark' ? 'before:from-[#009b49] before:to-[rgb(105,184,141)]' : 'before:from-[#005700] before:to-[rgb(80,140,100)]'}
        before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl 
        hover:before:left-0`}
    >
      {children}
    </button>
  );
};

export default Button;
