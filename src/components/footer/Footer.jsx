import React from "react";
import "./Footer.scss";

import logo from "../../images/header-footer/hitam_glowterang1080.png";
import tagline from "../../images/header-footer/tagline-01.png";
import email from "../../images/header-footer/email.png";
import facebook from "../../images/header-footer/facebook.png";
import insta from "../../images/header-footer/insta.png";
import line from "../../images/header-footer/line.png";

function Footer() {
    return (
        <div className="footerSection">
            <div className="content">
                <div className="flex flex-row justify-between items-center mt-50 flexfooter">
                    <div className="flex-1 text-center order-2
                                    md:text-right md:order-1">
                        <p className="text-xl font-bold">Alamat</p>
                        <p>Universitas Multimedia Nusantara</p>
                        <p>Jl. Scientia Boulevard, Gading Serpong,</p>
                        <p>Tangerang Banten 15811, Indonesia.</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center order-first flexfooter
                                    -mt-[100px] md:mt-0 md:order-2">
                        <img src={logo} alt="Logo OMB UMN 2025" className="h-[200px] md:h-[270px] object-contain" />
                        <img src={tagline} alt="Tagline OMB UMN 2025" className="h-[70px] -mt-[20px] object-contain" />
                    </div>
                    <div className="flex-1 text-center md:text-left order-3">
                        <p className="text-xl font-bold">Pranala</p>
                        <p>YouTube: @ombumn</p>
                        <p>Spotify: Swara Bestari</p>
                        <p>Website: omb.umn.ac.id</p>
                    </div>
                </div>
                <div className="contact flex flex-col justify-between items-center mt-4 mb-[50px]">
                    <div className="contact-icon flex flex-row flex-wrap md:flex-nowrap justify-center gap-x-4">
                        <a href=""> <img src={email} alt="email" className="w-[30px] mx-[10px]" /></a>
                        <a href="https://www.instagram.com/ombumn"> <img src={insta} alt="instagram" className="w-[25px] mx-[10px]" /></a>
                        <a href="https://linevoom.line.me/user/_dQto-n6wJSbyUlsQVlEfNHoStsNJwzSLtfVj2Xo"> <img src={line} alt="line" className="w-[25px] mx-[10px]" /></a>
                        <a href="https://www.facebook.com/ombumn/?_rdc=2&_rdr"> <img src={facebook} alt="facebook" className="w-[25px] mx-[10px]" /></a>
                    </div>
                    <div className="mt-12 md:my-6 mb-[50px]">
                        <p>© OMB UMN 2025</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
