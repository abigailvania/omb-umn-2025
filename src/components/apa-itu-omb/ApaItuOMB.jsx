import React from 'react';
import ImageSlider from './image-slider/image-slider.jsx';
import './ApaItuOMB.scss';

import foto1 from '../../assets/images/Perkembangan Hari 1_Steven Hans_195.jpg';
import foto2 from '../../assets/images/omb-3.jpg';
import foto3 from '../../assets/images/omb-6.jpg';
import foto4 from '../../assets/images/ALV00036.jpg';
import foto5 from '../../assets/images/omb-10.jpg';
import supergrafis from '../../images/supergrafis/supergrafis2.png';

const ApaItuOMB = () => {
    const images = [foto1, foto2, foto3, foto4, foto5];

    return (
        <section id="tentang-omb" className="apaituomb_section">
            <div className="supergrafis">
                <img src={supergrafis} alt="supergrafis" />
            </div>
            <ImageSlider images={images} />
            <div className="apaituomb_content">
                <h1>Apa itu OMB?</h1>
                <p>
                    Orientasi Mahasiswa Baru (OMB) merupakan proses seremonial penyambutan mahasiswa baru di
                    <a href="https://www.umn.ac.id/en/home/" target="_blank" rel="noopener noreferrer"> Universitas Multimedia Nusantara</a> (UMN).
                    Melalui serangkaian kegiatan yang bertujuan membantu mahasiswa baru beradaptasi di lingkungan perkuliahan,
                    dengan memberikan informasi dan menanamkan nilai-nilai penting yang menjadi bekal untuk menjalani proses perkuliahan.
                </p>
            </div>
        </section>
    );
};

export default ApaItuOMB;
