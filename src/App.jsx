import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AcercaDe from "./components/AcercaDe/AcercaDe";
import Contacto from "./components/Contacto/Contacto";
import GaleriaFotos from "./components/GaleriaFotos/GaleriaFotos";
import GaleriaVideos from "./components/GaleriaVideos/GaleriaVideos";
import Footer from "./components/Footer/Footer";
import "./styles/general.css";
import imagenHero from "./assets/img/Avata2.jpeg";
//Importo las imagenes
import img1 from "./assets/img/foto1.jpg";
import img2 from "./assets/img/foto2.jpg";
import img3 from "./assets/img/foto3.jpg";
import img4 from "./assets/img/foto4.jpg";
import img5 from "./assets/img/foto5.jpg";
import img6 from "./assets/img/foto6.jpg";

const videos = [
  "https://www.youtube.com/embed/pLU10HJrCV8?si=D5cIO_US1SxgvYbR",
  "https://www.youtube.com/embed/fPnTDmf59Lk?si=2SUhc-P_gKtgpdaB",
  "https://www.youtube.com/embed/3b7H4Nf4vvo?si=heMaKEwUzgzs9SnO",
  "https://www.youtube.com/embed/Kbp-U_kTOKw?si=dtfL3j2s0btTOOtk",
  "https://www.youtube.com/embed/fdyvTwVSiZM?si=YUw_3U7MRt7z9X7T",
  "https://www.youtube.com/embed/6Ul1REyraWQ?si=Ed5_uhlM1aP-hDle",
  "https://www.youtube.com/embed/5k2TjbAM9kE?si=f_cmcjbwM16HYEGY",
];

const imagenes = [img1, img2, img3, img4, img5, img6]; //hago un array con las imagenes importadas
//y las paso como props al componente GaleriaFotos

function App() {
  // Acà se definen las rutas
  const rutas = [
    {
      path: "/",
      element: (
        <Home
          imagen={imagenHero}
          tituloHero="Empresa de servicios con drones"
          parrafoHero="Fotografía y video de alta calidad con drones profesionales"
          tituloServicios="Servicios de grabación aérea con drones"
          descripcion="Paisark FPV es una Empresa de Drones Profesionales que presta sus servicios a toda Argentina. Estamos autorizados para realizar operaciones y vuelos con drones en espacio aéreo controlado de aeropuertos y bases aéreas, vuelos con dron en ciudad y entorno urbano y trabajos especializados para industria e ingeniería con drones, cumpliendo con todos los requisitos técnicos de calidad y legalidad."
        />
      ),
    },
    { path: "/acerca-de", element: <AcercaDe /> },
    { path: "/contacto", element: <Contacto /> },
    { path: "/galeria-fotos", element: <GaleriaFotos imagenes={imagenes} /> }, //recibe como props las imagenes
    { path: "/galeria-videos", element: <GaleriaVideos videos={videos} /> },
  ];

  return (
    <div className="body">
      <Router>
        <Navbar />

        <Routes>
          {rutas.map((ruta, index) => (
            <Route key={index} path={ruta.path} element={ruta.element} />
          ))}
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
