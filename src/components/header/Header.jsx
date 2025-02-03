import React from "react";

import logo from "../../images/header-footer/logo.png"
import tagline from "../../images/header-footer/tagline.png"

function Header() {
    return (
        <>
            <div className="bg-[url('/gradient.png')] bg-cover bg-center h-screen">
                <div className="flex flex-col justify-center">
                    <div className="flex justify-center">
                        <img src={logo} alt="" className="h-[500px]"/>
                    </div>
                    <div className="flex justify-center -mt-[60px]">
                        <img src={tagline} alt="" className="h-[150px]"/>
                    </div>
                    <button></button>
                </div>
            </div>
        </>
    )
}

export default Header