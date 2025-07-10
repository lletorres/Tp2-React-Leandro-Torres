import React from "react";
import "../../styles/spinner.style.css";

const Spinner = ({ texto }) => {
  return (
    <div className="spinner-contenedor">
      <div className="spinner" />
      <p className="texto-cargando">{texto}</p>
    </div>
  );
};

export default Spinner;
