import React, { useState, useEffect } from 'react';
// import './ApaItuOMB.scss';

// import icons
// import ArrowRight from '../../images/Arrow/Arrow_Right_MD.svg';

// import images
import foto1 from '../../assets/images/Perkembangan Hari 1_Steven Hans_195.jpg';
import foto2 from '../../assets/images/Perkembangan Hari 1_Steven Hans_195.jpg';
import foto3 from '../../assets/images/Perkembangan Hari 1_Steven Hans_195.jpg';

// import Flower from '../../images/supergrafis/SUPERGRAFIS METALLIC VIOLET/Fill - Bunga Lotus Biru 1.svg';
// import Supergrafis from '../../images/supergrafis/Divisi_supergrafis.png';

const images = [foto1, foto2, foto3];

const ApaItuOMB = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const openPage = () => {
        window.location.href = '/tentang-omb';
    };

    return (
        <section className="apaituomb_section">
            {/* <img className="apaituomb_supergrafis" src={Supergrafis} alt="Supergrafis" /> */}

            <div className="apaituomb_image">
                <img src={images[currentImage]} alt="OMB" />
            </div>

            <div className="apaituomb_content">
                <div className="apaituomb_title">
                    {/* <img src={Flower} alt="Flower Icon" /> */}
                    <h1>Apa itu OMB?</h1>
                </div>
                <p>
                    Orientasi Mahasiswa Baru (OMB) merupakan proses seremonial penyambutan mahasiswa baru di 
                    <a href="https://www.umn.ac.id/en/home/" target="_blank" rel="noopener noreferrer"> Universitas Multimedia Nusantara</a> (UMN). 
                    Melalui serangkaian kegiatan yang bertujuan membantu mahasiswa baru beradaptasi di lingkungan perkuliahan, 
                    dengan memberikan informasi dan menanamkan nilai-nilai penting yang menjadi bekal untuk menjalani proses perkuliahan.
                </p>

                {/* <button className="cta_button" onClick={openPage}>
                    Selengkapnya
                    <img src={ArrowRight} alt="Arrow Icon" />
                </button> */}
            </div>
        </section>
    );
};

export default ApaItuOMB;
