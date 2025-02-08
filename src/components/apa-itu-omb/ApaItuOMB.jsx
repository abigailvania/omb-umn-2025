import React, { useState, useEffect, useRef } from 'react';
import './ApaItuOMB.scss';

import foto1 from '../../assets/images/foto-1.jpg';
import foto2 from '../../assets/images/foto-2.jpg';
import foto3 from '../../assets/images/foto-3.jpg';
import foto4 from '../../assets/images/foto-4.jpg';
import foto5 from '../../assets/images/foto-5.jpg';
import supergrafis from '../../images/supergrafis/supergrafis2.png';


const ApaItuOMB = () => {
    const originalImages = [foto1, foto2, foto3, foto4, foto5];
    const images = [originalImages[originalImages.length - 1], ...originalImages, originalImages[0]];
    
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [sliderWidth, setSliderWidth] = useState(0);
    const sliderRef = useRef(null);
    const interval = 3000; 

    useEffect(() => {
        const updateSliderWidth = () => {
            if (sliderRef.current) {
                setSliderWidth(sliderRef.current.clientWidth);
            }
        };
        updateSliderWidth();
        window.addEventListener('resize', updateSliderWidth);
        return () => window.removeEventListener('resize', updateSliderWidth);
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, interval);

        return () => clearInterval(slideInterval);
    }, []);

    useEffect(() => {
        if (currentIndex === images.length - 1) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(1);
            }, 700);
        }
    }, [currentIndex]);

    useEffect(() => {
        if (!isTransitioning) {
            setTimeout(() => setIsTransitioning(true), 50);
        }
    }, [isTransitioning]);

    return (
        <section id="tentang-omb" className="apaituomb_section z-1">

            <div className="apaituomb_slider z-1" ref={sliderRef}>
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