import React, { useState } from "react";
import listInterview from "./listInterview";
import bgImage from "../../images/gradien/gradien2.png";

const InterviewPage = () => {
  const [selectedDivisi, setSelectedDivisi] = useState(null);

  return (
    <div className="h-full w-full relative bg-cover bg-center bg-no-repeat pt-[140px]" 
        style={{ backgroundImage: `url(${bgImage})` }}
    >
        <div className="text-center">
          <h1 className="text-2xl font-bold">Daftar Peserta Interview</h1>
          <p className="text-lg">Mohon Memperhatikan Tanggal dan Waktu interview</p>
        </div>

        <nav className="flex justify-center flex-wrap items-center gap-2 p-4 rounded-lg shadow-md mt-6">
          {listInterview.map((divisi, index) => (
            <button
              key={index}
              className={`relative px-10 py-4 rounded-full text-white font-bold 
                  bg-[rgba(30,125,135,0.25)] backdrop-blur-sm shadow-[0_4px_10px_rgba(0,0,0,0.6)] 
                  overflow-hidden cursor-pointer transition-all duration-300 ease-in-out border-none outline-none 
                  hover:bg-[rgba(30,125,135,0.4)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.6)] 
                  before:content-[''] before:absolute before:top-[-50%] before:left-[-50%] 
                  before:w-[200%] before:h-[200%] before:bg-[radial-gradient(circle,rgba(255,255,255,0.3)_10%,transparent_50%)] 
                  before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100`}
              style={{
                backgroundColor: selectedDivisi === divisi ? divisi.color : "rgba(30,125,135,0.25)",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = divisi.color)}
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor =
                selectedDivisi === divisi ? divisi.color : "rgba(30,125,135,0.25)")
              }
              onClick={() => setSelectedDivisi(divisi)}
            >
              {divisi.divisi}
            </button>
          ))}
        </nav>

        {selectedDivisi && (
          <div className="flex flex-col items-center w-full md:w-2/3 mx-auto mt-6">
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

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 w-full">
              {Object.entries(selectedDivisi.jadwal).map(([hari, pesertaList], index) => (
                <div key={index} className="p-6 border rounded-lg shadow-lg bg-white">
                  <div className="text-center text-lg font-semibold">
                    <p className="text-[#16667C]">{hari}</p>
                  </div>
                  <ul className="mt-4 text-center">
                    {pesertaList.map((peserta, idx) => (
                      <li
                        key={idx}
                        className="py-2 border-b last:border-none flex justify-between"
                      >
                        <span className="text-left">{peserta.nama}</span>
                        <span className="text-right">{peserta.nim}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
    </div>
  );
};

export default InterviewPage;
