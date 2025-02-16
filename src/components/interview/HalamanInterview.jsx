import React, { useState, useEffect } from "react";
import listInterview from "./listInterview";
import bgImage from "../../images/gradien/gradien-foto.png";
import ombak from "../../images/ombak/OMBAK4.png";

const InterviewPage = () => {
  const [selectedDivisi, setSelectedDivisi] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const specialDivisi = "ARUTALA";

  useEffect(() => {
    if (listInterview.length > 0) {
      setSelectedDivisi(listInterview[0]);
    }
  }, []);

  return (
    <div className="h-full w-full relative bg-cover bg-center bg-no-repeat pt-[140px] pb-[200px] md:px-[200px]" 
         style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="text-center">
        <h1 className="text-5xl font-bold">Daftar Peserta Interview</h1>
        <p className="text-2xl">Selamat, kamu lolos ke tahap wawancara!</p>
      </div>

      <nav className="flex justify-center flex-wrap items-center gap-5 p-4 Z-901">
        {listInterview.map((divisi, index) => (
            <button
            key={index}
            className={`relative px-4 py-2 rounded-full text-white font-bold 
                bg-[rgba(30,125,135,0.25)] backdrop-blur-sm shadow-[0_4px_10px_rgba(0,0,0,0.6)] 
                overflow-hidden cursor-pointer transition-all duration-300 ease-in-out border-none outline-none 
                hover:bg-[rgba(30,125,135,0.4)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.6)]
                w-[120px] sm:w-[150px] md:w-[200px]`} 
            style={{
                backgroundColor: selectedDivisi === divisi ? divisi.color : "rgba(30,125,135,0.25)",
            }}
            onClick={() => setSelectedDivisi(divisi)}
            >
            {divisi.divisi}
            </button>
        ))}
        </nav>




      {selectedDivisi && (
        <div className="flex flex-col items-center w-full md:w-2/3 mx-auto mt-6 p-[10px]">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={selectedDivisi.logoDivisi}
              alt={selectedDivisi.divisi}
              className="w-[120px] md:w-[200px]"
            />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#16667C]">
                {selectedDivisi.divisi}
              </h2>
              <p className="text-xl md:text-2xl font-bold text-black">
                {selectedDivisi.nama}
              </p>
            </div>
          </div>

          <input
            type="text"
            placeholder="Cari nama..."
            className="p-2 border border-black-300 rounded-md mb-4 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 w-full">
            {Object.entries(selectedDivisi.jadwal).map(([hari, pesertaList], index) => {
              const filteredPeserta = pesertaList.filter((peserta) =>
                peserta.nama.toLowerCase().includes(searchTerm.toLowerCase())
              );

              if (filteredPeserta.length === 0) return null;

              const isSpecialDivisi = selectedDivisi.divisi === specialDivisi;

              return (
                <div key={index}>
                  {isSpecialDivisi && index === 0 && (
                    <div className="p-6 mb-6 border rounded-lg shadow-lg bg-[#f0f0f0]">
                      <div className="text-left text-lg font-semibold">
                        <p className="text-[#16667C]">Peraturan!</p>
                        <p>1. WAJIB menghadiri pertemuan perdana tepat waktu (minimal 15 menit sebelum waktu yang dicantumkan).</p>
                        <p>2. WAJIB berpakaian rapi dan sopan.</p>
                        <p>3. WAJIB membawa alat tulis dan buku catatan.</p>
                        <p>4. DILARANG memberitahukan isi dalam forum kepada pihak lain yang tidak bersangkutan</p>
                      </div>
                    </div>
                  )}

                  <div className="p-6 border rounded-lg shadow-lg bg-white">
                    <div className="text-center text-lg font-semibold">
                      <p className="text-[#16667C]">{hari}</p>
                      <p className="text-[#000000]">{selectedDivisi.jam}</p>
                    </div>
                    <ul className="mt-4 text-center">
                      {filteredPeserta.map((peserta, idx) => (
                        <li
                          key={idx}
                          className="py-2 border-b last:border-none flex justify-between"
                        >
                          <span className="text-left flex-1">{peserta.nama}</span>
                          <span className="w-24 text-center">{peserta.jam}</span>
                          <span className="text-right flex-1">{peserta.nim}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="ombak absolute bottom-[-10px] w-full px-0">
        <img src={ombak} alt="ombak" className="w-full relative block p-0 z-900 px-0" />
      </div>
    </div>
  );
};

export default InterviewPage;
