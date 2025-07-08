import React from "react";
import "./GaleriaVideos.style.css";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";

const GaleriaVideos = ({ videos }) => {
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    // carga de videos
    setTimeout(() => {
      setCargando(false);
    }, 2000);
  }, []);
  return (
    <main className="galeria-videos">
      <h1 className="titulo-videos">Galería de Videos</h1>

      {cargando ? (
        <Spinner texto="Cargando videos..." />
      ) : (
        <div className="grid-videos">
          {videos.map((url, index) => (
            <div className="video-card" key={index}>
              <iframe
                src={url}
                title={`video-${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default GaleriaVideos;
