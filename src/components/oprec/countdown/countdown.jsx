import React, { useState, useEffect } from "react";
import "./Countdown.scss";

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
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="countdown-container">
            <div className="countdown-box">
                <span>{timeLeft.days}</span>
                <small>Hari</small>
            </div>
            <div className="countdown-box">
                <span>{timeLeft.hours}</span>
                <small>Jam</small>
            </div>
            <div className="countdown-box">
                <span>{timeLeft.minutes}</span>
                <small>Menit</small>
            </div>
            <div className="countdown-box">
                <span>{timeLeft.seconds}</span>
                <small>Detik</small>
            </div>
        </div>
    );
};

export default Countdown;
