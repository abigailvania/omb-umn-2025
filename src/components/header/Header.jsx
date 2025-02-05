import React from "react";

import logo from "../../images/header-footer/logo.png"
import tagline from "../../images/header-footer/tagline.png"

import Button from "../button/Button.jsx";

function Header() {
    return (
        <>
            <div className="bg-[url('/gradient.png')] bg-cover bg-center h-screen">
                <div className="flex flex-col justify-center align-center
                                md:pt-18">
                    <div className="flex justify-center">
                        <img src={logo} alt="" className="h-[270px]" />
                    </div>
                    <div className="flex justify-center -mt-[60px] align-center 
                                    md:mt-0">
                        <img src={tagline} alt="Tagline OMB UMN 2025" className="h-[95px]" />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center text-white mt-20">
                    <p className="text-xl">
                        Pendaftaran Kepanitiaan OMB UMN 2025 Telah Dibuka!</p>
                    <Button
                        text="Daftar Sekarang!"
                        onClick={() => document.getElementById("oprec-section").scrollIntoView({ behavior: "smooth" })}
                        className="text-white max-w-[180px] mt-[20px]"
                    />
                </div>

            </div>
        </>
    )
}

export default Header