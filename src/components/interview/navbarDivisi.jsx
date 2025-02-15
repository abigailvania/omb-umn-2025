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
          <div className="p-6 border rounded-lg shadow-lg bg-white w-full">
            <div className="text-center text-lg font-semibold mt-2">
              <p>Tanggal: {selectedDay}</p>
            </div>

            <div className="text-center mt-4">
              <label className="mr-2 font-semibold">Pilih Hari:</label>
              <select
                className="border p-2 rounded"
                onChange={(e) => setSelectedDay(e.target.value)}
                value={selectedDay}
              >
                {Object.keys(selectedDivisi.jadwal).map((hari, index) => (
                  <option key={index} value={hari}>{hari}</option>
                ))}
              </select>
            </div>

            <ul className="mt-4 text-center">
              {selectedDivisi.jadwal[selectedDay].map((peserta, index) => (
                <li key={index} className="py-2 border-b last:border-none">
                  {peserta.nama} - {peserta.nim}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

    </div>
  );
};

export default NavbarDivisi;
