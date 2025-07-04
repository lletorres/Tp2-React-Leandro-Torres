import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AcercaDe from "./components/AcercaDe/AcercaDe";
import Contacto from "./components/Contacto/Contacto";
import GaleriaFotos from "./components/GaleriaFotos/GaleriaFotos";
import Footer from "./components/Footer/Footer";
import "./styles/general.css";

function App() {
  return (
    <div className="body">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/galeria-fotos" element={<GaleriaFotos />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
