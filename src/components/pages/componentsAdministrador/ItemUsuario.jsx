import React from 'react';
import { Button } from "react-bootstrap";

const ItemUsuario = () => {
    return (
        <tr className="Montserrat">
      <td className="text-center">1</td>
      <td>juanperez1</td>
      <td className="text-center">juanperez@mail.com</td>
      <td className="text-center">Usuario</td>
      <td className="text-center">
        <div className="d-flex gap-1 justify-content-center">
          <Button className="btn btn-warning me-lg-2">
            <i className="bi bi-person-fill-gear"></i>
          </Button>
          <Button variant="danger" className="me-lg-2">
            <i className="bi bi-person-fill-x"></i>
          </Button>
        </div>
      </td>
    </tr>
    );
};

export default ItemUsuario;