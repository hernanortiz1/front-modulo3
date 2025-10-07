import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router";

const ItemProducto = ({ ropa, setRopa, fila }) => {
  return (
    <tr className="Montserrat">
      <td className="text-center">{fila} </td>
      <td className="text-center"> {ropa.nombreProducto} </td>
      <td className="text-center">{ropa.talle}</td>
      <td className="text-center">{ropa.color} </td>
      <td className="text-center">${ropa.precio} </td>
      <td className="text-center">{ropa.stock} </td>
      <td className="text-center">
        <img
          src={ropa.imagen}
          className="img-ropa"
          alt={ropa.nombreProducto}
        ></img>
      </td>
      <td className="text-center">
        <div className="d-flex gap-1 justify-content-center">
          <Link className="btn btn-warning me-lg-2">
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button variant="danger" className="me-lg-2">
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemProducto;
