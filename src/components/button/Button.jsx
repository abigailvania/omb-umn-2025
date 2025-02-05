import React from "react";

function Button({text, onClick, className}) {
    return (
        <button 
            className={`px-4 py-2 rounded-3xl bg-[#03335B] ${className}`} 
            onClick={onClick} 
        >
            {text}
        </button>
    );
}

export default Button;