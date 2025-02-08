import React from "react";
import "./header.scss";

import logo from "../../images/header-footer/putih_glowterang.png"
import tagline from "../../images/header-footer/tagline-01.png"

import supergrafis from "../../images/supergrafis/supergrafis1.png"
import ombakterangdown from "../../images/ombak/Ombakterang_Down.png"

import GlassButton from "../button/Button.jsx";
import Countdown from "../oprec/countdown/Countdown.jsx";


function Header() {
    return (
        <section id="home-section" className="headerSection">
            <div className="headerContent">
                <div className="leftColumn">
                    {/* <div className="supergrafis">
                        <img src={supergrafis} alt="supergrafis" />
                    </div> */}
                    <div className="flex flex-col justify-center align-center">
                        <div className="flex justify-center">
                            <img src={logo} alt="Logo" className="h-[500px] z-5" />
                        </div>
                        <div className="flex justify-center align-center">
                            <img src={tagline} alt="Tagline OMB UMN 2025" className="h-[150px]" />
                        </div>
                    </div>
                </div>
                <div className="rightColumn">
                    <div className="flex flex-col justify-center items-center text-center text-white mt-[20px]">
                        <Countdown targetDate="2025-02-10T08:00:00" />
                        <p className="text-xl m-[15px]">
                            Pendaftaran Kepanitiaan OMB UMN akan Segera Dibuka
                        </p>
                        <GlassButton
                            text="Daftar Sekarang!"
                            onClick={() => document.getElementById("oprec-section").scrollIntoView({ behavior: "smooth" })}
                            className="text-white max-w-[180px] mt-[20px] mt-[30px]"
                        />
                    </div>
                </div>
            </div>

            <div className="ombak">
                <img src={ombakterangdown} alt="ombak"/>
            </div>
        </section>
    );
}


export default Header;


