import { Accordion, Table, Button } from "react-bootstrap";
import React from "react";

const Administrador = () => {
  return (
    <section className="container">
      <h3 className="mt-5 Montserrat">ADMINISTRADOR</h3>
      <article className="my-4">
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="Montserrat">
              <i className="bi bi-database me-2"></i>
              Productos
            </Accordion.Header>
            <Accordion.Body className="row">
              <div className="col-12 col-md-10">
                <Table responsive striped bordered hover className="Montserrat">
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
                  <tbody></tbody>
                </Table>
              </div>
              <div className="col-12 col-md-2 text-end text-md-center order-first order-md-0 my-3 my-md-0">
                <Button className="btn btn-success">
                  <i className="bi bi-file-earmark-plus"></i>
                </Button>
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
              <div className="col-12 col-md-10">
                <Table responsive striped bordered hover className="Montserrat">
                  <thead>
                    <tr className="text-center">
                      <th>#</th>
                      <th>Nombre de usuario</th>
                      <th>Correo eléctronico</th>
                      <th>Rol</th>
                      <th>Opciones</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </Table>
              </div>
              <div className="col-12 col-md-2 text-end text-md-center order-first order-md-0 my-3 my-md-0">
                <Button className="btn btn-success">
                  <i className="bi bi-person-plus-fill"></i>
                </Button>
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
  );
};

export default Administrador;
