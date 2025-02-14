import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import ApaItuOMB from "./components/apa-itu-omb/ApaItuOMB";
import Youtube from "./components/youtube/Youtube";
import Oprec from "./components/oprec/Oprec";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
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
