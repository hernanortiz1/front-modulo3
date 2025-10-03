import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router";

const ItemProducto = () => {
  return (
    <tr className="Montserrat">
      <td className="text-center">1</td>
      <td className="text-center">Remera OSAKA</td>
      <td className="text-center">Remeras y chombas</td>
      <td className="text-center">M</td>
      <td className="text-center">Gris</td>
      <td className="text-center">$25.500</td>
      <td className="text-center">32</td>
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
