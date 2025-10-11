import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { ShoppingCart, Heart, ShoppingBag } from "lucide-react";
import { useParams } from "react-router";
import { obtenerProductosPorId } from "../../helpers/queries";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useCart } from "../../helpers/CartContext";

const DetalleProducto = () => {
  const [producto, setProducto] = useState([]);
  const [favorito, setFavorito] = useState(false);
  const { id } = useParams();
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [cantidad, setCantidad] = useState(1);
  const [animationStage, setAnimationStage] = useState("idle");

  const handleBuy = () => {
    setAnimationStage("entering");

    setTimeout(() => {
      setAnimationStage("exiting");
    }, 2000);

    setTimeout(() => {
      setAnimationStage("idle");

      Swal.fire({
        title: "¡Gracias por su compra!",
        text: `${producto.nombreProducto} comprado exitosamente`,
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    }, 4000); // tiempo total de la animación
  };

  useEffect(() => {
    leerProducto();
  }, [id]);

  const leerProducto = async () => {
    try {
      const respuesta = await obtenerProductosPorId(id);
      if (respuesta.status === 200) {
        const producto = await respuesta.json();
        setProducto(producto);
      }
    } catch (error) {
      console.error("Error al cargar producto:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAgregarCarrito = () => {
    const productToAdd = {
      _id: producto._id,
      nombre: producto.nombreProducto || producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      categoria: producto.categoria,
      talle: producto.talle,
      color: producto.color,
      stock: producto.stock,
      marca: producto.marca || "Lannister",
    };

    addToCart(productToAdd);

    Swal.fire({
      title: "¡Agregado al carrito!",
      text: `${producto.nombreProducto} se agregó a tu carrito`,
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const aumentarCantidad = () => {
    if (producto && cantidad < producto.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  if (loading) {
    return (
      <Container className="my-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-2">Cargando producto...</p>
      </Container>
    );
  }

  if (!producto) {
    return (
      <Container className="my-5">
        <Alert variant="danger">Producto no encontrado</Alert>
      </Container>
    );
  }

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
                    <Button variant="outline-secondary" size="sm" onClick={disminuirCantidad}>
                      −
                    </Button>
                    <span className="px-3 fw-bold">{cantidad}</span>
                    <Button variant="outline-secondary" size="sm" onClick={aumentarCantidad}>
                      +
                    </Button>
                  </div>
                </div>

                {/* Botones */}
                <div className="d-flex gap-2">
                  <Button
                    variant="primary"
                    className="flex-grow-1"
                    onClick={handleAgregarCarrito}
                    disabled={producto.stock === 0}
                  >
                    <ShoppingCart size={18} className="me-2" />
                    {producto.stock === 0 ? "Sin stock" : "Agregar al carrito"}
                  </Button>
                  <Button
                    variant="dark"
                    className="flex-grow-1"
                    onClick={handleBuy}
                    disabled={producto.stock === 0}
                  >
                    <ShoppingBag size={18} className="me-2" />
                    Comprar Ahora
                  </Button>
                </div>
                {/* Mensaje de sin stock */}
                {producto.stock === 0 && (
                  <Alert variant="warning" className="mt-3">
                    Este producto está temporalmente sin stock
                  </Alert>
                )}
                {animationStage !== "idle" && (
                  <div className="buy-overlay">
                    <div className={`buy-overlay ${animationStage}`}>
                      <div className="buy-box">📦</div>
                    </div>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
