import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.style.css";
import PropTypes from "prop-types";

const Home = ({
  imagen,
  tituloHero,
  parrafoHero,
  tituloServicios,
  descripcion,
}) => {
  return (
    <>
      <img src={imagen} alt="Drone FPV" className="hero" />

      <div className="texto-hero">
        <h1 className="titulo-hero">{tituloHero}</h1>
        <p className="parrafo-hero">{parrafoHero}</p>
      </div>

      <br />
      <br />

      <div className="presentacion-servicios">
        <h1>{tituloServicios}</h1>
        <p>{descripcion}</p>
        <a href="https://wa.me/5491161196290" className="contacto-button">
          ¡Contactate ahora! <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>

      <h1 className="titulo-portfolio">Portfolio</h1>

      <div className="container-cards">
        <div className="card-fotos">
          <Link to="/galeria-fotos">Fotos</Link>
        </div>
        <div className="card-videos">
          <Link to="/galeria-videos">Videos</Link>
        </div>
      </div>
    </>
  );
};
Home.propTypes = {
  imagen: PropTypes.string.isRequired,
  tituloHero: PropTypes.string.isRequired,
  parrafoHero: PropTypes.string.isRequired,
  tituloServicios: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
};

export default Home;
