import React from "react";
import "./header.scss";

import logo from "../../images/header-footer/putih_glowterang.png"
import tagline from "../../images/header-footer/tagline-01.png"

import supergrafis from "../../images/supergrafis/supergrafis1.png"

import GlassButton from "../button/Button.jsx";
import Countdown from "../oprec/countdown/Countdown.jsx";

import ombak1 from '../../images/ombak/wave5-03.png';
import ombak2 from '../../images/ombak/WAVE3-03.png';
import ombak3 from '../../images/ombak/WAVE4-03.png';

const ombak = [ombak1, ombak2, ombak3];

function Header() {
    return (
        <section id="home-section" className="headerSection">
            <div className="image-container z-10">
            {ombak.map((imgSrc, index) => (
                <img
                key={index}
                src={imgSrc}
                alt={`ombak-${index}`}
                className="image-stack"
                />
            ))}
            </div>
            <div className="headerContent">
                <div className="supergrafis">
                    <img src={supergrafis} alt="supergrafis" />
                </div>
                <div className="flex flex-col justify-center align-center md:pt-0">
                    <div className="flex justify-center">
                        <img src={logo} alt="" className="h-[270px] z-5" />
                    </div>
                    <div className="flex justify-center mt-[10px] align-center md:mt-0">
                        <img src={tagline} alt="Tagline OMB UMN 2025" className="h-[150px]" />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center text-white mt-[20px]">
                    <p className="text-xl">
                        Pendaftaran Kepanitiaan OMB UMN akan Segera Dibuka
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

        </section>
    );
}

export default Header;


