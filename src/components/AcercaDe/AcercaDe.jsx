import React from "react";
import "../../styles/AcercaDe.style.css";

const AcercaDe = () => {
  return (
    <main className="main-acerca">
      <section className="acerca-container">
        <div className="acerca-card">
          <div className="acerca-header">
            <h1 className="acerca-titulo">Acerca de</h1>
          </div>
          <div className="acerca-body">
            <p className="acerca-descripcion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </p>

            <h2 className="acerca-subtitulo">Misión</h2>
            <p className="acerca-descripcion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
            <h2 className="acerca-subtitulo">Visión</h2>
            <p className="acerca-descripcion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AcercaDe;
