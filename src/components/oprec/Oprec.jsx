import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './oprec.scss';
import Countdown from "./countdown/Countdown.jsx";
import ContentDivisi from "./ContentDivisi";
import GlassButton from "../button/Button.jsx";
import ombakterangdown from "../../images/ombak/Ombakterang_Down-crop.png";
import ombakterangtop from "../../images/ombak/Ombakterang_Top-crop.png";
import supergrafis1 from '../../images/supergrafis/supergrafis4.png';
import supergrafis2 from '../../images/supergrafis/supergrafis5.png';

const DivisiCard = ({ divisi, onClick }) => {
    return (
        <div className="flex flex-col items-center p-4 cursor-pointer" onClick={() => onClick(divisi)}>
            <img src={divisi.logoImg} alt={divisi.name} className="w-32 md:w-44 lg:w-56 object-contain rounded-full border-white border-8 shadow-lg" />
        </div>
    );
};

function Oprec() {
    const [selectedDivisi, setSelectedDivisi] = useState(null);

    return (
        <>
            <section id="oprec-section" className="OprecText px-4 md:px-8 lg:px-16">
                <div className="supergrafis1">
                    <img src={supergrafis1} alt="supergrafis" className="w-full" />
                </div>
                <div className="OprecHeader text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Kura-kura Matahari menyanyi dalam harmoni,</h1>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Jangan lewatkan kesempatan ini!</h1>
                </div>
                <div className="OprecText text-center">
                    <h2 className="text-lg md:text-xl font-semibold">Siapkah kamu menjadi bagian dari OMB UMN 2025?</h2>
                    <p className="text-sm md:text-base max-w-3xl mx-auto">
                        Pendaftaran terbuka bagi mahasiswa/i aktif seluruh program studi dari angkatan 2022,
                        2023 dan 2024 yang telah lulus mengikuti rangkaian kegiatan OMB UMN. Form pendaftaran
                        terbuka dari 10 Februari 2025 pukul 08.00 WIB sampai 15 Februari 2025 pukul 23.59 WIB.
                    </p>
                </div>
                <Countdown targetDate="2025-02-15T23:59:00" />
            </section>
            <section className="OprecDivisi py-8 px-4 md:px-8 lg:px-16 relative">
                <div className="DivisiHeader text-center relative">
                    <img src={ombakterangtop} alt="ombak" className="w-full absolute top-0 left-0" />
                    <h1 className="text-3xl md:text-4xl font-bold relative z-10">Divisi</h1>
                    <h6 className="text-lg md:text-xl font-medium relative z-10">Yuk, jelajahi divisi-divisi yang ada di OMB UMN 2025!</h6>
                    <img src={ombakterangdown} alt="ombak" className="w-full absolute bottom-0 left-0" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center mt-6 relative z-10">
                    {ContentDivisi.map((divisi, index) => (
                        <DivisiCard key={index} divisi={divisi} onClick={setSelectedDivisi} />
                    ))}
                </div>
            </section>
            {selectedDivisi && (
                <AnimatePresence>
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative bg-white p-4 md:p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto rounded-xl shadow-lg flex flex-col"
                        >
                            <button
                                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
                                onClick={() => setSelectedDivisi(null)}
                            >
                                &times;
                            </button>
                            <h2 className="text-xl md:text-2xl font-bold">{selectedDivisi.name}</h2>
                            <h3 className="text-lg font-semibold">{selectedDivisi.nama}</h3>
                            <img
                                src={selectedDivisi.logoImg}
                                alt={selectedDivisi.name}
                                className="w-24 md:w-32 rounded-full mx-auto my-4"
                            />
                            <p className="text-sm text-justify">{selectedDivisi.deskripsi}</p>
                            <GlassButton
                                text="Daftar"
                                onClick={() => document.getElementById("oprec-section").scrollIntoView({ behavior: "smooth" })}
                                className="mt-4"
                            />
                        </motion.div>
                    </div>
                </AnimatePresence>
            )}
        </>
    );
}

export default Oprec;
