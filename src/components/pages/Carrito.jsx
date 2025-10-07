import React from "react";
import { Button, Image } from "react-bootstrap";
import { NavLink } from "react-router";

const Carrito = () => {
  return (
    <>
      <section>
        <div className="container my-1">
          <div className="d-flex justify-content-between my-4">
            <NavLink
              to={"/"}
              className="text-decoration-none text-dark d-flex align-items-center"
            >
              <i className="bi bi-chevron-left fs-5"></i>Volver
            </NavLink>
            <h1 className="text-center Bodoni">Lannister</h1>
            <p className="d-flex align-items-center PagoSeguro mb-0">
              <i className="bi bi-lock fs-6"></i>Pago seguro
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carrito;
