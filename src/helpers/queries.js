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
    const respuesta = await fetch(API_URL, {
      method: "POST",
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("userKey")).token,
      },
      body: formData,
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
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

export const obtenerProductosPorId = async (id) => {
  try {
    const respuesta = await fetch(API_URL + `/${id}`);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const borrarProducto = async (id) => {
  try {
    const respuesta = await fetch(API_URL + `/${id}`, {
      method: "DELETE",
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("userKey")).token,
      },
    });
    return respuesta;
  } catch {
    console.error(error);
    return null;
  }
};

export const editarProducto = async (productoEditado, id) => {
  try {
    const respuesta = await fetch(API_URL + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("userKey")).token,
      },
      body: JSON.stringify(productoEditado),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const login = async (datosUsuario) => {
  try {
    const respuesta = await fetch(API_USUARIOS + "/login", {
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

export const obtenerUsuarios = async () => {
  try {
    const respuesta = await fetch(API_USUARIOS);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const obtenerUsuarioID = async (id) => {
  try {
    const respuesta = await fetch(API_USUARIOS + `/${id}`);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const editarUsuario = async (usuarioEditado, id) => {
  try {
    const respuesta = await fetch(API_USUARIOS + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioEditado),
    });
    const data = await respuesta.json();
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const borrarUsuario = async (id) => {
  try {
    const respuesta = await fetch(API_USUARIOS + `/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const leerUsuariosPaginados = async (page, limit, search = "") => {
  try {
    const respuesta = await fetch(
      `${API_USUARIOS}/paginacion?page=${page}&limit=${limit}&search=${search}`
    );
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const leerProductosPaginados = async (page, limit, search = "") => {
  try {
    const respuesta = await fetch(
      `${API_URL}/paginacion?page=${page}&limit=${limit}&search=${search}`
    );
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};
