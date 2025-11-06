// Ejemplo de página pendiente
import React from "react";

const PagoPendiente = () => {
  return (
    <div className="text-center my-5 container">
      <h2>⏳ Pago en Proceso</h2>
      <p>Tu pago está siendo procesado. Te notificaremos cuando se complete.</p>

      <div className="alert alert-info">
        <strong>Métodos que pueden generar pagos pendientes:</strong>
        <ul className="list-unstyled">
          <li><i className="bi bi-cash text-success"></i> Pago en efectivo (Rapipago, PagoFácil)</li>
          <li><i className="bi bi-bank"></i> Transferencia bancaria</li>
          <li><i className="bi bi-credit-card text-warning-emphasis"></i> Algunas tarjetas con verificación adicional</li>
        </ul>
      </div>

      <p>Puedes verificar el estado de tu pedido en cualquier momento.</p>
    </div>
  );
};

export default PagoPendiente;