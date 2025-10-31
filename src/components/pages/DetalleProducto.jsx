import React from "react";
import { Container, Card, Row, Col, Button, Alert } from "react-bootstrap";
import { ShoppingCart, ShoppingBag } from "lucide-react";
import { useParams } from "react-router";
import { obtenerProductosPorId } from "../../helpers/queries";
import { useEffect, useState } from "react";
import {
  formatearPrecio,
  precioDescuento,
  precioSinImpuestos,
  calcularCuotas,
} from "./categorias/funcion/operaciones";
import mastercard from "../../assets/tarjetas/Mastercard-logo.svg.png";
import naranjax from "../../assets/tarjetas/NaranjaX-logo.svg.png";
import macro from "../../assets/tarjetas/Logo_Banco_Macro.svg.png";
import santander from "../../assets/tarjetas/Santander_Logo.png";
import visa from "../../assets/tarjetas/Visa_Logo.png";
import { useCart } from "../../helpers/CartContext";
import Swal from "sweetalert2";
import WhatsAppButton from "./categorias/funcion/WhatsAppButton";
import { crearOrdenProductoIndividual } from "../../helpers/queriesPagos";

const DetalleProducto = ({ usuarioAdmin }) => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();
  const [loading, setLoading] = useState(true);
  const [cantidad, setCantidad] = useState(1);
  const [animationStage, setAnimationStage] = useState("idle");

  const handlePagarIndividual = async () => {
    // Crear objeto con los datos del producto individual
    const productoIndividual = {
      productoId: producto._id,
      cantidad: cantidad,
    };

    try {
      const respuesta = await crearOrdenProductoIndividual(productoIndividual);

      if (respuesta && respuesta.status === 201) {
        const data = await respuesta.json();
        if (respuesta.ok) {
          // Guardar el pedidoId en localStorage para verificación posterior
          localStorage.setItem("ultimoPedidoId", data.pedidoId);

          // Redirigir a Mercado Pago
          window.location.href = data.init_point;
        }
      } else {
        const errorData = await respuesta.json();
        Swal.fire({
          title: "Ocurrió un error",
          text: errorData.mensaje || "No se pudo procesar el pago.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error al procesar el pago individual:", error);
      Swal.fire({
        title: "Ocurrió un error",
        text: "No se pudo conectar con el servidor para procesar el pago.",
        icon: "error",
      });
    }
  };

  const handleBuy = async () => {
    if (usuarioAdmin.token) {
      Swal.fire({
        title: "¿Estas seguro de comprar este producto?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#23e05cff",
        cancelButtonColor: "#d33",
        confirmButtonText: "Comprar",
        cancelButtonText: "Cancelar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            if (cantidad > producto.stock) {
              Swal.fire({
                title: "Stock insuficiente",
                text: `Solo hay ${producto.stock} unidades disponibles`,
                icon: "error",
                confirmButtonColor: "#3085d6",
              });
              return;
            }

            setAnimationStage("entering");

            setTimeout(() => {
              setAnimationStage("exiting");
            }, 2000);

            setTimeout(() => {
              setAnimationStage("idle");

              Swal.fire({
                title: "¡Preparando su compra!",
                text: `Serás redirigido para completar el pago`,
                icon: "success",
                timer: 4500,
                showConfirmButton: false,
              });
              handlePagarIndividual();
            }, 4000);
          } catch (error) {
            console.error("Error en la compra:", error);
            Swal.fire({
              title: "Error en la compra",
              text: "No se pudo procesar tu compra. Intenta nuevamente.",
              icon: "error",
              timer: 4500,
              confirmButtonColor: "#3085d6",
            });
          }
        }
      });
    } else {
      Swal.fire({
        title: "¡Debes crear cuenta y/o Iniciar sesion!",
        text: `Si quieres realizar compras y/o agregar carrito`,
        icon: "warning",
        timer: 4500,
        showConfirmButton: false,
      });
    }
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
    if (usuarioAdmin.token) {
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

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        text: `${producto.nombreProducto} se agregó a tu carrito`,
      });
    } else {
      Swal.fire({
        title: "¡Debes crear cuenta y/o Iniciar sesion!",
        text: `Si quieres realizar compras y/o agregar carrito`,
        icon: "warning",
        timer: 4500,
        showConfirmButton: false,
      });
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
            <Col md={6} lg={5}>
              <div className="d-flex justify-content-center">
                <img
                  src={producto.imagen}
                  alt={producto.nombreProducto}
                  className="imagen-container rounded"
                />
              </div>
            </Col>

            {/* Columna de Información */}
            <Col md={6} lg={7}>
              <div className="mt-3 mt-md-0 d-flex flex-column align-content-around">
                {/* Categoría */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge colorNavbarFooter">
                    {producto.categoria}
                  </span>
                </div>

                {/* Título */}
                <h2 className="Montserrat mb-3">{producto.nombreProducto}</h2>

                {/* Descripción */}
                <div className="mb-4 d-flex flex-column">
                  <p className="text-muted mb-0">{producto.descripcion}</p>
                </div>
                <div className="d-flex justify-content-between justify-content-md-start gap-md-4 mb-3">
                  <p className="badge colorNavbarFooter w-auto">
                    Stock:{" "}
                    {producto.stock === 0 ? "Sin stock" : `${producto.stock}`}
                  </p>
                  <p className="badge colorNavbarFooter w-auto">
                    Color: {producto.color}
                  </p>
                  <p className="badge colorNavbarFooter w-auto">
                    Talle: {producto.talle}
                  </p>
                </div>
                {/* Precio */}
                <h3 className="Montserrat mb-3 fs-2">
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
                      <small className="textoPequenio d-block">
                        Precio sin impuestos nacionales ${" "}
                        {formatearPrecio(precioSinImpuestos(producto.precio))}
                      </small>
                    </li>
                    <li className="mb-1 mt-3 fs-6">
                      3 cuotas sin interés de{" "}
                      <strong>
                        $ {formatearPrecio(calcularCuotas(producto.precio, 3))}
                      </strong>
                    </li>
                  </ul>
                </div>
                <div className="d-flex justify-content-start pe-3 gap-3 my-4">
                  <img
                    src={mastercard}
                    alt="mastercard"
                    className="logoTarjetas logoMastercard"
                  />
                  <img
                    src={visa}
                    alt="visa"
                    className="logoTarjetas logoVisa"
                  />
                </div>
                <p>
                  6 cuotas sin interés de ${" "}
                  <strong>
                    {formatearPrecio(calcularCuotas(producto.precio, 6))}
                  </strong>
                </p>
                <div className="d-flex justify-content-start align-items-center pe-3 gap-33">
                  <img
                    src={macro}
                    alt="macro"
                    className="logoTarjetas logoMacro"
                  />
                  <img
                    src={santander}
                    alt="santander"
                    className="logoTarjetas logoSantander"
                  />
                  <img
                    src={naranjax}
                    alt="naranjax"
                    className="logoTarjetas logoNaranja"
                  />
                </div>

                <hr />

                {/* Botones */}
                <div className="d-flex gap-2 pt-4">
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
      <WhatsAppButton />
    </Container>
  );
};

export default DetalleProducto;
