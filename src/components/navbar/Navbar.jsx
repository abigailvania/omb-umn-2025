import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import logo from "../../images/header-footer/logo.png";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowNavbar(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${showNavbar ? 'show' : ''}`}>
            <div className="navbar-container">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <ul className="navbar-menu">
                    <li><a href="#" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("home-section")?.scrollIntoView({ behavior: "smooth" });
                    }}>Home</a></li>
                    <li className="dropdown">
                        <a href="#" onClick={(e) => {
                            e.preventDefault();
                            setDropdownOpen(!dropdownOpen);
                        }}>Informasi</a>
                        {dropdownOpen && (
                            <div className="dropdown-card" style={{ position: 'absolute', top: '100%', left: 0, background: 'white', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '10px', zIndex: 1000 }}>
                                <ul className="dropdown-menu">
                                    <li><a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById("tentang-omb")?.scrollIntoView({ behavior: "smooth" });
                                    }}>Tentang OMB</a></li>
                                    <li><a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById("oprec-section")?.scrollIntoView({ behavior: "smooth" });
                                    }}>Divisi</a></li>
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>
                <button className="register-btn" onClick={() => {
                    document.getElementById("oprec-section")?.scrollIntoView({ behavior: "smooth" });
                }}>Daftar Sekarang</button>
            </div>
        </nav>
    );
};

export default Navbar;
