import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./oprec.scss";
import Countdown from "./countdown/Countdown.jsx";
import ContentDivisi from "./ContentDivisi";
import GlassButton from "../button/Button.jsx";
import ImageSlider from "../image-slider/image-slider.jsx";
import ombak from "../../images/ombak/OMBAK4.png";
import supergrafis from "../../images/supergrafis/SUP3.png";

const DivisiCard = ({ divisi, onClick }) => {
    return (
        <div className="flex flex-col items-center cursor-pointer" onClick={() => onClick(divisi)}>
            <img src={divisi.logoImg} alt={divisi.name} className="" />
        </div>
    );
};

function Oprec() {
    const [selectedDivisi, setSelectedDivisi] = useState(null);

    const images = selectedDivisi
        ? [selectedDivisi.photo1, selectedDivisi.photo2, selectedDivisi.photo3].filter(Boolean)
        : [];

    const closeModal = (e) => {
        if (e.target.id === "modal-container") {
            setSelectedDivisi(null);
        }
    };

    return (
        <>
            <section className="oprec">
                <div className="supergrafis absolute z-1 opacity-40">
                    <img src={supergrafis} alt="supergrafis" />
                </div>
                <div className="OprecText shadow-[0px_10px_10px_rgba(0,0,0,0.6)]">
                    <div className="OprecHeader">
                        <h1>Kura-kura Matahari menyanyi dalam harmoni,</h1>
                        <h1>Jangan lewatkan kesempatan ini!</h1>
                    </div>
                    <div className="OprecDetail">
                        <h2>Siapkah kamu menjadi bagian dari OMB UMN 2025?</h2>
                        <p>Pendaftaran terbuka dari 17 Februari 2025 pukul 08.00 WIB sampai 22 Februari 2025 pukul 23.59 WIB.</p>
                    </div>
                    <div className="countdown-close">
                        <Countdown targetDate="2025-02-22T23:59:00" />
                    </div>
                </div>
                <div id="oprec-section" className="OprecDivisi">
                    <div className="DivisiHeader">
                        <h1>DIVISI</h1>
                        <h6>Klik divisi untuk melihat informasi lebih lanjut.</h6>
                    </div>
                    <div className="logo-divisi z-10 mb-[120px]">
                        {ContentDivisi.slice(0, 9).map((divisi, index) => (
                            <DivisiCard key={index} divisi={divisi} onClick={setSelectedDivisi} />
                        ))}
                    </div>
                </div>
                <div className="ombak w-full">
                    <img src={ombak} alt="ombak" className="w-full z-1000"/>
                </div>
            </section>
            
            <AnimatePresence>
                {selectedDivisi && (
                    <div id="modal-container" onClick={closeModal} className="fixed inset-0 flex items-center justify-center bg-black/50 z-1000">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative bg-[rgba(255,255,255,0.75)] p-10 max-w-[850px] w-full max-h-[85vh] overflow-y-auto rounded-xl shadow-lg flex flex-col"
                        >
                            <button
                                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl px-2 rounded-full bg-gray-300 cursor-pointer"
                                onClick={() => setSelectedDivisi(null)}
                            >
                                &times;
                            </button>

                            <div className="flex flex-col md:flex-row items-center text-center">
                                <div className="flex flex-col md:flex-row items-start text-left mt-0">
                                    <div className="detail-divisi flex flex-col items-start mx-4 w-full mb-0">
                                        <h2 className="judul text-2xl font-bold">{selectedDivisi.name}</h2>
                                        <h3 className="text-lg font-semibold">{selectedDivisi.nama}</h3>

                                        <div className="flex justify-start my-4">
                                            <img
                                                src={selectedDivisi.logoImg}
                                                alt={selectedDivisi.name}
                                                className="w-[200px] object-contain rounded-full shadow-md"
                                            />
                                        </div>

                                        <div className="bg-gray-200 p-4 rounded-lg border w-[200px] max-w-sm shadow-[0px_4px_10px_rgba(0,0,0,0.6)]">
                                            <div className="flex">
                                                <div className="w-16 flex justify-between">
                                                    <p className="text-sm font-semibold">Logo</p>
                                                    <p className="text-sm font-semibold">:</p>
                                                </div>
                                                <p className="text-sm flex-1 text-left ml-[15px]">{selectedDivisi.logo}</p>
                                            </div>
                                            <div className="flex items-start mt-1">
                                                <div className="w-16 flex justify-between">
                                                    <p className="text-sm font-semibold">Arti</p>
                                                    <p className="text-sm font-semibold">:</p>
                                                </div>
                                                <p className="text-sm flex-1 text-left whitespace-pre-line ml-[15px]">{selectedDivisi.arti}</p>
                                            </div>
                                        </div>

                                        <div className="tombol-daftar mt-[20px] rounded-lg mb-[15px]">
                                            <button className="text-white w-[200px] h-[40px] shadow-[0px_4px_10px_rgba(0,0,0,0.6)] rounded-lg" onClick={() => window.location.href = selectedDivisi.link} > 
                                                Daftar
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="info-divisi">
                                    <div className="foto-divisi rounded-lg">
                                        <ImageSlider images={images} interval={3000} />
                                    </div>
                                    <div className="bg-gray-200 p-4 mt-4 rounded-lg border w-full mb-[20px] shadow-[0px_4px_10px_rgba(0,0,0,0.6)]">
                                        <p className="text-sm text-justify">{selectedDivisi.deskripsi}</p>
                                        <p className="text-sm mt-2 text-justify">{selectedDivisi.tugas}</p>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Oprec;
