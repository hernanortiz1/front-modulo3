import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router";

const CardCategoriaProducto = ({ productos }) => {
  return (
    <>
      <Col xs={12} md={4} lg={3} className="mb-3">
        <Card className="h-100 d-flex flex-column p-0 card-hover ">
          <Card.Img
            variant="top"
            src={productos.imagen}
            alt={productos.nombreProducto}
            className="img-fluid w-100"
          />
          <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
            <div className="flex-grow-1 p-0">
              <ul className="list-unstyled">
                <li className="mb-1">
                  <strong>Precio:</strong> ${productos.precio}
                </li>
                <li className="mb-1">
                  <strong>Categoria:</strong> {productos.categoria}
                </li>
                <li className="mb-1">
                  <strong>Plataforma:</strong> {productos.talle}
                </li>
                <li className="mb-1">
                  <strong>Plataforma:</strong> {productos.color}
                </li>
                <li className="mb-1">
                  <strong>
                    Descripción: <br></br>
                  </strong>{" "}
                  <small>
                    {productos.descripcion.substring(0, 50) + "..."}
                  </small>
                </li>
              </ul>
            </div>
          </Card.Body>
          <Card.Footer className="text-end">
            <Link className="btn btn-danger" to={"/detalle/" + productos.id}>
              Ver más
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default CardCategoriaProducto;
