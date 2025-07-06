import React from "react";
import "./GaleriaFotos.style.css";

const GaleriaFotos = ({ imagenes }) => {
  return (
    <main className="galeria-main">
      <h1 className="titulo-fotos">Galería De Imágenes</h1>
      <div className="galeria-grid">
        {imagenes.map((img, i) => (
          <img key={i} src={img} alt={`Foto ${i + 1}`} />
        ))}
      </div>
    </main>
  );
};

export default GaleriaFotos;
