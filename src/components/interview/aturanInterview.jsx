import React, { useState, useEffect } from "react";

function Peraturan() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, []);

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-1000 bg-black/40 backdrop-blur-lg z-1000">
            <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl shadow-xl w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-xl relative">
                <div className="text-center border-b pb-3">
                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-red-600">
                        PERHATIAN!
                    </h1>
                </div>
                <div className="mt-4 space-y-2 text-gray-700 text-sm sm:text-base md:text-lg">
                    <p>1. Peserta wawancara wajib hadir tepat waktu sesuai dengan jadwal yang ditentukan.</p>
                    <p>2. Peserta wajib berpakaian sesuai dengan peraturan kampus.</p>
                    <p>3. Isi nama masing-masing pada kertas “Daftar Urutan Wawancara.”</p>
                    <p>4. Peserta wawancara akan dipanggil masuk berurutan sesuai urutan yang tertulis.</p>
                    <p>5. Selama menunggu sesi wawancara masing-masing, dipersilakan menunggu di lorong depan ruang wawancara dan menjaga ketenangan agar tidak mengganggu sesi wawancara di dalam ruang kelas.</p>
                    <p>6. Dilarang makan dan minum (kecuali jika dipersilakan) selama sesi wawancara berlangsung.</p>
                    <p>7. Dilarang menyebarkan isi wawancara kepada pihak mana pun (terutama ke sesama peserta wawancara OMB UMN 2025).</p>
                </div>

                <div className="mt-6 flex justify-center">
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="px-6 py-2 bg-red-600 text-white font-semibold 
                                   rounded-lg hover:bg-red-700 transition-all"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Peraturan;
