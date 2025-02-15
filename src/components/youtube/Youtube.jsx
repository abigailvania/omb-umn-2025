import React from "react";
import supergrafis from '../../images/supergrafis/SUP2.png';
import ombak from '../../images/ombak/OMBAK2.png';


function Youtube() {
    return (
        <>
            <section className="bg-[url('/gradienYoutube.png')] w-full bg-cover relative mt-[-80px] z-0">
                <div className="absolute w-full z-1 opacity-40">
                    <img src={supergrafis} alt="supergrafis" />
                </div>

                <div className="-mt-[30px] md:mt-0 flex flex-col items-center justify-center text-center px-0 py-5">
                    <div className="mb-[20px] mt-[150px]">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white my-1 mx-0">Kura-kura Matahari merangkai memori, <br />Selamat datang para pejuang Kura-kura Matahari!</h1>
                    </div>
                    <div className="flex justify-center w-full relative px-3 py-0 z-100">
                        <iframe
                            src="https://www.youtube.com/embed/uzkX9F6AkKU?si=eA2lIn2KHLYr8PgF"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="lg:max-w-[50%] md:max-w-[60%] aspect-video rounded-xl w-[70%]"
                        ></iframe>
                    </div>
                </div>
                <div className="w-full z-1 mt-[-250px] ">
                    <img src={ombak} alt="ombak" className="mt-[150px] md:mt-0 w-full z-1" />
                </div>
            </section>
        </>
    );
}

export default Youtube;