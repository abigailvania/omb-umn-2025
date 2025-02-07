import React, { useState, useEffect, useRef } from 'react';
import './image-slider.scss';

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
        <div className="image-slider" ref={sliderRef}>
            <div
                className="image-slider-inner"
                style={{
                    transform: `translateX(-${currentIndex * sliderWidth}px)`,
                    transition: isTransitioning ? 'transform 0.7s ease-in-out' : 'none',
                }}
            >
                {extendedImages.map((image, index) => (
                    <img key={index} src={image} alt="Slide" className="slider-image" />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;