import React from "react";

import ContentDivisi from "./ContentDivisi";

const DivisiCard = ({ divisi }) => {
    return (
        <>
            <img src={divisi.logoImg} alt={divisi.name} />
        </>
    )
}

function Oprec() {
    return (
        <>
            <section id="oprec-section" className="OprecText">
                <div className="OprecHeader">
                    <h1>Kura-kura matahari menyanyi dalam harmoni,</h1>
                    <h1>Jangan lewatkan kesempatan ini!</h1>
                    <h1>Siapkah kamu menjadi bagian dari OMB UMN 2025?</h1>
                </div>
                <div className="OprecText">
                    <p>Pendaftaran terbuka bagi mahasiswa/i aktif seluruh program studi dari angkatan 2022,
                        2023 dan 2024 yang telah lulus mengikuti rangkaian kegiatan OMB UMN. Form pendaftaran
                        terbuka dari 10 Februari 2025 pukul 08.00 WIB sampai 15 Februari 2025 pukul 23.59 WIB.
                    </p>
                </div>
            </section>
            <section className="OprecDivisi">
                <div className="DivisiHeader">
                    <h1>Divisi</h1>
                    <h6>Yuk, jelajahi divisi-divisi yang ada di OMB UMN 2025 dan jadi bagian untuk mengukir sejarah baru!</h6>
                    <h6>Klik divisi untuk melihat informasi lebih lanjut.</h6>
                </div>
                <div className="DivisiSection">
                    {ContentDivisi.map((divisi, index) => (
                        <DivisiCard key={index} divisi={divisi} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Oprec