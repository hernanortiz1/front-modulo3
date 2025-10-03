import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ItemUsuario = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <tr className="Montserrat">
        <td className="text-center">1</td>
        <td className="text-center">juanperez97</td>
        <td className="text-center">juanperez@mail.com</td>
        <td className="text-center">Usuario</td>
        <td className="text-center">
          <div className="d-flex gap-1 justify-content-center">
            <Button className="btn btn-warning me-lg-2">
              <i className="bi bi-person-fill-gear" onClick={handleShow}></i>
            </Button>
            <Button variant="danger" className="me-lg-2">
              <i className="bi bi-person-fill-x"></i>
            </Button>
          </div>
        </td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <div className="colorNavbarFooter text-light rounded-2 shadow">
          <Modal.Header closeButton>
            <Modal.Title>Editar Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="raleway" onSubmit={handleSubmit()}>
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
                  })}>
                  <option value="">Seleccione una opcion</option>
                  <option value="Administrador">Administrador</option>
                  <option value="Usuario">Usuario</option>
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
