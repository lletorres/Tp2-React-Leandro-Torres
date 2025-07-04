import React from "react";
import { Link } from "react-router-dom";
import imagen from "../../assets/img/Avata2.jpeg";
import "./Home.style.css";

const Home = () => {
  return (
    <>
      <img src={imagen} alt="Drone FPV" className="hero" />
      <div className="texto-hero">
        <h1 className="titulo-hero">Empresa de servicios con drones</h1>
        <p className="parrafo-hero">
          Fotografia y video de alta calidad con drones profesionales
        </p>
      </div>
      <br />
      <br />
      <div className="presentacion-servicios">
        <h1>Servicios de grabación aérea con drones</h1>

        <p>
          Paisark FPV es una
          <strong>Empresa de Drones Profesionales</strong> que presta sus
          servicios a toda Argentina. Estamos autorizados para realizar
          operaciones y vuelos con drones en espacio aéreo controlado de
          aeropuertos y bases aéreas, vuelos con dron en ciudad y entorno urbano
          y trabajos especializados para industria e ingeniería con drones,
          cumpliendo con todos los requisitos técnicos de calidad y legalidad.
        </p>
        <a href="https://wa.me/5491161196290" class="contacto-button">
          contactate ahora! <i class="fa-brands fa-whatsapp"></i>
        </a>
      </div>
      <h1 class="titulo-portfolio">Portfolio</h1>
      <div class="container-cards">
        <div class="card-fotos">
          <Link to="/galeria-fotos">Fotos</Link>
        </div>
        <div class="card-videos">
          <a href="./galeria-videos.html">Videos</a>
        </div>
      </div>
    </>
  );
};

export default Home;
