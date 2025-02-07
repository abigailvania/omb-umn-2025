import React from "react";
import "./header.scss";

import logo from "../../images/header-footer/logo.png"
import tagline from "../../images/header-footer/tagline.png"
import ombakterangdown from "../../images/ombak/Ombakterang_Down.png"

import GlassButton from "../button/Button.jsx";

function Header() {
    return (
        <section className="headerSection">
            <div className="headerContent">
                <div className="flex flex-col justify-center align-center md:pt-18">
                    <div className="flex justify-center">
                        <img src={logo} alt="" className="h-[270px]" />
                    </div>
                    <div className="flex justify-center -mt-[60px] align-center md:mt-0">
                        <img src={tagline} alt="Tagline OMB UMN 2025" className="h-[95px]" />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center text-white mt-[20px]">
                    <p className="text-xl mb-10">
                        Pendaftaran Kepanitiaan OMB UMN 2025 Telah Dibuka!
                    </p>
                    <GlassButton
                        text="Daftar Sekarang!"
                        onClick={() => document.getElementById("oprec-section").scrollIntoView({ behavior: "smooth" })}
                        className="text-white max-w-[180px] mt-[20px]"
                    />
                </div>
            </div>

            <div className="ombak">
                <img src={ombakterangdown} alt="ombak"/>
            </div>
        </section>
    );
}

export default Header;


