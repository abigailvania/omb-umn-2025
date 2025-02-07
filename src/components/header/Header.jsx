import React from "react";
import "./header.scss";

import logo from "../../images/header-footer/logo.png"
import tagline from "../../images/header-footer/tagline.png"

import supergrafis from "../../images/supergrafis/supergrafis1.png"
import ombakterangdown from "../../images/ombak/Ombakterang_Down.png"

import GlassButton from "../button/Button.jsx";
import Countdown from "../oprec/countdown/Countdown.jsx";


function Header() {
    return (
        <section id="home-section" className="headerSection">
            <div className="headerContent">
                <div className="supergrafis">
                    <img src={supergrafis} alt="supergrafis" />
                </div>
                <div className="flex flex-col justify-center align-center md:pt-3">
                    <div className="flex justify-center">
                        <img src={logo} alt="" className="h-[270px]" />
                    </div>
                    <div className="flex justify-center -mt-[30px] align-center md:mt-0">
                        <img src={tagline} alt="Tagline OMB UMN 2025" className="h-[95px]" />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center text-white mt-[20px]">
                    <p className="text-xl">
                        Pendaftaran Kepanitiaan OMB UMN 2025
                        <br />
                        “countdown”
                        {/* Pendaftaran Kepanitiaan OMB UMN 2025 Telah Dibuka! */}
                    </p>
                    {/* <GlassButton
                        text="Daftar Sekarang!"
                        onClick={() => document.getElementById("oprec-section").scrollIntoView({ behavior: "smooth" })}
                        className="text-white max-w-[180px] mt-[20px]"
                    /> */}
                    <Countdown targetDate="2025-02-10T08:00:00" />
                </div>
            </div>

            <div className="ombak">
                <img src={ombakterangdown} alt="ombak"/>
            </div>
        </section>
    );
}

export default Header;


