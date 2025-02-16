import React, { useState, useEffect, useRef } from 'react';
import foto1 from '../../assets/images/foto-1.jpg';
import foto2 from '../../assets/images/foto-2.jpg';
import foto3 from '../../assets/images/foto-3.jpg';
import foto4 from '../../assets/images/foto-4.jpg';
import foto5 from '../../assets/images/foto-5.jpg';

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
        <section
        id="tentang-omb"
        className="flex flex-col lg:flex-row justify-center items-center w-full h-screen 
                    py-0 px-10 mt-16 relative bg-white rounded-br-[100px] rounded-bl-[100px] 
                    shadow-2xl border border-gray-300 z-10"
        >
            <div className="relative flex-shrink-0 w-full max-w-md lg:max-w-lg overflow-hidden rounded-2xl aspect-video" ref={sliderRef}>
                <div
                    className="flex w-full transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * sliderWidth}px)`, 
                        transition: isTransitioning ? 'transform 0.7s ease-in-out' : 'none',
                    }}
                >
                    {images.map((image, index) => (
                        <img key={index} src={image} alt="OMB" className="w-full h-full object-cover" />
                    ))}
                </div>
            </div>

            <div className="mt-8 lg:mt-0 lg:ml-12 max-w-lg text-center lg:text-left">
                <h1 className="text-2xl lg:text-3xl font-bold text-[#1E7D87] mb-4">Apa itu OMB?</h1>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    Orientasi Mahasiswa Baru (OMB) merupakan proses seremonial penyambutan mahasiswa baru di
                    <a href="https://www.umn.ac.id/en/home/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline"> Universitas Multimedia Nusantara</a> (UMN).
                    Melalui serangkaian kegiatan yang bertujuan membantu mahasiswa baru beradaptasi di lingkungan perkuliahan,
                    dengan memberikan informasi dan menanamkan nilai-nilai penting yang menjadi bekal untuk menjalani proses perkuliahan.
                </p>
            </div>
        </section>
    );
};

export default ApaItuOMB;
