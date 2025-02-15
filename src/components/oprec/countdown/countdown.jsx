import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="flex justify-center gap-2 md:gap-5 mt-2 flex-wrap">
            {[['Hari', timeLeft.days], ['Jam', timeLeft.hours], ['Menit', timeLeft.minutes], ['Detik', timeLeft.seconds]].map(([label, value]) => (
                <div key={label} className="bg-white text-[#1E7D87] p-3 md:p-5 rounded-lg text-center shadow-md flex-1 min-w-[60px] md:min-w-[80px] max-w-[100px] md:max-w-[120px]">
                    <span className="block text-2xl md:text-3xl font-semibold">{value}</span>
                    <small className="text-sm md:text-base font-light capitalize">{label}</small>
                </div>
            ))}
        </div>
    );
};

export default Countdown;
