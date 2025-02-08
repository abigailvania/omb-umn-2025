import React from "react";
import './Youtube.scss';

import supergrafis from '../../images/supergrafis/SUP2.png';
import ombak from '../../images/ombak/OMBAK2.png';


function Youtube() {
    return (
        <>
            <section className="YoutubeContainer mt-[-50px] z-0">
                <div className="supergrafis">
                    <img src={supergrafis} alt="supergrafis" />
                </div>
                
                <div className="Youtube">
                    <div className="YoutubeHeader mt-[150px]">
                        <h1>Kura-kura Matahari merangkai memori, Selamat datang para pejuang Kura-kura Matahari!</h1>
                    </div>
                    <div className="YoutubeThumbnail">
                        <iframe width="700" height="394" src="https://www.youtube.com/embed/uzkX9F6AkKU?si=eA2lIn2KHLYr8PgF" 
                                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; 
                                clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="ombak mt-[-250px] ">
                    <img src={ombak} alt="ombak" />
                </div>
            </section>
        </>
    );
}

export default Youtube;