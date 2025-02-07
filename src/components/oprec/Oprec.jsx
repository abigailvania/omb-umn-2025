import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './oprec.scss';
import Countdown from "./countdown/Countdown.jsx";

import ContentDivisi from "./ContentDivisi";
import GlassButton from "../button/Button.jsx";

import ombakterangdown from "../../images/ombak/Ombakterang_Down-crop.png"
import ombakterangtop from "../../images/ombak/Ombakterang_Top-crop.png"
import supergrafis1 from '../../images/supergrafis/supergrafis4.png';
import supergrafis2 from '../../images/supergrafis/supergrafis5.png';

const DivisiCard = ({ divisi, onClick }) => {
    return (
        <div className="flex flex-col items-center p-4 cursor-pointer" onClick={() => onClick(divisi)}>
            <img src={divisi.logoImg} alt={divisi.name} className="w-56 object-contain rounded-full border-white border-8 shadow-[0_5px_5px_rgba(0,0,0,0.25)]" />
        </div>
    );
};

function Oprec() {
    const [selectedDivisi, setSelectedDivisi] = useState(null);

    return (
        <>
            <section id="oprec-section" className="OprecText">
                <div className="supergrafis1">
                    <img src={supergrafis1} alt="supergrafis" />
                </div>
                <div className="OprecHeader text-center">
                    <h1>Kura-kura Matahari menyanyi dalam harmoni,</h1>
                    <h1>Jangan lewatkan kesempatan ini!</h1>
                </div>
                <div className="OprecText text-center">
                    <h2>Siapkah kamu menjadi bagian dari OMB UMN 2025?</h2>
                    <p>Pendaftaran terbuka bagi mahasiswa/i aktif seluruh program studi dari angkatan 2022,
                        2023 dan 2024 yang telah lulus mengikuti rangkaian kegiatan OMB UMN. Form pendaftaran
                        terbuka dari 10 Februari 2025 pukul 08.00 WIB sampai 15 Februari 2025 pukul 23.59 WIB.
                    </p>
                </div>
                <Countdown targetDate="2025-02-15T23:59:00" />
            </section>
            <section className="OprecDivisi text-center">
                <div className="DivisiHeader">
                    <div className="ombak1">
                        <img src={ombakterangtop} alt="ombak1" />
                    </div>
                    <h1>Divisi</h1>
                    <p>Yuk, jelajahi divisi-divisi yang ada di OMB UMN 2025 dan jadi bagian untuk mengukir sejarah baru!</p>
                    <p>Klik divisi untuk melihat informasi lebih lanjut.</p>
                    <div className="ombak2">
                        <img src={ombakterangdown} alt="ombak2" />
                    </div>
                    <div className="supergrafis2 z-0">
                        <img src={supergrafis2} alt="supergrafis" className="z-0" />
                    </div>
                </div>
                <div className="logo-divisi flex flex-col items-center p-4 gap-4">
                    <div className="flex justify-center gap-4">
                        {ContentDivisi.slice(0, 4).map((divisi, index) => (
                            <DivisiCard key={index} divisi={divisi} onClick={setSelectedDivisi} />
                        ))}
                    </div>
                    <div className="flex justify-center gap-4">
                        {ContentDivisi.slice(4, 7).map((divisi, index) => (
                            <DivisiCard key={index} divisi={divisi} onClick={setSelectedDivisi} />
                        ))}
                    </div>
                    <div className="flex justify-center gap-4">
                        {ContentDivisi.slice(7, 9).map((divisi, index) => (
                            <DivisiCard key={index} divisi={divisi} onClick={setSelectedDivisi} />
                        ))}
                    </div>
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
                            className="relative bg-gray-100 p-6 max-w-[700px] w-full max-h-[65vh] overflow-y-auto rounded-xl shadow-lg flex flex-col"
                        >
                            <button
                                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl px-2 rounded-full bg-gray-300 cursor-pointer flex items-center justify-center w-8 h-8"
                                onClick={() => setSelectedDivisi(null)}
                            >
                                &times;
                            </button>
                            <div className="">
                                <div className="flex flex-col items-center text-center">
                                    <h2 className="text-2xl font-bold">{selectedDivisi.name}</h2>
                                    <h3 className="text-lg font-semibold">{selectedDivisi.nama}</h3>
                                    <img src={selectedDivisi.logoImg} alt={selectedDivisi.name} className="w-[120px] object-contain rounded-full shadow-md my-4" />
                                    <div className="bg-gray-200 p-2 rounded-lg border border-blue-950 w-full text-center">
                                        <p className="text-sm">Logo: {selectedDivisi.logo}</p>
                                        <p className="text-sm">Arti: {selectedDivisi.arti}</p>
                                    </div>
                                    <div className="bg-gray-200 p-4 mt-4 rounded-lg border border-blue-950 w-full">
                                        <p className="text-sm text-justify">{selectedDivisi.deskripsi}</p>
                                        <p className="text-sm mt-2 text-justify">{selectedDivisi.tugas}</p>
                                    </div>
                                    <GlassButton
                                        text="Daftar"
                                        onClick={() => document.getElementById("oprec-section").scrollIntoView({ behavior: "smooth" })}
                                        className="text-white max-w-[180px]"
                                    />
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
