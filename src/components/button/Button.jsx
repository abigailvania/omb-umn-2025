import React from "react";

const GlassButton = ({ text, onClick }) => {
    return (
        <button 
            className="relative px-10 py-4 rounded-full text-white font-bold bg-[rgba(30,125,135,0.25)] backdrop-blur-sm shadow-[0_4px_10px_rgba(0,0,0,0.6)] overflow-hidden cursor-pointer transition-all duration-300 ease-in-out border-none outline-none hover:bg-[rgba(30,125,135,0.4)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.6)] before:content-[''] before:absolute before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-[radial-gradient(circle,rgba(255,255,255,0.3)_10%,transparent_50%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default GlassButton;
