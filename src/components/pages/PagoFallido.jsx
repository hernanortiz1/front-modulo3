import React from "react";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import { XCircle, ArrowLeft, CreditCard, RefreshCw } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import WhatsAppButton from "./categorias/funcion/WhatsAppButton";

const PagoFallido = () => {
  const navigate = useNavigate();

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm border-0">
            <Card.Body className="text-center p-5">
              {/* Icono de error */}
              <div className="mb-4">
                <XCircle size={80} className="text-danger" />
              </div>

              {/* Título principal */}
              <h1 className="h2 text-danger mb-3 fw-bold">
                Pago No Completado
              </h1>

              {/* Mensaje descriptivo */}
              <p className="text-muted mb-4 fs-5">
                Lo sentimos, no pudimos procesar tu pago. Tu pedido no ha sido
                confirmado.
              </p>

              {/* Alert con posibles causas */}
              <Alert variant="warning" className="text-start mb-4">
                <Alert.Heading className="h6">
                  ¿Qué pudo haber pasado?
                </Alert.Heading>
                <ul className="mb-0 ps-3">
                  <li>Fondos insuficientes en la cuenta</li>
                  <li>Tarjeta rechazada por el banco</li>
                  <li>Datos de la tarjeta incorrectos</li>
                  <li>Problemas temporales con el procesador de pagos</li>
                  <li>Superaste el límite de tu tarjeta</li>
                </ul>
              </Alert>

              {/* Información adicional */}
              <Card className="bg-light border-0 mb-4">
                <Card.Body>
                  <h6 className="fw-bold mb-3">💡 Recomendaciones:</h6>
                  <Row>
                    <Col md={6}>
                      <div className="d-flex align-items-center mb-2">
                        <CreditCard size={18} className="text-primary me-2" />
                        <small>Verifica los datos de tu tarjeta</small>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="d-flex align-items-center mb-2">
                        <RefreshCw size={18} className="text-primary me-2" />
                        <small>Intenta con otro método de pago</small>
                      </div>
                    </Col>
                  </Row>
                  <p className="text-muted small mb-0 mt-2">
                    No te preocupes, no se realizó ningún cargo a tu cuenta.
                  </p>
                </Card.Body>
              </Card>

              {/* Botones de acción */}
              <div className="d-grid gap-2 d-md-flex justify-content-center">
               

                <Button
                  variant="outline-secondary"
                  size="lg"
                  onClick={() => navigate("/")}
                >
                  <ArrowLeft size={20} className="me-2" />
                  Volver al Inicio
                </Button>
              </div>

              {/* Mensaje de soporte */}
              <div className="mt-4 pt-3 border-top">
                <p className="text-muted small mb-2">
                  ¿Necesitas ayuda? Contáctanos:
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <NavLink className="btn btn-outline-secondary" to={"/contacto"} size="sm">
                    📧 Soporte por Email
                  </NavLink >
                 
                </div>
              </div>
            </Card.Body>
          </Card>

          {/* Información adicional en móvil */}
          <div className="text-center mt-4">
            <p className="text-muted small">
              ¿El problema persiste? <br className="d-md-none" />
              Te recomendamos contactar a tu banco.
            </p>
          </div>
        </Col>
      </Row>
        <WhatsAppButton />
    </Container>
  );
};

export default PagoFallido;
