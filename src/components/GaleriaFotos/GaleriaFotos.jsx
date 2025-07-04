import React from "react";
import "./GaleriaFotos.style.css";
import img1 from "../../assets/img/foto1.jpg";
import img2 from "../../assets/img/foto2.jpg";
import img3 from "../../assets/img/foto3.jpg";
import img4 from "../../assets/img/foto4.jpg";
import img5 from "../../assets/img/foto5.jpg";
import img6 from "../../assets/img/foto6.jpg";

const GaleriaFotos = () => {
  return (
    <main>
      <h1 className="titulo-fotos">Galeria de fotos</h1>
      <div className="medida-carousel">
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img4} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img5} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img6} class="d-block w-100" alt="..." />
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </main>
  );
};
export default GaleriaFotos;
