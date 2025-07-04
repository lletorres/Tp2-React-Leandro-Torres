import React from "react";
import "./GaleriaFotos.style.css";
import img1 from "../../assets/img/foto1.jpg";
import img2 from "../../assets/img/foto2.jpg";
import img3 from "../../assets/img/foto3.jpg";
import img4 from "../../assets/img/foto4.jpg";
import img5 from "../../assets/img/foto5.jpg";
import img6 from "../../assets/img/foto6.jpg";

const GaleriaFotos = () => {
  const imagenes = [img1, img2, img3, img4, img5, img6];

  return (
    <main className="galeria-main">
      <h1 className="titulo-fotos">Galería De Imagenes</h1>
      <div className="galeria-grid">
        {imagenes.map((img, i) => (
          <img key={i} src={img} alt={`Foto ${i + 1}`} />
        ))}
      </div>
    </main>
  );
};

export default GaleriaFotos;
