import React, { useState, useEffect, useRef } from "react";
import "./Youtube.scss";

import ombakterangtop from "../../images/ombak/Ombakterang_Top-crop.png";
import ombaksantuydown from "../../images/ombak/Ombaksantuy_Down.png";
import supergrafis from "../../images/supergrafis/supergrafis3.png";

function Youtube() {
    const [videoSrc, setVideoSrc] = useState("https://www.youtube.com/embed/uzkX9F6AkKU?si=eA2lIn2KHLYr8PgF&autoplay=1&mute=1");
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);
    const hasPlayed = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasPlayed.current) {
                    setVideoSrc("https://www.youtube.com/embed/uzkX9F6AkKU?si=eA2lIn2KHLYr8PgF&autoplay=1&mute=1");
                    hasPlayed.current = true;
                }
            },
            { threshold: 0.5 }
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

    const handleUnmute = () => {
        setIsMuted(false);
        setVideoSrc("https://www.youtube.com/embed/uzkX9F6AkKU?si=eA2lIn2KHLYr8PgF&autoplay=1");
    };

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
                        width="800"
                        height="450"
                        src={videoSrc}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                {isMuted && (
                    <button className="unmute-button" onClick={handleUnmute}>
                        🔊 Aktifkan Suara
                    </button>
                )}
            </div>
            <div className="ombak2">
                <img src={ombaksantuydown} alt="ombak" />
            </div>
        </section>
    );
}

export default Youtube;
