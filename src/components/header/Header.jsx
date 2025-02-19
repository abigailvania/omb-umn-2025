import React from "react";
import { useNavigate } from "react-router-dom";

import "./header.scss";

import logo from "../../images/header-footer/putih_glowterang.png"
import tagline from "../../images/header-footer/tagline-01.png"


import GlassButton from "../button/Button.jsx";
import Countdown from "../oprec/countdown/Countdown.jsx";

import supergrafis from "../../images/supergrafis/SUP1.png";
import ombak from "../../images/ombak/OMBAK1.png";

function Header() {
    const navigate = useNavigate();

    return (
        <>
            <section id="home-section" className="headerSection max-w-full">
                <div className="headerContent">
                    <div className="leftColumn">
                        <div className="supergrafis absolute z-0 opacity-40">
                            <img src={supergrafis} alt="supergrafis" className="z-0" />
                        </div>
                        <div className="flex flex-col justify-center align-center">
                            <div className="flex justify-center">
                                <img src={logo} alt="Logo" className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] w-auto z-5 object-contain" />                            </div>
                            <div className="flex justify-center align-center">
                                <img src={tagline} alt="Tagline OMB UMN 2025" className="h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px] w-auto object-contain" />                            </div>
                        </div>
                    </div>
                    <div className="rightColumn">
                        <div className="flex flex-col justify-center items-center text-center text-white -mt-10 md:mt-0 z-20">
                                <Countdown targetDate="2025-02-22T23:59:00" />

                            <p className="text-xl m-[10px] px-8 ">
                                Pendaftaran Kepanitiaan OMB UMN 2025 telah dibuka!
                            </p>
                                <GlassButton
                                    text={<span>DAFTAR <span className="italic">BATCH 2</span></span>} onClick={() => document.getElementById("oprec-section").scrollIntoView({ behavior: "smooth" })}
                                    className="text-white max-w-[180px] mt-[30px] z-20 relative"
                                />
                            <div className="mt-[20px]">
                            <GlassButton
                                text={<span>LIHAT HASIL <span className="italic">BATCH 1</span></span>} onClick={() => navigate("/interview")}
                                className="text-white max-w-[180px] mt-[30px] z-20 relative"
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ombak absolute w-full h-full z-2 left-1/2 transform -translate-x-1/2 ">
                    <img src={ombak} alt="ombak" className=" relative w-full bottom-[-350px] xs:-bottom-[280px] 
                    @min-[648px]:-bottom-[65px] @min-[768px]:bottom-[84px] md:bottom-[84px] lg:bottom-[112px]" />
                </div>
            </section>
        </>
    );
}


export default Header;


