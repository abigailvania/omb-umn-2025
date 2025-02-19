import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import logo from "../../images/header-footer/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {scrolled && (
        <nav
          className={`
            fixed top-0 left-1/2 transform -translate-x-1/2
            w-[90%] md:w-4/5
            py-2.5 px-[15px]
            text-white
            rounded-[20px]
            flex justify-center items-center
            transition-all duration-500 ease-in-out
            z-[900] mt-[15px]
            ${scrolled
              ? 'bg-[rgba(30,125,135,0.25)] backdrop-blur-[10px] shadow-md'
              : 'bg-transparent border-b border-black/20'
            }
          `}
        >
          <div className="flex w-full items-center justify-between mx-[30px]">
            <img src={logo} alt="Logo" className="h-[80px] m-0 p-0" />
            <ul className="list-none flex gap-[15px] md:gap-[30px] p-0 m-0">
              <li className="flex items-center">
                <Link
                  to="/"
                  className="no-underline text-[16px] md:text-[20px] text-white font-bold flex items-center h-full"
                >
                  Home
                </Link>
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
                      <Link
                        to="/#oprec-section"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b border-gray-300"
                      >
                        Divisi
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/interview"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b border-gray-300"
                      >
                        Daftar Interview
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/#tentang-omb"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b border-gray-300"
                      >
                        Tentang OMB
                      </Link>
                    </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
  
};

export default Navbar;
