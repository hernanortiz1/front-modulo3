import { Offcanvas, Button, Image, ListGroup } from "react-bootstrap";
import { useEffect } from "react";
import React from "react";
import { useRef } from "react";

const CartOffcanvas = ({ show, handleClose, cartItems }) => {
  const endRef = useRef(null);

  useEffect(() => {
    if (show && endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [show]);

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header className="colorFondoTitulo text-light btn-close-white" closeButton>
        <Offcanvas.Title>🛒Tu carrito</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className="d-flex flex-column p-0 colorMain">
        <div className="flex-grow-1 overflow-auto px-3 py-2">
          <ListGroup variant="flush">
            {cartItems.map((item, index) => (
              <ListGroup.Item
                key={index}
                className="d-flex align-items-center justify-content-between mb-2"
              >
                <div className="d-flex align-items-center">
                  <Image src={item.image} rounded width={60} height={60} />
                  <div className="ms-3">
                    <h6>{item.name}</h6>
                    <small>Talle: {item.size}</small>
                  </div>
                </div>
                <div className="text-end">
                  <div>${item.price.toLocaleString()}</div>
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    className="bg-white"
                  >
                    <i class="bi bi-trash-fill text-danger"></i>
                  </Button>
                  <div className="d-flex align-items-center mt-2">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => item.decreaseQty()}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => item.increaseQty()}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <p className="text-success fw-bold mt-4">
            ¡Llegaste! Tenés ENVÍO GRATIS 🎉
          </p>
          <div className="progress mb-3" style={{ height: "8px" }}>
            <div
              className="progress-bar bg-success"
              style={{ width: "100%" }}
            ></div>
          </div>

          <div ref={endRef}></div>
        </div>

        <div className="border-top px-3 py-3 bg-white">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5>Total:</h5>
            <h5>
              $
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toLocaleString()}
            </h5>
          </div>
          <div className="d-grid gap-2">
            <Button variant="primary">Iniciar pago</Button>
            <Button variant="outline-dark" onClick={handleClose}>
              Ir al carrito
            </Button>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartOffcanvas;
