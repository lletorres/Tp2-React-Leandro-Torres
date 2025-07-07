import React from "react";
import "./GaleriaVideos.style.css";

const GaleriaVideos = ({ videos }) => {
  return (
    <main className="galeria-videos">
      <h1 className="titulo-videos">Galería de Videos</h1>
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
    </main>
  );
};

export default GaleriaVideos;
