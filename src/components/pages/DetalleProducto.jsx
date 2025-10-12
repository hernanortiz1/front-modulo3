import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { ShoppingCart, Heart, ShoppingBag } from "lucide-react";
import { useParams } from "react-router";
import { obtenerProductosPorId } from "../../helpers/queries";
import { useEffect, useState } from "react";
import {
  precioDescuento,
  calcularCuotas,
  formatearPrecio,
  precioSinImpuestos,
} from "../pages/categorias/funcion/operaciones.js";

const DetalleProducto = () => {
  const [producto, setProducto] = useState({});
  const [favorito, setFavorito] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    leerProducto();
  }, []);

  const leerProducto = async () => {
    const respuesta = await obtenerProductosPorId(id);
    if (respuesta.status === 200) {
      const producto = await respuesta.json();
      setProducto(producto);
    }
  };
  return (
    <Container className="my-5">
      <Card className="producto-simple">
        <Card.Body className="p-4">
          <Row>
            {/* Columna de Imagen */}
            <Col md={5}>
              <div className="imagen-container">
                <img
                  src={producto.imagen}
                  alt={producto.nombreProducto}
                  className="img-fluid rounded"
                />
              </div>
            </Col>

            {/* Columna de Información */}
            <Col md={7}>
              <div className="mt-3 mt-md-0">
                {/* Categoría y Favorito */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge colorNavbarFooter">
                    {producto.categoria}
                  </span>
                  <Button
                    variant="link"
                    className="p-0 border-0"
                    onClick={() => setFavorito(!favorito)}
                  >
                    <Heart
                      size={24}
                      className="text-danger"
                      fill={favorito ? "red" : "none"}
                    />
                  </Button>
                </div>

                {/* Título */}
                <h2 className="Montserrat mb-3">{producto.nombreProducto}</h2>

                {/* Descripción */}
                <div className="mb-4 d-flex flex-column">
                  <p className="text-muted mb-0">{producto.descripcion}</p>
                </div>
                <div className="d-flex justify-content-between my-4">
                  <p className="badge colorNavbarFooter w-25">
                    Stock: {producto.stock}
                  </p>
                  <p className="badge colorNavbarFooter w-25">
                    Color: {producto.color}
                  </p>
                  <p className="badge colorNavbarFooter w-25">
                    Talle: {producto.talle}
                  </p>
                </div>
                {/* Precio */}
                <h3 className="Montserrat mb-3">
                  ${formatearPrecio(producto.precio)}
                </h3>

                <div>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1">
                      <small className="text-primary">
                        ${" "}
                        {formatearPrecio(precioDescuento(producto.precio, 10))}{" "}
                        con Transferencia
                      </small>
                    </li>
                    <li className="mb-1">
                      3 cuotas sin interés de{" "}
                      <strong>
                        $ {formatearPrecio(calcularCuotas(producto.precio, 3))}
                      </strong>
                    </li>
                    <li className="mb-1">
                      <small className="textoPequenio d-block">
                        Precio sin impuestos nacionales ${" "}
                        {formatearPrecio(precioSinImpuestos(producto.precio))}
                      </small>
                    </li>
                  </ul>
                </div>

                <div class="d-flex justify-content-center pe-3 ps-5">
                  <img
                    src="../"
                    alt=""
                    class="border border-3 border-dark-subtle w-25 img-fluid me-1 rounded-3 d-block"
                  />
                  <img
                    src="../img/productonotebook/2.png"
                    alt=""
                    class="border border-3 border-dark-subtle w-25 img-fluid me-1 rounded-3 d-block"
                  />
                  <img
                    src="../img/productonotebook/3.png"
                    alt=""
                    class="border border-3 border-dark-subtle w-25 img-fluid me-1 rounded-3 d-block"
                  />
                  <img
                    src="../img/productonotebook/4.png"
                    alt=""
                    class="border border-3 border-dark-subtle w-25 img-fluid me-1 rounded-3 d-block"
                  />
                </div>

                <hr />

                {/* Cantidad */}
                <div className="d-flex align-items-center gap-3 mb-4">
                  <label className="mb-0">Cantidad:</label>
                  <div className="d-flex align-items-center gap-2">
                    <Button variant="outline-secondary" size="sm">
                      −
                    </Button>
                    <span className="px-3 fw-bold">1</span>
                    <Button variant="outline-secondary" size="sm">
                      +
                    </Button>
                  </div>
                </div>

                {/* Botones */}
                <div className="d-flex gap-2">
                  <Button variant="primary" className="flex-grow-1">
                    <ShoppingCart size={18} className="me-2" />
                    Agregar al Carrito
                  </Button>
                  <Button variant="dark" className="flex-grow-1">
                    <ShoppingBag size={18} className="me-2" />
                    Comprar Ahora
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
