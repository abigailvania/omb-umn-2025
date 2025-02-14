import React, { useState } from "react";
import listInterview from "./daftarInterview";

function NavbarDivisi() {
    const [selectedDivisi, setSelectedDivisi] = useState(null);

    return (
        <div>
            <div>
                {listInterview.map((divisi, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedDivisi(divisi)}
                    >
                        {divisi.divisi}
                    </button>
                ))}
            </div>
            
            
        </div>
    );
}

export default NavbarDivisi;
