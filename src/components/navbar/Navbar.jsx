import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

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
            <div className="navbar-container">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <ul className="navbar-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Tentang OMB</a></li>
                    <li><a href="#">Divisi</a></li>
                </ul>
                <button className="register-btn">Daftar Sekarang</button>
            </div>
        </nav>
    );
};

export default Navbar;
