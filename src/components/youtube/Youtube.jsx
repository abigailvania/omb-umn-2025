import React from "react";
import './Youtube.scss';

function Youtube() {
    return (
        <>
            <section className="YoutubeContainer">
                <div className="YoutubeBackground">
                    <img src="" alt="gradien" />
                </div>
                <div className="Youtube">
                    <div className="YoutubeHeader">
                        <h1>Kura-kura Matahari merangkai memori</h1>
                        <h1>Selamat datang para pejuang Kura-kura Matahari!</h1>
                    </div>
                    <div className="YoutubeThumbnail">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/uzkX9F6AkKU?si=eA2lIn2KHLYr8PgF" 
                                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; 
                                clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Youtube;
