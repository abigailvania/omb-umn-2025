import React from "react";
import Navbar from "../components/navbar/navbar2";
import HeaderInterview from "../components/interview/headerInterview";
import Peraturan from "../components/interview/aturanInterview";
import NavbarDivisi from "../components/interview/navbarDivisi";


const Interview = () => {
  return (
    <> 
      <Peraturan />
      <Navbar />
      <HeaderInterview />
      <NavbarDivisi />
    </>
  );
};

export default Interview;
