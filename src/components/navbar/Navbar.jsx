import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import logo from "../../images/header-footer/logo.png"

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${showNavbar ? 'show' : ''}`}>
            <div className="navbar-container text-center">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <ul className="navbar-menu">
                    <li>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("home-section")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Home
                        </a>
                    </li>
                    <li 
                        className="dropdown"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <button 
                            className="dropdown-toggle" 
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            More ▼
                        </button>
                        <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                            <li>
                                <a 
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById("oprec-section")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    Divisi
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById("interview-section")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    Daftar Interview
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById("tentang-omb")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    Tentang OMB
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
