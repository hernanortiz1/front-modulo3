import React, { useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router";
import { verificarEstadoPedido } from "../../../src/helpers/queriesPagos.js";

const PagoExitoso = () => {
  useEffect(() => {
    const pedidoId = localStorage.getItem("ultimoPedidoId");

    if (pedidoId) {
      const intervalo = setInterval(async () => {
        const estado = await verificarEstadoPedido(pedidoId);

        if (estado === "Aprobado") {
          clearInterval(intervalo);
          Swal.fire("¡Pago confirmado!", "Tu pedido está aprobado", "success");
        }

        // Si pasan 10 minutos, parar
      }, 5000); // Verificar cada 5 segundos

      return () => clearInterval(intervalo);
    }
  }, []);
  return (
    <Container className="mainSection d-flex justify-content-center align-items-center my-4">
      <Card className="text-center shadow p-4">
        <Card.Body>
          <i className="bi bi-check-circle-fill text-success display-1 mb-3"></i>
          <Card.Title as="h1">¡Pago Exitoso!</Card.Title>
          <Card.Text>
            Gracias por tu compra. Hemos recibido tu pago correctamente.
            <br />
            En breve recibirás un correo electrónico con los detalles de tu
            pedido.
          </Card.Text>
          <Button as={Link} to="/" variant="primary">
            Volver al Inicio
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PagoExitoso;
