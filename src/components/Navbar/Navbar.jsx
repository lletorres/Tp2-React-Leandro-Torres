// src/components/Navbar/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.style.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Paisark FPV</Link>
      </div>
      <ul className="navList">
        <li>
          <Link className="navList" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navList" to="/acerca-de">
            Acerca de
          </Link>
        </li>
        <li>
          <Link className="navList" to="/contacto">
            Contacto
          </Link>
        </li>
      </ul>
      <div className="redes-sociales">
        <a href="https://instagram.com" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://twitter.com" aria-label="Twitter">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://facebook.com" aria-label="Facebook">
          <i className="fa-brands fa-facebook"></i>
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
