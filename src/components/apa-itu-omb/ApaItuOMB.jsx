import React, { useState, useEffect } from 'react';
import './ApaItuOMB.scss';

// Import images
import foto1 from '../../assets/images/Perkembangan Hari 1_Steven Hans_195.jpg';
import foto2 from '../../assets/images/omb-3.jpg';
import foto3 from '../../assets/images/omb-6.jpg';

const images = [foto1, foto2, foto3];

const ApaItuOMB = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="apaituomb_section">
            <div className="apaituomb_slider">
                <div 
                    className="apaituomb_slider_inner"
                    style={{ transform: `translateX(-${currentIndex * 500}px)` }} // Hanya geser 1 gambar setiap kali
                >
                    {images.map((image, index) => (
                        <img key={index} src={image} alt="OMB" className="apaituomb_image" />
                    ))}
                </div>
            </div>

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
