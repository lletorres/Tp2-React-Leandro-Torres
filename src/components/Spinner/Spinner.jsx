import React from "react";
import "./spinner.style.css"; // Estilos del spinner

const Spinner = ({ texto = "Cargando..." }) => {
  return (
    <div className="spinner-contenedor">
      <div className="spinner" />
      <p className="texto-cargando">{texto}</p>
    </div>
  );
};

export default Spinner;
