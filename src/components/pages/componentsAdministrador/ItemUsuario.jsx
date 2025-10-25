import React, { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  borrarUsuario,
  editarUsuario,
  leerUsuariosPaginados,
  obtenerUsuarioID,
} from "../../../helpers/queries.js";
import Swal from "sweetalert2";

const ItemUsuario = ({
  usuario,
  fila,
  setUsuarios,
  limitUsuario,
  pageUsuario,
}) => {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("userKey")) || {};
  const rol = usuarioLogueado.rol;

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {}, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const eliminarUsuario = () => {
    Swal.fire({
      title: `¿Quieres eliminar el usuario ${usuario.nombreUsuario}?`,
      text: "No puedes revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#277a35ff",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, quiero eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarUsuario(usuario._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Usuario eliminado",
            text: `El usuario ${usuario.nombreUsuario} fue eliminado correctamente`,
            icon: "success",
          });
          const respuestaUsuarios = await leerUsuariosPaginados(
            pageUsuario,
            limitUsuario
          );
          if (respuestaUsuarios.status === 200) {
            const datos = await respuestaUsuarios.json();
            let usuariosFiltrados = datos.usuarios;
            if (rol === "Gerente") {
              usuariosFiltrados = datos.usuarios.filter(
                (u) => u.rol === "Vendedor" || u.rol === "Usuario"
              );
            }
            setUsuarios(usuariosFiltrados);
          }
        } else {
          Swal.fire({
            title: "Usario eliminado",
            text: `El Usuario ${usuario.nombreUsuario} no pudo ser eliminado`,
            icon: "error",
          });
        }
      }
    });
  };

  const prepararModal = async (id) => {
    try {
      const respuesta = await obtenerUsuarioID(id);
      if (respuesta.status === 200) {
        const usuarioBuscado = await respuesta.json();
        setValue("nombreUsuario", usuarioBuscado.nombreUsuario);
        setValue("email", usuarioBuscado.email);
        setValue("rol", usuarioBuscado.rol);
        handleShow();
      } else {
        Swal.fire({
          title: "Error",
          text: "No se pudo obtener los datos del usuario.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error al cargar usuario",
        text: "Hubo un problema al obtener los datos del usuario.",
        icon: "error",
      });
    }
  };

  const actualizarUsuario = async (usuarioActualizado) => {
    const respuesta = await editarUsuario(usuarioActualizado, usuario._id);
    if (respuesta.status === 200) {
      Swal.fire({
        title: "Usuario editado",
        text: `El usuario ${usuarioActualizado.nombreUsuario} fue editado correctamente.`,
        icon: "success",
      });
      const respuestaUsuarios = await leerUsuariosPaginados(
        pageUsuario,
        limitUsuario
      );
      if (respuestaUsuarios.status === 200) {
        const datos = await respuestaUsuarios.json();
        let usuariosFiltrados = datos.usuarios;
        if (rol === "Gerente") {
          usuariosFiltrados = datos.usuarios.filter(
            (u) => u.rol === "Vendedor" || u.rol === "Usuario"
          );
        }
        setUsuarios(usuariosFiltrados);
      }
      handleClose();
    } else {
      Swal.fire({
        title: "Error al actualizar el usuario",
        text: `El usuario ${usuarioActualizado.nombreUsuario} no pudo ser editado.`,
        icon: "error",
      });
    }
  };

  return (
    <>
      <tr className="Montserrat">
        <td className="alineacionFila">{fila}</td>
        <td className="alineacionFila">{usuario.nombreUsuario}</td>
        <td className="alineacionFila">{usuario.email}</td>
        <td className="alineacionFila">{usuario.rol}</td>
        <td className="alineacionFila">
          <div className="contenedorBotones">
            <Button
              className="btn btn-warning btnAdministrador"
              onClick={() => prepararModal(usuario._id)}
            >
              <i className="bi bi-person-fill-gear"></i>
            </Button>
            {/* Btn Eliminar */}
            {rol === "Administrador" && (
              <Button
                variant="danger"
                className="btnAdministrador"
                onClick={eliminarUsuario}
              >
                <i className="bi bi-person-fill-x"></i>
              </Button>
            )}
          </div>
        </td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <div className="colorNavbarFooter text-light rounded-2 shadow">
          <Modal.Header closeButton>
            <Modal.Title>Editar Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              className="raleway"
              onSubmit={handleSubmit(actualizarUsuario)}
            >
              <Form.Group className="mb-3" controlId="nombreUsuario">
                <Form.Label>Nombre del Usuario</Form.Label>
                <Form.Control
                  type="text"
                  maxLength={120}
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
              <Form.Group className="mb-3" controlId="rol">
                <Form.Label>Rol</Form.Label>
                <Form.Select
                  {...register("rol", {
                    required: "El rol del usuario es un dato obligatorio",
                  })}
                >
                  <option value="">Seleccione una opcion</option>
                  {/* opciones si es Administrador */}
                  {rol === "Administrador" && (
                    <>
                      <option value="Administrador">Administrador</option>
                      <option value="Gerente">Gerente</option>
                      <option value="Vendedor">Vendedor</option>
                      <option value="Usuario">Usuario</option>
                    </>
                  )}
                  {/* opciones si es Gerente */}
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
                Actualizar
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cancelar
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default ItemUsuario;
