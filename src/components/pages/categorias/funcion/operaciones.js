export const precioDescuento = (precio, porcentaje) => {
  return precio - (precio * porcentaje) / 100;
};

export const calcularCuotas = (precio, cuotas = 3) => {
  if (cuotas <= 0) return precio;
  return (precio / cuotas).toFixed(2);
};
