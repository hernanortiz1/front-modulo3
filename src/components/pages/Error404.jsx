import errorImagen from "../../assets/sobreNosotros/error404.png";
import "../../index.css";
import { Link } from "react-router";
import React from "react";

const Error404 = () => {
  return (
    <section className="container-fluid d-flex flex-column justify-content-center align-items-center my-4">
  <img
    src={errorImagen}
    alt="Página no encontrada"
    className="img-fluid"
  />
  <Link className="btn-error Montserrat" to={"/"}>
    Volver al Inicio
  </Link>
</section>
  );
};

export default Error404;
