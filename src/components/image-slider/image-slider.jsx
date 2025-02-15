import React, { useState, useEffect, useRef } from 'react';

const ImageSlider = ({ images, interval = 2000 }) => {
    const extendedImages = [...images, images[0]];
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
        updateSliderWidth();
        window.addEventListener('resize', updateSliderWidth);
        return () => window.removeEventListener('resize', updateSliderWidth);
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            if (currentIndex === extendedImages.length - 1) {
                setIsTransitioning(false);
                setCurrentIndex(0);
            } else {
                setIsTransitioning(true);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }
        }, interval);
        return () => clearInterval(slideInterval);
    }, [currentIndex, extendedImages.length, interval]);

    useEffect(() => {
        if (!isTransitioning && currentIndex === 0) {
            setTimeout(() => setIsTransitioning(true), 50);
        }
    }, [isTransitioning, currentIndex]);

    return (
        <div className="flex-none md:w-full md:h-[250px] overflow-hidden relative rounded-[10px] aspect-[16/9] mx-auto" ref={sliderRef}>
            <div
                className={`flex w-full ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${currentIndex * sliderWidth}px)` }}
            >
                {extendedImages.map((image, index) => (
                    <img key={index} src={image} alt="Slide" className="flex-none w-full h-full object-cover transition-opacity duration-500 ease-in-out" />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
