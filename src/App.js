import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hardware from "./pages/Hardware";
import Software from "./pages/Software";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hardware" element={<Hardware />} />
        <Route path="/software" element={<Software />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
