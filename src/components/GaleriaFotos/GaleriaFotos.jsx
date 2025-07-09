import React from "react";
import "../../styles/GaleriaFotos.style.css";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";

const GaleriaFotos = ({ imagenes }) => {
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    //carga de fotos
    setTimeout(() => {
      setCargando(false);
    }, 2000);
  }, []);
  return (
    <main className="galeria-main">
      <h1 className="titulo-fotos">Galería De Imágenes</h1>
      {cargando ? (
        <Spinner texto="Cargando fotos..." />
      ) : (
        <div className="galeria-grid">
          {imagenes.map((img, i) => (
            <img key={i} src={img} alt={`Foto ${i + 1}`} />
          ))}
        </div>
      )}
    </main>
  );
};
GaleriaFotos.propTypes = {
  imagenes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GaleriaFotos;
