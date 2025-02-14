import React from "react";
import Header from "../components/header/Header";
import ApaItuOMB from "../components/apa-itu-omb/ApaItuOMB";
import Youtube from "../components/youtube/Youtube";
import Oprec from "../components/oprec/Oprec";
import Footer from "../components/footer/Footer";

const Landing = () => {
  return (
    <>
      <Header />
      <ApaItuOMB />
      <Youtube />
      <Oprec />
      <Footer />
    </>
  );
};

export default Landing;
