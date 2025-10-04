import errorImagen from "../../assets/sobreNosotros/error404.png";
import "../../index.css";
import { Link } from "react-router";
import React from "react";

const Error404 = () => {
  return (
    <section className="container-fluid mb-5 d-block align-content-center">
      <div className="d-flex justify-content-center mt-5 col-12">
        <img
          src={errorImagen}
          alt="Pagina no encontrada"
          className="img-fluid"
        />
      </div>
      <div className="d-flex justify-content-center col-12">
        <Link className="btn-error Montserrat">Volver al Inicio</Link>
      </div>
    </section>
  );
};

export default Error404;
