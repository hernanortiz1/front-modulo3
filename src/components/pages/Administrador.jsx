import { Accordion, Table, Button, Form, Modal } from "react-bootstrap";
import ItemUsuario from "./componentsAdministrador/ItemUsuario";
import ItemProducto from "./componentsAdministrador/ItemProducto";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  crearUsuarioAdministrador,
  leerProductosPaginados,
  leerUsuariosPaginados,
} from "../../helpers/queries.js";
import Swal from "sweetalert2";

const Administrador = ({ titulo }) => {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("userKey")) || {};
  const rol = usuarioLogueado.rol;

  const [show, setShow] = useState(false);
  const [ropa, setRopa] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [pageUsuario, setPageUsuario] = useState(1);
  const [limitUsuario] = useState(10);
  const [totalPagesUsuario, setTotalPagesUsuario] = useState(1);

  const [pageProducto, setPageProducto] = useState(1);
  const [limitProducto] = useState(10);
  const [totalPagesProducto, setTotalPagesProducto] = useState(1);

  const [loadingUsuarios, setLoadingUsuarios] = useState(false);
  const [loadingProductos, setLoadingProductos] = useState(false);

  const headerProductosRef = useRef(null);
  const headerUsuariosRef = useRef(null);

  const [terminoBusquedaUsuario, setTerminoBusquedaUsuario] = useState("");
  const [terminoBusquedaProducto, setTerminoBusquedaProducto] = useState("");

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    leerProductos();
  }, [pageProducto, terminoBusquedaProducto]);

  useEffect(() => {
    leerUsuarios();
  }, [pageUsuario, terminoBusquedaUsuario]);

  const leerProductos = async () => {
    setLoadingProductos(true);
    const respuesta = await leerProductosPaginados(
      pageProducto,
      limitProducto,
      terminoBusquedaProducto
    );
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setRopa(datos.productos);
      setTotalPagesProducto(datos.totalPages);

      if (pageProducto > 1) {
        setTimeout(() => {
          headerProductosRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    } else {
      console.info("Error al cargar los productos");
    }
    setLoadingProductos(false);
  };

  const leerUsuarios = async () => {
    setLoadingUsuarios(true);

    try {
      const respuesta = await leerUsuariosPaginados(
        pageUsuario,
        limitUsuario,
        terminoBusquedaUsuario
      );

      if (respuesta.status === 200) {
        const datos = await respuesta.json();

        //si es Gerente
        let usuariosFiltrados = datos.usuarios;
        if (rol === "Gerente") {
          usuariosFiltrados = usuariosFiltrados.filter(
            (usuario) => usuario.rol === "Vendedor" || usuario.rol === "Usuario"
          );
        }

        setUsuarios(usuariosFiltrados);
        setTotalPagesUsuario(datos.totalPages);

        if (pageUsuario > 1) {
          setTimeout(() => {
            headerUsuariosRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      } else {
        console.info("Error al cargar los usuarios");
      }
    } catch (error) {
      console.error("Error al leer usuarios:", error);
    } finally {
      setLoadingUsuarios(false);
    }
  };

  const crearCuenta = async (usuario) => {
    const respuesta = await crearUsuarioAdministrador(usuario);
    if (respuesta.status === 201) {
      Swal.fire({
        title: "Usuario creado!",
        text: `El usuario ${usuario.nombreUsuario} fue creador exitosamente`,
        icon: "success",
      });
      reset();
      leerUsuarios();
      handleClose();
    } else {
      Swal.fire({
        title: "ocurrió un problema",
        text: `No pudimos crear el usuario ${usuario.nombreUsuario}`,
        icon: "error",
      });
    }
  };

  const handleChangeProducto = (e) => {
    setTerminoBusquedaProducto(e.target.value);
    setPageProducto(1);
  };

  const handleChangeUsuario = (e) => {
    setTerminoBusquedaUsuario(e.target.value);
    setPageUsuario(1);
  };

  const limpiarBusquedaProducto = () => {
    setTerminoBusquedaProducto("");
    setPageProducto(1);
  };

  const limpiarBusquedaUsuario = () => {
    setTerminoBusquedaUsuario("");
    setPageUsuario(1);
  };

  return (
    <>
      <section className="py-3 colorNavbarFooter text-light">
        <h3 className=" Montserrat text-center text-uppercase">{titulo}</h3>
      </section>
      <section className="container">
        <article className="my-4">
          {/* lista productos */}
          {rol !== "Usuario" && (
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header
                  className="Montserrat"
                  ref={headerProductosRef}
                >
                  <i className="bi bi-database me-2"></i>
                  Productos
                </Accordion.Header>
                <Accordion.Body className="row">
                  <div className="d-flex col-12 text-end text-md-center order-first order-md-0 my-3">
                    <Form className="w-50 d-flex justify-content-center me-3 position-relative">
                      <Form.Control
                        type="text"
                        placeholder="Buscar por nombre de producto"
                        onChange={handleChangeProducto}
                        value={terminoBusquedaProducto}
                        style={{
                          paddingRight: terminoBusquedaProducto
                            ? "40px"
                            : "12px",
                        }}
                      />
                      {terminoBusquedaProducto && (
                        <Button
                          variant="link"
                          className="position-absolute end-0 top-50 translate-middle-y me-2 p-0"
                          onClick={limpiarBusquedaProducto}
                          style={{
                            zIndex: 10,
                            color: "#dc3545",
                            fontSize: "18px",
                            lineHeight: 1,
                          }}
                          title="Limpiar búsqueda"
                        >
                          <i className="bi bi-x-circle-fill"></i>
                        </Button>
                      )}
                    </Form>
                    <Button
                      className="btn btn-success"
                      href="/administrador/crear"
                    >
                      <i className="bi bi-file-earmark-plus"></i>
                    </Button>
                  </div>
                  <div className="col-12">
                    <Table
                      responsive
                      striped
                      bordered
                      hover
                      className="Montserrat"
                    >
                      <thead>
                        <tr className="text-center">
                          <th>#</th>
                          <th>Nombre</th>
                          <th>Talle</th>
                          <th>Color</th>
                          <th>Precio</th>
                          <th>Stock</th>
                          <th>Último control</th>
                          <th>Imagen</th>
                          <th>Opciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loadingProductos ? (
                          <tr>
                            <td colSpan="8" className="text-center py-4">
                              <div
                                className="spinner-border text-success"
                                role="status"
                              >
                                <span className="visually-hidden">
                                  Cargando...
                                </span>
                              </div>
                            </td>
                          </tr>
                        ) : ropa.length === 0 ? (
                          <tr>
                            <td colSpan="8" className="text-center py-4">
                              <i className="bi bi-x-lg"></i> No hay resultados
                              disponibles para “{terminoBusquedaProducto}”
                            </td>
                          </tr>
                        ) : (
                          ropa.map((producto, indice) => (
                            <ItemProducto
                              key={producto._id}
                              ropa={producto}
                              setRopa={setRopa}
                              fila={
                                (pageProducto - 1) * limitProducto + indice + 1
                              }
                              limitProducto={limitProducto}
                              pageProducto={pageProducto}
                              onProductoActualizado={leerProductos}
                            />
                          ))
                        )}
                      </tbody>
                    </Table>
                  </div>
                  <div className="d-flex justify-content-center align-items-center my-3">
                    <Button
                      onClick={() =>
                        setPageProducto((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={pageProducto === 1}
                      className="btn-table"
                    >
                      Anterior
                    </Button>
                    <span className="mx-3">
                      <span className="d-none d-md-inline">
                        Página {pageProducto} de {totalPagesProducto}
                      </span>
                      <span className="d-inline d-md-none">
                        {pageProducto} de {totalPagesProducto}
                      </span>
                    </span>
                    <Button
                      onClick={() =>
                        setPageProducto((prev) =>
                          Math.min(prev + 1, totalPagesProducto)
                        )
                      }
                      disabled={pageProducto === totalPagesProducto}
                      className="btn-table"
                    >
                      Siguiente
                    </Button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              {/* lista usuarios */}
            </Accordion>
          )}

          {/* lista usuarios */}
          {(rol === "Administrador" || rol === "Gerente") && (
            <Accordion defaultActiveKey={["0"]} alwaysOpen className="mt-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header
                  className="Montserrat"
                  ref={headerUsuariosRef}
                >
                  <i className="bi bi-person-fill me-2"></i>Usuarios
                </Accordion.Header>
                <Accordion.Body className="row">
                  <div className="d-flex col-12 text-end text-md-center order-first order-md-0 my-3">
                    <Form className="w-50 d-flex justify-content-center me-3 position-relative">
                      <Form.Control
                        type="text"
                        placeholder="Buscar por nombre de usuario"
                        onChange={handleChangeUsuario}
                        value={terminoBusquedaUsuario}
                        style={{
                          paddingRight: terminoBusquedaUsuario
                            ? "40px"
                            : "12px",
                        }}
                      />
                      {terminoBusquedaUsuario && (
                        <Button
                          variant="link"
                          className="position-absolute end-0 top-50 translate-middle-y me-2 p-0"
                          onClick={limpiarBusquedaUsuario}
                          style={{
                            zIndex: 10,
                            color: "#dc3545",
                            fontSize: "18px",
                            lineHeight: 1,
                          }}
                          title="Limpiar búsqueda"
                        >
                          <i className="bi bi-x-circle-fill"></i>
                        </Button>
                      )}
                    </Form>
                    {/* btn Crear */}
                    {(rol === "Administrador" || rol === "Gerente") && (
                      <Button className="btn btn-success" onClick={handleShow}>
                        <i className="bi bi-person-plus-fill"></i>
                      </Button>
                    )}
                  </div>
                  <div className="col-12">
                    <Table
                      responsive
                      striped
                      bordered
                      hover
                      className="Montserrat"
                    >
                      <thead>
                        <tr className="text-center">
                          <th>#</th>
                          <th>Nombre de usuario</th>
                          <th>Correo eléctronico</th>
                          <th>Rol</th>
                          <th>Opciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loadingUsuarios ? (
                          <tr>
                            <td colSpan="5" className="text-center py-4">
                              <div
                                className="spinner-border text-success"
                                role="status"
                              >
                                <span className="visually-hidden">
                                  Cargando...
                                </span>
                              </div>
                            </td>
                          </tr>
                        ) : usuarios.length === 0 ? (
                          <tr>
                            <td colSpan="5" className="text-center py-4">
                              <i className="bi bi-x-lg"></i> No hay resultados
                              disponibles para “{terminoBusquedaUsuario}”
                            </td>
                          </tr>
                        ) : (
                          usuarios.map((usuario, indice) => (
                            <ItemUsuario
                              key={usuario._id}
                              usuario={usuario}
                              fila={
                                (pageUsuario - 1) * limitUsuario + indice + 1
                              }
                              setUsuarios={setUsuarios}
                              limitUsuario={limitUsuario}
                              pageUsuario={pageUsuario}
                              leerUsuarios={leerUsuarios}
                            />
                          ))
                        )}
                      </tbody>
                    </Table>
                  </div>
                  <div className="d-flex justify-content-center align-items-center my-3">
                    <Button
                      onClick={() =>
                        setPageUsuario((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={pageUsuario === 1}
                      className="btn-table"
                    >
                      Anterior
                    </Button>
                    <span className="mx-3">
                      <span className=" d-none d-md-inline">
                        Página {pageUsuario} de {totalPagesUsuario}
                      </span>
                      <span className="d-inline d-md-none">
                        {pageUsuario} de {totalPagesUsuario}
                      </span>
                    </span>
                    <Button
                      onClick={() =>
                        setPageUsuario((prev) =>
                          Math.min(prev + 1, totalPagesUsuario)
                        )
                      }
                      disabled={pageUsuario === totalPagesUsuario}
                      className="btn-table"
                    >
                      Siguiente
                    </Button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          )}
        </article>
      </section>
      <Modal show={show} onHide={handleClose}>
        <div className="colorNavbarFooter text-light rounded-2 shadow">
          <Modal.Header closeButton>
            <Modal.Title>Crear Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="raleway" onSubmit={handleSubmit(crearCuenta)}>
              <Form.Group className="mb-3" controlId="nombreUsuario">
                <Form.Label>Nombre del Usuario</Form.Label>
                <Form.Control
                  type="text"
                  maxLength={120}
                  placeholder="Ej: juanperez97"
                  {...register("nombreUsuario", {
                    required: "El usuario debe tener un nombre",
                    minLength: {
                      value: 3,
                      message:
                        "El nombre del usuario debe tener al menos 3 caracteres",
                    },
                    maxLength: {
                      value: 100,
                      message:
                        "El nombre del usuario debe tener como máximo 100 caracteres",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.nombreUsuario?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  maxLength={120}
                  placeholder="Ej: juanperez@mail.com"
                  {...register("email", {
                    required: "El email es un dato obligatorio",
                    pattern: {
                      value:
                        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                      message:
                        "El email debe tener un formato valido, por ejemplo juanperez@mail.com",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.email?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  maxLength={50}
                  placeholder="Ingresa una contraseña"
                  {...register("password", {
                    required: "La contraseña es un dato obligatorio",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                      message:
                        "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.password?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="rol">
                <Form.Label>Rol</Form.Label>
                <Form.Select
                  {...register("rol", {
                    required: "El rol del usuario es un dato obligatorio",
                  })}
                >
                  <option value="">Seleccione una opcion</option>
                  {/* opciones para Administrador */}
                  {rol === "Administrador" && (
                    <>
                      <option value="Administrador">Administrador</option>
                      <option value="Gerente">Gerente</option>
                      <option value="Vendedor">Vendedor</option>
                      <option value="Usuario">Usuario</option>
                    </>
                  )}
                  {/* opciones para Gerente */}
                  {rol === "Gerente" && (
                    <>
                      <option value="Vendedor">Vendedor</option>
                      <option value="Usuario">Usuario</option>
                    </>
                  )}
                </Form.Select>
                <Form.Text className="text-danger">
                  {errors.rol?.message}
                </Form.Text>
              </Form.Group>
              <Button variant="success" type="submit">
                Crear
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};
export default Administrador;
