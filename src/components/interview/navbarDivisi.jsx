import React, { useState } from "react";
import listInterview from "./listInterview";

const NavbarDivisi = () => {
  const [selectedDivisi, setSelectedDivisi] = useState(null);
  const [selectedDay, setSelectedDay] = useState("hari1");

  return (
    <div className="p-4">
      <nav className="flex flex-wrap gap-2 bg-gray-200 p-4 rounded-lg shadow-md">
        {listInterview.map((divisi, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={() => setSelectedDivisi(divisi)}
          >
            {divisi.divisi}
          </button>
        ))}
      </nav>

      {selectedDivisi && (
        <div className="flex flex-col items-center w-full md:w-2/3 mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <img src={selectedDivisi.logoDivisi} alt={selectedDivisi.divisi} className="w-[120px] md:w-[200px]" />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#16667C]">{selectedDivisi.divisi}</h2>
              <p className="text-xl md:text-2xl font-bold text-black">{selectedDivisi.nama}</p>
            </div>  
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {Object.entries(selectedDivisi.jadwal).map(([hari, pesertaList], index) => (
              <div key={index} className="p-6 border rounded-lg shadow-lg bg-white">
                <div className="text-center text-lg font-semibold">
                  <p className="text-[#16667C]">{hari}</p>
                </div>

                <ul className="mt-4 text-center">
                  {pesertaList.map((peserta, idx) => (
                    <li key={idx} className="py-2 border-b last:border-none">
                      {peserta.nama} - {peserta.nim}
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

export default NavbarDivisi;
