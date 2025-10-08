import { Offcanvas, Button, Image, ListGroup } from "react-bootstrap";
import { useEffect } from "react";
import React from "react";
import { useRef } from "react";
import { NavLink } from "react-router";
import { useCart } from "../../../helpers/CartContext";

const CartOffcanvas = ({ show, handleClose }) => {
  const endRef = useRef(null);
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
  } = useCart();

  useEffect(() => {
    if (show && endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [show]);

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
                key={`${item.id}-${item.size}-${index}`}
                className="d-flex align-items-center justify-content-between mb-2"
              >
                <div className="d-flex align-items-center">
                  <Image src={item.image} rounded width={60} height={60} />
                  <div className="ms-3">
                    <h6 className="mb-1">{item.name}</h6>
                    <small className="text-muted">Talle: {item.size}</small>
                    <div className="text-primary fw-bold">
                      ${(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => removeFromCart(item.id, item.size)}
                  >
                    <i className="bi bi-trash-fill text-danger"></i>
                  </Button>
                  <div className="d-flex align-items-center mt-2">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => decreaseQuantity(item.id, item.size)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => increaseQuantity(item.id, item.size)}
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

          {cartItems.lenth > 0 && (
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

        {cartItems.lenth > 0 && (
          <div className="border-top px-3 py-3 bg-white">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5>Total:</h5>
              <h5>
                ${getTotalPrice().toLocaleString()}
              </h5>
            </div>
            <div className="d-grid gap-2">
              <Button variant="primary">Iniciar pago💳</Button>
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
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartOffcanvas;
