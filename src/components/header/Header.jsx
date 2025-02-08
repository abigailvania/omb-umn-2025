import React from "react";
import "./header.scss";

import logo from "../../images/header-footer/putih_glowterang.png"
import tagline from "../../images/header-footer/tagline-01.png"


import GlassButton from "../button/Button.jsx";
import Countdown from "../oprec/countdown/Countdown.jsx";

import supergrafis from "../../images/supergrafis/SUP1.png";
import ombak from "../../images/ombak/OMBAK1.png";

function Header() {
    return (
        <>
            <section id="home-section" className="headerSection">
                <div className="headerContent">
                    <div className="leftColumn">
                        <div className="supergrafis absolute z-0">
                            <img src={supergrafis} alt="supergrafis" className="z-0" />
                        </div>
                        <div className="flex flex-col justify-center align-center">
                            <div className="flex justify-center">
                                <img src={logo} alt="Logo" className="h-[100px] md:h-[300px] w-auto z-5 object-contain" />                            </div>
                            <div className="flex justify-center align-center">
                                <img src={tagline} alt="Tagline OMB UMN 2025" className="h-[50px] md:h-[100px] w-auto object-contain" />                            </div>
                        </div>
                    </div>
                    <div className="rightColumn">
                        <div className="flex flex-col justify-center items-center text-center text-white mt-[20px] z-20">
                            <Countdown targetDate="2025-02-10T08:00:00" />
                            <p className="text-xl m-[15px] px-12">
                                Pendaftaran kepanitiaan OMB UMN 2025 akan segera dibuka!
                            </p>
                            <GlassButton
                                text="LIHAT DIVISI" onClick={() => document.getElementById("oprec-section").scrollIntoView({ behavior: "smooth" })}
                                className="text-white max-w-[180px] mt-[30px] z-10"

                            />
                        </div>
                    </div>
                </div>
                <div className="ombak">
                    <img src={ombak} alt="ombak" />
                </div>
            </section>
        </>
    );
}


export default Header;


