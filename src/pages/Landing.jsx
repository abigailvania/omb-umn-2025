import React from "react";
import Header from "../components/header/Header.jsx";
import ApaItuOMB from "../components/apa-itu-omb/ApaItuOMB.jsx";
import Youtube from "../components/youtube/Youtube.jsx";
import Oprec from "../components/oprec/Oprec.jsx";
import Footer from "../components/footer/Footer.jsx";
import Navbar from "../components/navbar/Navbar.jsx";

const Landing = () => {
    return (
        <>
            <Navbar />
            <Header />
            <section id="tentang-omb">
                <ApaItuOMB />
            </section>
            <Youtube />
            <section id="oprec-section">
                <Oprec />
            </section>
            <Footer />
        </>
    );
};

export default Landing;
