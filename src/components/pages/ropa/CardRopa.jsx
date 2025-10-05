import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router";
const CardRopa = ({ ropa }) => {
  return (
    <>
      <Card className="card-ropa h-100 d-flex flex-column">
        <Link to={`/detalle/${ropa._id}`}>
          <Card.Img
            src={ropa.imagen}
            style={{
              height: "250px",
              objectFit: "cover",
            }}
          />
        </Link>
        <Card.Body className="d-flex flex-column">
          <Link to={`/detalle/${ropa._id}`} className="text-decoration-none text-dark Montserrat flex-grow-1">
            <Card.Title className="Montserrat">
              {ropa.nombreProducto}
            </Card.Title>
            <Card.Text className="text-truncate">{ropa.descripcion}</Card.Text>
          </Link>
          <Card.Text className="mt-auto Montserrat">${ropa.precio}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardRopa;
