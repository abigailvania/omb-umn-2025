import React from "react";
import Navbar from "../components/navbar/Navbar2";
import HalamanInterview from "../components/interview/HalamanInterview";
import Peraturan from "../components/interview/aturanInterview";


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
      <HalamanInterview />

    </div>
  );
};

export default Interview;
