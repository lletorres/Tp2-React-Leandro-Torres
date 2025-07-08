import { useState } from "react";
import "./Contacto.style.css";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipoContacto, setTipoContacto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [recibirInfo, setRecibirInfo] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación: si algún campo está vacío
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      telefono.trim() === "" ||
      tipoContacto.trim() === "" ||
      mensaje.trim() === ""
    ) {
      setError("Por favor, completá todos los campos");
      setEnviado(false);
      return;
    }

    // Si está todo bien
    setError("");
    setEnviado(true);
    console.log({
      nombre,
      email,
      telefono,
      tipoContacto,
      mensaje,
      recibirInfo,
    });
  };

  const handleReset = () => {
    setNombre("");
    setEmail("");
    setTelefono("");
    setTipoContacto("");
    setMensaje("");
    setRecibirInfo(false);
    setEnviado(false);
  };

  return (
    <main className="main-contacto">
      <form id="formulario-contacto" onSubmit={handleSubmit}>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Ingrese su nombre"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
            console.log("Nombre:", e.target.value);
          }}
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingrese su correo electrónico"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            console.log("Email:", e.target.value);
          }}
        />

        <input
          type="tel"
          id="telefono"
          name="telefono"
          placeholder="Ingrese su número de teléfono"
          value={telefono}
          onChange={(e) => {
            setTelefono(e.target.value);
            console.log("Telefono:", e.target.value);
          }}
        />

        <select
          name="tipo-contacto"
          id="tipo-contacto"
          value={tipoContacto}
          onChange={(e) => setTipoContacto(e.target.value)}
        >
          <option value="">Seleccione una opción</option>
          <option value="Consulta">Consulta</option>
          <option value="Presupuesto">Presupuesto</option>
          <option value="Otro">Otro</option>
        </select>

        <textarea
          name="mensaje"
          id="mensaje"
          placeholder="Escriba su mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />

        <div className="checkbox">
          <input
            type="checkbox"
            id="info"
            checked={recibirInfo}
            onChange={(e) => setRecibirInfo(e.target.checked)}
          />
          <label htmlFor="info">Deseo recibir información adicional</label>
        </div>

        <div className="botones-contacto">
          <button type="submit">Enviar</button>
          <button type="button" onClick={handleReset}>
            Borrar formulario
          </button>
        </div>

        <div className="mensaje-linea">
          <span className={`mensaje-error ${!error ? "invisible" : ""}`}>
            {error || "\u00A0"}
          </span>
          <span className={`mensaje-enviado ${!enviado ? "invisible" : ""}`}>
            {enviado ? "Mensaje enviado correctamente!" : "\u00A0"}
          </span>
        </div>
      </form>
    </main>
  );
};

export default Contacto;
