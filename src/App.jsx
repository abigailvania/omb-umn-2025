import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Interview from "./pages/Interview.jsx";
// import HalamanError from "./pages/halamanerror";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/interview" element={<Interview />} />
        {/* <Route path="*" element={<HalamanError />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
