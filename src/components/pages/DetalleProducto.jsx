import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { ShoppingCart, Heart, ShoppingBag } from "lucide-react";
import { useParams } from "react-router";
import { obtenerProductosPorId } from "../../helpers/queries";
import { useEffect, useState } from "react";
const DetalleProducto = () => {
  const [producto, setProducto] = useState([]);
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
                    Categoria: {producto.categoria}
                  </span>
                  <span className="badge colorNavbarFooter">
                    Stock: {producto.stock}
                  </span>
                  <span className="badge colorNavbarFooter">
                    Color: {producto.color}
                  </span>
                  <span className="badge colorNavbarFooter">
                    Talle: {producto.talle}
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

                {/* Precio */}
                <h3 className="Montserrat mb-3">${producto.precio}</h3>

                {/* Descripción */}
                <div className="mb-4">
                  <span className="badge colorNavbarFooter mb-2">
                    Descripción:
                  </span>
                  <p className="text-muted mb-0">{producto.descripcion}</p>
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
