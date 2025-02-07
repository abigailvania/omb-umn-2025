import React, { useState, useEffect, useRef } from "react";
import "./Youtube.scss";

import ombakterangtop from "../../images/ombak/Ombakterang_Top-crop.png";
import ombaksantuydown from "../../images/ombak/Ombaksantuy_Down.png";
import supergrafis from "../../images/supergrafis/supergrafis3.png";

function Youtube() {
    const [videoSrc, setVideoSrc] = useState("https://www.youtube.com/embed/uzkX9F6AkKU?si=eA2lIn2KHLYr8PgF");
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVideoSrc("https://www.youtube.com/embed/uzkX9F6AkKU?si=eA2lIn2KHLYr8PgF&autoplay=1");
                }
            },
            { threshold: 0.3 } 
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <section className="YoutubeContainer">
            <div className="ombak">
                <img src={ombakterangtop} alt="ombak" />
            </div>

            <div className="Youtube">
                <div className="YoutubeHeader">
                    <h1>Kura-kura Matahari merangkai memori</h1>
                    <h1>Selamat datang para pejuang Kura-kura Matahari!</h1>
                </div>
                <div className="YoutubeThumbnail">
                    <div className="supergrafis">
                        <img src={supergrafis} alt="supergrafis" />
                    </div>
                    <iframe
                        ref={videoRef}
                        width="600"
                        height="337"
                        src={videoSrc}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className="ombak2">
                <img src={ombaksantuydown} alt="ombak" />
            </div>
        </section>
    );
}

export default Youtube;
