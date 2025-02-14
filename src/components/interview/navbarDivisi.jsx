import React, { useState } from "react";
import listInterview from "./listInterview";

function NavbarDivisi() {
    const [selectedDivisi, setSelectedDivisi] = useState(null);

    console.log("Total Divisi:", listInterview.length);

    return (
        <div>
            <div>
                <p>Total Divisi: {listInterview.length}</p>
                {listInterview.map((divisi, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedDivisi(divisi)}
                    >
                        {divisi.divisi}
                    </button>
                ))}
            </div>
            
            {selectedDivisi && (
                <div>
                    <h2>{selectedDivisi.divisi}</h2>
                    <img src={selectedDivisi.logoDivisi} alt={selectedDivisi.divisi} />
                    <div>
                        <h3>Jadwal Hari 1:</h3>
                        <ul>
                            {selectedDivisi.jadwal.hari1.map((item, idx) => (
                                <li key={idx}>
                                    {item.nama} - {item.nim} - {item.jam}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavbarDivisi;