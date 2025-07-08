import React from "react";
import "./GaleriaFotos.style.css";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";

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

export default GaleriaFotos;
