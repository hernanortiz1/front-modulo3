import { Offcanvas, Button, Image, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import React from "react";
import { useRef } from "react";
import { NavLink } from "react-router";
import { useCart } from "../../../helpers/CartContext";
import Swal from "sweetalert2";
import { crearOrdenCarritoAPI } from "../../../helpers/queriesPagos";

const CartOffcanvas = ({ show, handleClose }) => {
  const endRef = useRef(null);
  const [animationStage, setAnimationStage] = useState("idle");
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
    isLoading,
    clearCart,
  } = useCart();

  const handlePagar = async () => {
    // 1. Formatear los productos del carrito según lo esperado por el backend
    const productosFormateados = cartItems.map((item) => ({
      id: item._id, // Asegúrate de que el backend espera el _id como 'id'
      quantity: item.quantity,
    }));

    // 2. Enviar la petición al backend
    try {
      const respuesta = await crearOrdenCarritoAPI(productosFormateados);

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
          text:
            errorData.mensaje ||
            "No se pudo procesar el pago. Intente nuevamente en unos minutos.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error al procesar el pago:", error);
      Swal.fire({
        title: "Ocurrió un error",
        text: "No se pudo conectar con el servidor para procesar el pago. Por favor, verifique su conexión e intente de nuevo.",
        icon: "error",
      });
    }
  };

  const handleBuy = () => {
    Swal.fire({
      title: "¿Estas seguro de esta compra?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#23e05cff",
      cancelButtonColor: "#d33",
      confirmButtonText: "Comprar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const productosSinStock = cartItems.filter(
          (item) => item.quantity > item.stock
        );

        if (productosSinStock.length > 1) {
          Swal.fire({
            title: "Stock insuficiente",
            text: `Algunos productos no tienen stock suficiente`,
            icon: "error",
            confirmButtonColor: "#3085d6",
          });
          return;
        }

        try {
          setAnimationStage("entering");

          setTimeout(() => {
            setAnimationStage("exiting");
          }, 2000);

          setTimeout(() => {
            setAnimationStage("idle");
            clearCart();

            Swal.fire({
              title: "¡Preparando su compra!",
              text: `Serás redirigido para completar el pago`,
              icon: "success",
              timer: 4500,
              showConfirmButton: false,
            });

            handleClose();
            handlePagar()
          }, 4000);
        } catch (error) {
          console.error("Error en la compra:", error);
          Swal.fire({
            title: "Error en la compra",
            text: "No se pudo procesar tu compra. Intenta nuevamente.",
            icon: "error",
            confirmButtonColor: "#3085d6",
          });
        }
      }
    });
  };

  useEffect(() => {
    if (show && endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [show]);

  if (isLoading) {
    return (
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cargando carrito...</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </Offcanvas.Body>
      </Offcanvas>
    );
  }

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header
        className="colorFondoTitulo text-light btn-close-white"
        closeButton
      >
        <Offcanvas.Title>🛒Tu carrito({cartItems.length})</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className="d-flex flex-column p-0 colorMain">
        <div className="flex-grow-1 overflow-auto px-3 py-2">
          <ListGroup variant="flush">
            {cartItems.map((item, index) => (
              <ListGroup.Item
                key={`${item._id}-${item.size}-${index}`}
                className="d-flex align-items-center justify-content-between mb-2"
              >
                <div className="d-flex align-items-center">
                  <Image
                    src={item.imagen}
                    rounded
                    width={60}
                    height={60}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/60x60?text=Imagen+No+Disponible";
                    }}
                  />
                  <div className="ms-3">
                    <h6 className="mb-1">{item.nombre}</h6>
                    <small className="text-muted">
                      Talle: {item.talle || "Único"}
                    </small>
                    {item.quantity > item.stock && (
                      <small className="text-danger d-block">
                        Stock insuficiente
                      </small>
                    )}
                    <div className="text-primary fw-bold">
                      ${(item.precio * item.quantity).toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => removeFromCart(item._id, item.size)}
                  >
                    <i className="bi bi-trash-fill text-white"></i>
                  </Button>
                  <div className="d-flex align-items-center mt-2">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => decreaseQuantity(item._id, item.size)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => increaseQuantity(item._id, item.size)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>

          {cartItems.length === 0 && (
            <div className="text-center py-4">
              <p>Tu carrito está vacío</p>
              <Button variant="primary" onClick={handleClose}>
                Seguir comprando
              </Button>
            </div>
          )}

          {cartItems.length > 0 && (
            <>
              <p className="text-success fw-bold mt-4">
                ¡Llegaste! Tenés ENVÍO GRATIS 🎉
              </p>
              <div className="progress mb-3" style={{ height: "8px" }}>
                <div
                  className="progress-bar bg-success"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </>
          )}
          <div ref={endRef}></div>
        </div>

        {cartItems.length > 0 && (
          <div className="border-top px-3 py-3 bg-white">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5>Total:</h5>
              <h5>${getTotalPrice().toLocaleString()}</h5>
            </div>
            <div className="d-grid gap-2">
              <Button variant="primary" onClick={handleBuy}>
                Iniciar pago💳
              </Button>
              <NavLink
                className="botonIrAlCarrito btn border border-5 rounded-2 text-dark"
                to={"/carrito"}
                onClick={handleClose}
              >
                Ir al carrito
              </NavLink>
            </div>
          </div>
        )}
        {animationStage !== "idle" && (
          <div className="buy-overlay">
            <div className={`buy-overlay ${animationStage}`}>
              <div className="buy-box">📦</div>
            </div>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartOffcanvas;
