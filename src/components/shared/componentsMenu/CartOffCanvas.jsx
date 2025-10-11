import { Offcanvas, Button, Image, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import React from "react";
import { useRef } from "react";
import { NavLink } from "react-router";
import { useCart } from "../../../helpers/CartContext";
import Swal from "sweetalert2";

const CartOffcanvas = ({ show, handleClose }) => {
  const endRef = useRef(null);
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
        text: `Su comprado fue realizada exitosamente`,
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    }, 4000);
  };

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
    isLoading,
  } = useCart();

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
              <Button variant="primary" onClick={handleBuy}>Iniciar pago💳</Button>
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
