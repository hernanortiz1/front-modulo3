import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router";
import {
  precioDescuento,
  calcularCuotas,
} from "../categorias/funcion/operaciones";

const CardCategoriaProducto = ({ productos }) => {
  return (
    <>
      <Col xs={12} md={6} lg={3} className="mb-3 Montserrat">
        <Link to={`/detalle/${productos._id}`} className="text-decoration-none">
          <Card className="h-100 d-flex flex-column p-0 cardCategorias shadow">
            <div className="cardCategoriasImgWrapper">
              <Card.Img
                variant="top"
                src={productos.imagen}
                alt={productos.nombreProducto}
                className="cardCategoriasImg"
              />
              <div>
                
              </div>
            </div>

            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
              <div className="flex-grow-1 p-0">
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <strong className="fs-4">{productos.nombreProducto}</strong>
                  </li>
                  <li className="mb-1 fs-5">
                    <strong>$ {productos.precio}</strong>
                  </li>
                  <li className="mb-1">
                    <small className="text-primary">
                      ${precioDescuento(productos.precio, 10)} con Transferencia
                    </small>
                  </li>
                  <li className="mb-1">
                     3 cuotas sin interés de{" "}
                    <strong>${calcularCuotas(productos.precio, 3)}</strong>
                  </li>

                  <li className="mb-1">
                    <strong>Talle:</strong> {productos.talle}
                    {" | "}
                    <strong>Color:</strong> {productos.color}
                  </li>
                  <li className="mb-1">
                    <small>
                      {productos.descripcion.substring(0, 50) + "..."}
                    </small>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </>
  );
};

export default CardCategoriaProducto;
