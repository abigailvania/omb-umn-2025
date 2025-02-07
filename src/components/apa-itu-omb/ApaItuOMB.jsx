import React, { useState, useEffect, useRef } from 'react';
import './ApaItuOMB.scss';

import foto1 from '../../assets/images/Perkembangan Hari 1_Steven Hans_195.jpg';
import foto2 from '../../assets/images/omb-3.jpg';
import foto3 from '../../assets/images/omb-6.jpg';
import foto4 from '../../assets/images/ALV00036.jpg';
import foto5 from '../../assets/images/omb-10.jpg';
import supergrafis from '../../images/supergrafis/supergrafis2.png';

const ApaItuOMB = () => {
    const originalImages = [foto1, foto2, foto3, foto4, foto5];
    const images = [...originalImages, originalImages[0]];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [sliderWidth, setSliderWidth] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const updateSliderWidth = () => {
            if (sliderRef.current) {
                setSliderWidth(sliderRef.current.clientWidth);
            }
        };

        updateSliderWidth(); // Panggil saat komponen pertama kali dimuat
        window.addEventListener('resize', updateSliderWidth);
        
        return () => window.removeEventListener('resize', updateSliderWidth);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex === images.length - 1) {
                setIsTransitioning(false);
                setCurrentIndex(0);
            } else {
                setIsTransitioning(true);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    useEffect(() => {
        if (!isTransitioning && currentIndex === 0) {
            setTimeout(() => setIsTransitioning(true), 50);
        }
    }, [isTransitioning, currentIndex]);

    return (
        <section id="tentang-omb" className="apaituomb_section">
            <div className="supergrafis">
                <img src={supergrafis} alt="supergrafis" />
            </div>
            <div className="apaituomb_slider" ref={sliderRef}>
                <div
                    className="apaituomb_slider_inner"
                    style={{
                        transform: `translateX(-${currentIndex * sliderWidth}px)`, 
                        transition: isTransitioning ? 'transform 0.7s ease-in-out' : 'none',
                    }}
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
