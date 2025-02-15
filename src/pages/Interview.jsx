import React from "react";
import Navbar from "../components/navbar/Navbar2";
import HeaderInterview from "../components/interview/headerInterview";
import Peraturan from "../components/interview/aturanInterview";
import NavbarDivisi from "../components/interview/navbarDivisi";
import Footer from "../components/footer/Footer";

const Interview = () => {
  const backgroundStyle = {
    backgroundImage: "url('./images/gradien/gradien2.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", 
    width: "100%",
  };

  return (
    <div style={backgroundStyle}>
      <Peraturan />
      <Navbar />
      <HeaderInterview />
      <NavbarDivisi />
      <Footer />
    </div>
  );
};

export default Interview;
