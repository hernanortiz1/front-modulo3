import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router";
import {
  precioDescuento,
  calcularCuotas,
  formatearPrecio,
} from "../categorias/funcion/operaciones.js";

const CardRopa = ({ ropa }) => {
  return (
    <>
      <Link className="text-decoration-none" to={`/detalle/${ropa._id}`}>
        <Card className="card-ropa h-100 d-flex flex-column shadow">
          <Card.Img
            src={ropa.imagen}
            style={{
              height: "250px",
              objectFit: "cover",
            }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="Montserrat text-truncate">
              {ropa.nombreProducto}
            </Card.Title>
            <Card.Text className="text-truncate">{ropa.descripcion}</Card.Text>
            <div className="d-flex mx-2">
              <Card.Text className="me-auto Montserrat fs-5">
                <strong>${formatearPrecio(ropa.precio)}</strong>
              </Card.Text>
              <Card.Text className="Montserrat">
                <strong>
                  Ver más<i className="bi bi-arrow-right"></i>
                </strong>
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default CardRopa;
