import React from "react";

import logo from "../../images/header-footer/logo.png"
import tagline from "../../images/header-footer/tagline.png"

function Footer() {
    return (
        <>
            <div className="TopFooter">
                <div className="LeftFooter">
                    <h5>Alamat</h5>
                    <p>Universitas Multimedia Nusantara Jl. Scientia Boulevard, Gading Serpong, Tangerang Banten 15811, Indonesia.</p>
                </div>
                <div className="CenterFooter">
                    <img src={logo} alt="Logo OMB UMN 2025" />
                    <img src={tagline} alt="Tagline OMB UMN 2025" />
                </div>
                <div className="RightFooter">
                    <h5>Pranala</h5>
                    <p>YouTube: @ombumn</p>
                    <p>Spotify: Swara Bestari</p>
                    <p>Website: omb.umn.ac.id</p>
                </div>
            </div>
            <div className="BottomFooter">
                <div className="ContactFooter">
                    <a href="#"> <img src="" alt="email" /></a>
                    <a href="https://www.instagram.com/ombumn"> <img src="" alt="instagram" /></a>
                    <a href="https://linevoom.line.me/user/_dQto-n6wJSbyUlsQVlEfNHoStsNJwzSLtfVj2Xo"> <img src="" alt="line" /></a>
                    <a href="https://www.facebook.com/ombumn/?_rdc=2&_rdr"> <img src="" alt="facebook" /></a>
                </div>
                <div className="CRFooter">
                    <p>© OMB UMN 2025</p>
                </div>
            </div>
        </>
    )
}

export default Footer