import React from "react";
import logo from "../../images/header-footer/hitam_glowterang1080.png";
import tagline from "../../images/header-footer/tagline-01.png";
import email from "../../images/header-footer/email.png";
import facebook from "../../images/header-footer/facebook.png";
import insta from "../../images/header-footer/insta.png";
import line from "../../images/header-footer/line.png";

function Footer() {
    return (
        <div className="relative w-full bg-[url('/foto-footer-1.png')] bg-cover">
            <div className="relative z-2 p-3 -mt-[5px] p-2 sm: lg:p-5 text-white text-center">
                <div className="flex flex-col md:flex-row justify-between items-center mt-5">
                    <div className="flex-1 text-center md:text-right mb-5 md:mb-0">
                        <p className="text-xl font-bold">Alamat</p>
                        <p>Universitas Multimedia Nusantara</p>
                        <p>Jl. Scientia Boulevard, Gading Serpong,</p>
                        <p>Tangerang Banten 15811, Indonesia.</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center mb-5 md:mb-0">
                        <img src={logo} alt="Logo OMB UMN 2025" className="h-[200px] md:h-[270px] object-contain" />
                        <img src={tagline} alt="Tagline OMB UMN 2025" className="h-[70px] mt-[-20px] object-contain" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-xl font-bold">Pranala</p>
                        <p>YouTube: @ombumn</p>
                        <p>Spotify: Swara Bestari</p>
                        <p>Website: omb.umn.ac.id</p>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-4 mb-5">
                    <div className="flex flex-row justify-center gap-4 mb-5">
                        <a href=""><img src={email} alt="email" className="w-7" /></a>
                        <a href="https://www.instagram.com/ombumn"><img src={insta} alt="instagram" className="w-6" /></a>
                        <a href="https://linevoom.line.me/user/_dQto-n6wJSbyUlsQVlEfNHoStsNJwzSLtfVj2Xo"><img src={line} alt="line" className="w-6" /></a>
                        <a href="https://www.facebook.com/ombumn/?_rdc=2&_rdr"><img src={facebook} alt="facebook" className="w-6" /></a>
                    </div>
                    <p className="text-sm">© OMB UMN 2025</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
