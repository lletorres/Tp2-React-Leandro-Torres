import React from "react";
import "./Contacto.style.css";

const Contacto = () => {
  return (
    <main className="main-contacto">
      <div className="contacto"></div>
      <form id="formulario-contacto">
        <label for="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Ingrese su nombre"
          required
        />

        <label for="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingrese su email"
          required
        />

        <label for="telefono">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          placeholder="Ingrese su teléfono"
        />
        <label for="tipo-contacto">Tipo de contacto:</label>
        <select id="tipo-contacto" name="tipo-contacto">
          <option value="" selected>
            Seleccione
          </option>
          <option value="particular">Particular</option>
          <option value="empresa">Empresa</option>
        </select>
        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" required></textarea>

        <label for="recibir-info-email">Recibir información por email:</label>
        <input
          type="checkbox"
          id="recibir-info-email"
          name="recibir-info-email"
        />
        <div className="buttons">
          <button type="submit">Enviar</button>
          <button type="reset">Borrar formulario</button>
        </div>
      </form>
    </main>
  );
};

export default Contacto;
