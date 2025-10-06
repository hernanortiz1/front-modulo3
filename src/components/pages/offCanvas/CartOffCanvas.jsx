import { Offcanvas, Button, Image, ListGroup } from "react-bootstrap";
import { useState } from "react";
import React from "react";

const CartOffcanvas = ({ show, handleClose, cartItems }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Tu carrito</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <ListGroup variant="flush">
          {cartItems.map((item, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex align-items-center justify-content-between"
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

        <div>

        <div className="mt-4 text-center">
          <p className="text-success fw-bold">
            ¡Llegaste! Tenés ENVÍO GRATIS 🎉
          </p>
          <div className="progress" style={{ height: "8px" }}>
            <div
              className="progress-bar bg-success"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>

        <div className="mt-4 d-flex justify-content-between align-items-center">
          <h5>Total:</h5>
          <h5>
            $
            {cartItems
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toLocaleString()}
          </h5>
        </div>

        <div className="mt-3 d-grid gap-2">
          <Button variant="primary">Iniciar pago</Button>
          <Button variant="outline-dark" onClick={handleClose}>
            Ir al carrito
          </Button>
        </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CartOffcanvas;
