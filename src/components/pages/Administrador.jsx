import { Accordion, Table, Button, Form, Modal } from "react-bootstrap";
import ItemUsuario from "./componentsAdministrador/ItemUsuario";
import ItemProducto from "./componentsAdministrador/ItemProducto";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Administrador = () => {
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
      <section className="py-3 colorNavbarFooter text-light">
        <h3 className=" Montserrat text-center">ADMINISTRADOR</h3>
      </section>
      <section className="container">
        <article className="my-4">
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="Montserrat">
                <i className="bi bi-database me-2"></i>
                Productos
              </Accordion.Header>
              <Accordion.Body className="row">
                <div className="d-flex col-12 text-end text-md-center order-first order-md-0 my-3">
                <Form className="w-50 d-flex justify-content-center me-3">
                      <Form.Control type="text" placeholder="Buscar producto" />
                </Form>
                <Button className="btn btn-success">
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
                        <th>Categoría</th>
                        <th>Talle</th>
                        <th>Color</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Opciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <ItemProducto></ItemProducto>
                    </tbody>
                  </Table>
                </div>
                <div className="d-flex justify-content-center align-items-center my-3">
                  <Button className="btn-table">Anterior</Button>
                  <span className="mx-3">Página 1 de 3</span>
                  <Button className="btn-table">Siguiente</Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey={["0"]} alwaysOpen className="mt-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="Montserrat">
                <i className="bi bi-person-fill me-2"></i>Usuarios
              </Accordion.Header>
              <Accordion.Body className="row">
                <div className="d-flex col-12 text-end text-md-center order-first order-md-0 my-3">
                <Form className="w-50 d-flex justify-content-center me-3">
                      <Form.Control type="text" placeholder="Buscar usuario" />
                </Form>
                <Button className="btn btn-success"  onClick={handleShow}>
                  <i className="bi bi-person-plus-fill"></i>
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
                        <th>Nombre de usuario</th>
                        <th>Correo eléctronico</th>
                        <th>Rol</th>
                        <th>Opciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <ItemUsuario></ItemUsuario>
                    </tbody>
                  </Table>
                </div>
                <div className="d-flex justify-content-center align-items-center my-3">
                  <Button className="btn-table">Anterior</Button>
                  <span className="mx-3">Página 1 de 3</span>
                  <Button className="btn-table">Siguiente</Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </article>
      </section>
      <Modal show={show} onHide={handleClose}>
        <div className="colorNavbarFooter text-light rounded-2 shadow">
          <Modal.Header closeButton>
            <Modal.Title>Crear Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="raleway" onSubmit={handleSubmit()}>
              <Form.Group className="mb-3" controlId="nombreUsuario">
                <Form.Label>Nombre del Usuario</Form.Label>
                <Form.Control
                  type="text"
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
                  placeholder="Contraseña"
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
                  <option value="Administrador">Administrador</option>
                  <option value="Usuario">Usuario</option>
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
              Cancelar
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default Administrador;
