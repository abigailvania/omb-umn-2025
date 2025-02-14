import React, { useState, useEffect } from 'react';
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
    <>
      <nav
        className={`
          fixed top-0 left-1/2 transform -translate-x-1/2
          w-[90%] md:w-4/5
          py-2.5 px-[15px]
          text-white
          bg-[rgba(30,125,135,0.25)]
          backdrop-blur-[10px]
          shadow-[0_4px_8px_rgba(0,0,0,0.2)]
          rounded-[20px]
          flex justify-center items-center
          transition-opacity duration-500 ease-in-out
          z-[900] mt-[15px]
          ${showNavbar ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div className="flex w-full items-center justify-between mx-[30px]">
          <img src={logo} alt="Logo" className="h-[80px] m-0 p-0" />
          <ul className="list-none flex gap-[15px] md:gap-[30px] p-0 m-0">
            <li className="flex items-center">
              <a
                href="#"
                className="no-underline text-[16px] md:text-[20px] text-white font-bold flex items-center h-full"
              >
                Home
              </a>
            </li>
            <li className="relative flex items-center">
                <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="no-underline text-[16px] md:text-[20px] text-white font-bold flex items-center h-full focus:outline-none cursor-pointer"
                >
                    More ▼
                </button>
                {dropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-white shadow-md rounded-lg py-1 z-[910] max-w-[300px] md:w-48">
                    <ul className="text-right">
                        <li>
                        <a
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            Divisi
                        </a>
                        </li>
                        <li>
                        <a
                            href="/interview"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            Daftar Interview
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            Tentang OMB
                        </a>
                        </li>
                    </ul>
                    </div>
                )}
                </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;

