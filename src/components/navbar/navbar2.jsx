import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/header-footer/logo.png";

const Navbar2 = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowNavbar(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 
                ${showNavbar ? "bg-white shadow-lg backdrop-blur-md" : "bg-transparent shadow-md shadow-black/5"}`}>
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                <img src={logo} alt="Logo" className="h-12" />
                
                <ul className="flex space-x-6 text-gray-700 font-medium relative">
                    <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
                    <li><Link to="/interview" className="hover:text-blue-500">Interview</Link></li>

                    <li className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                            className="hover:text-blue-500 transition-colors"
                        >
                            More ▼
                        </button>

                        <ul className={`absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg overflow-hidden transition-opacity duration-300
                            ${dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Divisi</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Daftar Interview</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Tentang OMB</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar2;
