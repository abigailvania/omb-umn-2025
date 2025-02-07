import React from "react";
import "./button.scss";

const GlassButton = ({ text, onClick }) => {
    return (
        <button className="glass-button" onClick={onClick}>
            {text}
        </button>
    );
};

export default GlassButton;
