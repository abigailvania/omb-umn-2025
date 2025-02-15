import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Interview from "./pages/interview.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect ke Landing */}
      </Routes>
    </Router>
  );
}

export default App;
