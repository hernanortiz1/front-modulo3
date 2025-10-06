import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router";
import {
  precioDescuento,
  calcularCuotas,
  formatearPrecio,
} from "../categorias/funcion/operaciones";

const CardCategoriaProducto = ({ productos }) => {
  return (
    <>
      <Col xs={12} md={6} lg={3} className="mb-3 Montserrat">
        <Link to={`/detalle/${productos._id}`} className="text-decoration-none">
          <Card className="d-flex flex-column p-0 cardCategorias shadow">
            <div className="cardCategoriasImgWrapper">
              <img
                src={productos.imagen}
                alt={productos.nombreProducto}
                className="cardCategoriasImg"
              />
              <div className="cardOverlay">
                <strong>Talle:</strong> {productos.talle} |{" "}
                <strong>Color:</strong> {productos.color}
              </div>
            </div>

            <Card.Body className="cardCategoriasBody">
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <strong className="fs-5">
                    {productos.nombreProducto.substring(0, 20) + "..."}
                  </strong>
                </li>
                <li className="mb-1 fs-6">
                  <strong>$ {formatearPrecio(productos.precio)}</strong>
                </li>
                <li className="mb-1">
                  <small className="text-primary">
                    $ {formatearPrecio(precioDescuento(productos.precio, 10))}{" "}
                    con Transferencia
                  </small>
                </li>
                <li className="mb-1">
                  3 cuotas sin interés de{" "}
                  <strong>
                    $ {formatearPrecio(calcularCuotas(productos.precio, 3))}
                  </strong>
                </li>
                <li className="mb-1">
                  <small>
                    {productos.descripcion.substring(0, 50) + "..."}
                  </small>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </>
  );
};

export default CardCategoriaProducto;
