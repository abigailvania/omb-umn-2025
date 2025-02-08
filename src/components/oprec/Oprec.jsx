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
            <img
                src={divisi.logoImg}
                alt={divisi.name}
                className=""
            />
        </div>
    );
};

function Oprec() {
    const [selectedDivisi, setSelectedDivisi] = useState(null);

    const images = selectedDivisi
        ? [selectedDivisi.photo1, selectedDivisi.photo2, selectedDivisi.photo3].filter(Boolean)
        : [];

    return (
        <>
            <section className="oprec mt-[-100px]">
                <div className="supergrafis pt-[-200px]">
                    <img src={supergrafis} alt="supergrafis" />
                </div>
                <div id="oprec-section" className="OprecText">
                    <div className="OprecHeader">
                        <h1>Kura-kura Matahari menyanyi dalam harmoni,</h1>
                        <h1>Jangan lewatkan kesempatan ini!</h1>
                    </div>
                    <div className="OprecText text-center">
                        <h2>Siapkah kamu menjadi bagian dari OMB UMN 2025?</h2>
                        <p>
                            Pendaftaran terbuka bagi mahasiswa/i aktif seluruh program studi dari angkatan 2022, 2023 dan 2024
                            yang telah lulus mengikuti rangkaian kegiatan OMB UMN. Form pendaftaran terbuka dari 10 Februari
                            2025 pukul 08.00 WIB sampai 15 Februari 2025 pukul 23.59 WIB.
                        </p>
                    </div>
                    <Countdown targetDate="2025-02-15T23:59:00" />
                </div>
                <div className="OprecDivisi">
                    <div className="DivisiHeader">

                        <h1>Divisi</h1>
                        <h6>
                            Yuk, jelajahi divisi-divisi yang ada di OMB UMN 2025 dan jadi bagian untuk mengukir sejarah baru!
                        </h6>
                        <h6>Klik divisi untuk melihat informasi lebih lanjut.</h6>
                    </div>
                    <div className="logo-divisi z-10 mb-[50px]">
                            {ContentDivisi.slice(0, 9).map((divisi, index) => (
                                <DivisiCard key={index} divisi={divisi} onClick={setSelectedDivisi} />
                            ))}

                    </div>
                </div>
                <div className="ombak mb-[-100px]">
                    <img src={ombak} alt="ombak" />
                </div>
            </section>
            {selectedDivisi && (
                <AnimatePresence>
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 text-blue-950">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative bg-gray-100 p-6 max-w-[1000px] w-full max-h-[80vh] overflow-y-auto rounded-xl shadow-lg flex flex-col z-100"
                        >
                            <button
                                className="absolute z-10 top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl px-2 rounded-full bg-gray-300 cursor-pointer flex items-center justify-center w-10 h-10 shadow-md"
                                onClick={() => setSelectedDivisi(null)}
                            >
                                &times;
                            </button>

                            <div className="">
                                <div className="flex flex-row items-center text-center">
                                    <div className="flex-row mx-4">
                                        <h2 className="text-2xl font-bold">{selectedDivisi.name}</h2>
                                        <h3 className="text-lg font-semibold">{selectedDivisi.nama}</h3>

                                        <div className="flex justify-center my-4">
                                            <img
                                                src={selectedDivisi.logoImg}
                                                alt={selectedDivisi.name}
                                                className="w-[120px] object-contain rounded-full shadow-md"
                                            />
                                        </div>

                                        <div className="bg-gray-200 p-2 rounded-lg border border-blue-950 w-full">
                                            <p className="text-sm">Logo: {selectedDivisi.logo}</p>
                                            <p className="text-sm">Arti: {selectedDivisi.arti}</p>
                                        </div>
                                    </div>

                                    <div className="">
                                        <div className="foto-divisi">
                                            <ImageSlider images={images} interval={3000} />
                                        </div>
                                        <div className="bg-gray-200 p-4 mt-4 rounded-lg border border-blue-950 w-full mb-[20px]">
                                            <p className="text-sm text-justify">{selectedDivisi.deskripsi}</p>
                                            <p className="text-sm mt-2 text-justify">{selectedDivisi.tugas}</p>
                                        </div>
                                        {/* <GlassButton
                                            text="Daftar"
                                            onClick={() =>
                                                document.getElementById("oprec-section").scrollIntoView({ behavior: "smooth" })
                                            }
                                            className="text-white max-w-[180px]"
                                        /> */}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </AnimatePresence>
            )}
        </>
    );
}

export default Oprec;