import React, { useState } from "react";
import listInterview from "./listInterview";

const NavbarDivisi = () => {
  const [selectedDivisi, setSelectedDivisi] = useState(null);

  return (
    <div className="p-4">
      <nav className="flex flex-wrap gap-2 bg-gray-200 p-4 rounded-lg shadow-md">
        {listInterview.map((divisi, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={() => setSelectedDivisi(divisi)}
          >
            {divisi.name}
          </button>
        ))}
      </nav>
      {selectedDivisi && (
        <div className="mt-4 p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-xl font-bold">{selectedDivisi.name}</h2>
          <p className="text-gray-700 mt-2">{selectedDivisi.description}</p>
        </div>
      )}
    </div>
  );
};

export default NavbarDivisi;
