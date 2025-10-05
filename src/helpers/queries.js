//queries
const API_URL = import.meta.env.VITE_API_PRODUCTOS;
const API_USUARIOS = import.meta.env.VITE_API_USUARIOS;

export const crearProducto = async (productoNuevo) => {
  try {
    const formData = new FormData();
    formData.append("nombreProducto", productoNuevo.nombreProducto);
    formData.append("descripcion", productoNuevo.descripcion);
    formData.append("precio", productoNuevo.precio);
    formData.append("imagen", productoNuevo.imagen);
    formData.append("categoria", productoNuevo.categoria);
    formData.append("stock", productoNuevo.stock);
    formData.append("talle", productoNuevo.talle);
    formData.append("color", productoNuevo.color);
    formData.append(
      "fechaUltimoControlStock",
      productoNuevo.fechaUltimoControlStock
    );
    const respuesta = await fetch(API_URL, {});
  } catch (error) {}
};

export const obtenerProductos = async () => {
  try {
    const respuesta = await fetch(API_URL);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const login = async (datosUsuario) => {
  try {
    const respuesta = await fetch(API_USUARIOS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosUsuario),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const registro = async (nuevoUsuario) => {
  try {
    const respuesta = await fetch(API_USUARIOS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoUsuario),
    });

    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};