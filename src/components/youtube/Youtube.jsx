import React from "react";
import './Youtube.scss';

import ombakterangtop from '../../images/ombak/Ombakterang_Top.png';
import ombaksantuydown from '../../images/ombak/Ombaksantuy_Down.png';
import supergrafis from '../../images/supergrafis/supergrafis3.png';


function Youtube() {
    return (
        <>
            <section className="YoutubeContainer mt-[-30px]">
                <div className="ombak">
                    <img src={ombakterangtop} alt="ombak"/>
                </div>
                
                <div className="Youtube">
                    <div className="YoutubeHeader">
                        <h1>Kura-kura Matahari merangkai memori</h1>
                        <h1>Selamat datang para pejuang Kura-kura Matahari!</h1>
                    </div>
                    <div className="YoutubeThumbnail">
                        {/* <div className="supergrafis">
                            <img src={supergrafis} alt="supergrafis" />
                        </div> */}
                        <iframe width="600" height="337" src="https://www.youtube.com/embed/uzkX9F6AkKU?si=eA2lIn2KHLYr8PgF" 
                                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; 
                                clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="ombak2">
                    <img src={ombaksantuydown} alt="ombak" />
                </div>
            </section>
        </>
    );
}

export default Youtube;