const URL_PAGOS = import.meta.env.VITE_API_PAGOS;

export const crearOrdenCarritoAPI = async (productosCarrito) => {
  try {
    const respuesta = await fetch(`${URL_PAGOS}/crear-orden-carrito`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // El backend espera un objeto { productosCarrito: [...] }
      body: JSON.stringify({ productosCarrito }),
    });

     if (!respuesta.ok) {
      console.error("Error del servidor:", respuesta.status);
      return respuesta; // Devuelve la respuesta para manejar el error en el componente
    }
    return respuesta;
  } catch (error) {
    console.error("Error en crearOrdenCarritoAPI:", error);
    return null;
  }
};

export const verificarEstadoPedido = async (pedidoId) => {
  try {
    const respuesta = await fetch(`${URL_PAGOS}/estado/${pedidoId}`);
    const data = await respuesta.json();
    
    return data.estado;
  } catch (error) {
    console.error('Error al verificar estado:', error);
    return 'Desconocido';
  }
};
