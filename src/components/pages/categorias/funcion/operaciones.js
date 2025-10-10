export const precioDescuento = (precio, porcentaje) => {
  return precio - (precio * porcentaje) / 100;
};

export const calcularCuotas = (precio, cuotas) => {
  if (cuotas <= 0) return precio;
  return (precio / cuotas).toFixed(2);
};

export const formatearPrecio = (precio) => {
  return new Intl.NumberFormat("es-AR").format(precio);
};

export const precioSinImpuestos = (precio) => {
  return (precio / (1 + 21 / 100)).toFixed(2);
};