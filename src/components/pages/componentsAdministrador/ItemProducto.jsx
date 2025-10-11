import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router";
import { borrarProducto } from "../../../helpers/queries";
import Swal from "sweetalert2";
import { obtenerProductos } from "../../../helpers/queries";
const ItemProducto = ({ ropa, setRopa, fila }) => {
  const eliminarProducto = async () => {
    Swal.fire({
      title: "¿Eliminar producto?",
      text: "No podras revertir esta accion",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#146c43",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar producto",
      cancelButtonText: "No, salir",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarProducto(ropa._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Producto eliminado",
            text: `El producto ${ropa.nombreProducto} fue eliminado correctamente`,
            icon: "success",
          });
          const respuestaProducto = await obtenerProductos();
          const productoActualizado = await respuestaProducto.json();
          setRopa(productoActualizado);
        }
      }
    });
  };
  return (
    <tr className="Montserrat">
      <td className="alineacionFila">{fila} </td>
      <td className="alineacionFila"> {ropa.nombreProducto} </td>
      <td className="alineacionFila">{ropa.talle}</td>
      <td className="alineacionFila">{ropa.color} </td>
      <td className="alineacionFila">${ropa.precio} </td>
      <td className="alineacionFila">{ropa.stock} </td>
      <td className="alineacionFila">
        {" "}
        {new Date(ropa.fechaUltimoControlStock).toLocaleDateString(
          "es-AR"
        )}{" "}
      </td>
      <td className="text-center">
        <img
          src={ropa.imagen}
          className="img-ropa"
          alt={ropa.nombreProducto}
        ></img>
      </td>
      <td className="alineacionFila">
        <div className="contenedorBotones">
          <Link
            to={`/administrador/editar/${ropa._id}`}
            className="btn btn-warning btnAdministrador"
          >
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button
            variant="danger"
            className="btnAdministrador"
            onClick={eliminarProducto}
          >
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemProducto;
