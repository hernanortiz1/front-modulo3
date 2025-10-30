// Ejemplo de página pendiente
const PagoPendiente = () => {
  return (
    <div className="text-center">
      <h2>⏳ Pago en Proceso</h2>
      <p>Tu pago está siendo procesado. Te notificaremos cuando se complete.</p>

      <div className="alert alert-info">
        <strong>Métodos que pueden generar pagos pendientes:</strong>
        <ul>
          <li>Pago en efectivo (Rapipago, PagoFácil)</li>
          <li>Transferencia bancaria</li>
          <li>Algunas tarjetas con verificación adicional</li>
        </ul>
      </div>

      <p>Puedes verificar el estado de tu pedido en cualquier momento.</p>
    </div>
  );
};

export default PagoPendiente;