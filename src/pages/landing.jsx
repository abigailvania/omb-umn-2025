import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/header/Header";
import ApaItuOMB from "./src/components/apa-itu-omb/ApaItuOMB";
import Youtube from "./src/components/youtube/Youtube";
import Oprec from "./src/components/oprec/Oprec";
import Footer from "./src/components/footer/Footer";
import Navbar from "./src/components/navbar/Navbar";
import Interview from "./pages/Interview";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <ApaItuOMB />
            <Youtube />
            <Oprec />
          </>
        } />
        <Route path="/interview" element={<Interview />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
