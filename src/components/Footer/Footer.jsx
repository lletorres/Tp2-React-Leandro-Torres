import React from "react";
import "../../styles/Footer.style.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="redes-sociales-footer">
        <a href="https://www.instagram.com">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.twitter.com">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://www.facebook.com">
          <i className="fa-brands fa-facebook"></i>
        </a>
      </div>
      <p>© 2025 Paisark. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
