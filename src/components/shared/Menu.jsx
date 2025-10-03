import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Modal,
} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import React from 'react';

const Menu = ({ usuarioAdmin, setUsuarioAdmin }) => {
  const navegacion = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const irALogin = () => {
    handleClose();
    navegacion("/login");
  };

  return (
    <header>
      <Navbar
        expand="lg"
        className="bg-body-tertary colorNavbarFooter"
        expanded={expanded}
      >
        <Container>
          <NavLink to="/" className="navbar-brand Bodoni">
            Lannister
          </NavLink>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                className="nav-link"
                to={"/"}
                onClick={() => setExpanded(false)}
              >
                Inicio
              </NavLink>
              <NavDropdown title="Categorias">
                <NavDropdown.Item
                  as={NavLink}
                  to="/remeras-chombas"
                  onClick={() => setExpanded(false)}
                >
                  Remeras y Chombas
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/abrigos-camperas"
                  onClick={() => setExpanded(false)}
                >
                  Abrigos y camperas
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/sweaters-buzos"
                  onClick={() => setExpanded(false)}
                >
                  Sweaters y buzos
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/camisas"
                  onClick={() => setExpanded(false)}
                >
                  Camisas
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/bermudas"
                  onClick={() => setExpanded(false)}
                >
                  Bermudas
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/pantalones"
                  onClick={() => setExpanded(false)}
                >
                  Pantalones
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/shorts"
                  onClick={() => setExpanded(false)}
                >
                  Shorts de Baño
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/anteojos"
                  onClick={() => setExpanded(false)}
                >
                  Anteojos de sol
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/gorras"
                  onClick={() => setExpanded(false)}
                >
                  Gorras
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink
                className="nav-link"
                to={"/sobreNosotros"}
                onClick={() => setExpanded(false)}
              >
                Sobre nosotros
              </NavLink>
              <NavLink
                className="nav-link"
                to={"/contacto"}
                onClick={() => setExpanded(false)}
              >
                Contacto
              </NavLink>
            </Nav>
            <Nav className="ms-auto">
              <>
                {usuarioAdmin ? (
                  //falta agregar .TOKEN
                  <>
                    <NavLink className="nav-link" to={"/administrador"}>
                      Administrador
                    </NavLink>
                    <Button className="nav-link" >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    {/* Botón login */}
                    <Button
                      variant="link"
                      className="nav-link p-0"
                      onClick={handleShow}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-person-fill text-light fs-4"></i>
                        <h6 className="mb-0 text-light">Login</h6>
                      </div>
                    </Button>

                    {/* Botón carrito */}
                    <NavLink
                      to="/carrito"
                      className="nav-link d-flex align-items-center ms-lg-5"
                      onClick={() => setExpanded(false)}
                    >
                      <i className="bi bi-bag-fill text-light fs-4"></i>
                    </NavLink>
                  </>
                )}
              </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*MODAL */}

      <Modal show={show} onHide={handleClose}>
        <div className="colorNavbarFooter text-light rounded-2 shadow">
          <Modal.Header closeButton>
            <Modal.Title className="text-center w-100">
              Iniciar sesión
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese e-mail"
                  autoFocus
                  className="focus-red"
                  required
                  maxLength={100}
                  pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Ingresa un email válido")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  className="focus-red"
                  required
                  maxLength={100}
                  minLength={8}
                  pattern="^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,100}$"
                  placeholder="Ingrese contraseña"
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "La contraseña debe tener 1 mayuscula, 1 minuscula, 1 número y 1 símbolo"
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              </Form.Group>
            </Form>
            <div className="d-flex flex-column gap-2 mt-3">
              <Button variant="primary" className="w-100">
                Ingresar
                {/*Falta agregar logica para inicio de sesion */}
              </Button>
              <Button
                variant="outline-danger"
                className="w-100"
                onClick={irALogin}
              >
                Crear cuenta
              </Button>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </header>
  );
};

export default Menu;
