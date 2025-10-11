import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Modal,
  Badge,
} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../helpers/queries";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";
import CartOffcanvas from "./componentsMenu/CartOffCanvas";
import { useCart } from "../../helpers/CartContext";
import Dropdown from "react-bootstrap/Dropdown";

const Menu = ({ usuarioAdmin, setUsuarioAdmin }) => {
  const navegacion = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    reset();
  };
  const handleShow = () => setShow(true);

  //CARRITO
  const [showCart, setShowCart] = useState(false);
  const { cartItems, getTotalItems, isLoading } = useCart();

  const isCartPage = location.pathname === "/carrito";

  const irARegistro = () => {
    handleClose();
    navegacion("/registro");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const logout = () => {
    Swal.fire({
      title: "¿Cerrar sesión?",
      text: "¿Estás seguro que quieres salir?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, salir",
      confirmButtonColor: "#198754",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setUsuarioAdmin({});
        navegacion("/");
        Swal.fire("Sesión cerrada", "Has salido correctamente.", "success");
      }
    });
  };

  const Navegacion = useNavigate();

  const iniciarSesion = async (usuario) => {
    const respuesta = await login(usuario);
    if (respuesta.status === 200) {
      const datoUsuario = await respuesta.json();
      const datosToken = jwtDecode(datoUsuario.token);
      setUsuarioAdmin({
        nombreUsuario: datoUsuario.nombreUsuario,
        token: datoUsuario.token,
        rol: datosToken.rol,
      });
      Swal.fire({
        title: "Inicio de sesion correcto!",

        text: `Bienvenido ${datoUsuario.nombreUsuario} !`,

        icon: "success",
      });
      handleClose();
      if (datosToken.rol === "Administrador") {
        Navegacion("/administrador");
      } else {
        Navegacion("/");
      }
    } else {
      Swal.fire({
        title: "Error al iniciar sesion",

        text: `Credenciales incorrectas`,

        icon: "error",
      });
    }
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
                {usuarioAdmin.token ? (
                  <>
                    <Dropdown align="end" className="me-3">
                      <Dropdown.Toggle
                        variant="link"
                        className="text-light text-decoration-none d-flex align-items-center gap-2"
                      >
                        <i className="bi bi-person-circle fs-4"></i>
                        <span className="fw-semibold">
                          {usuarioAdmin.nombreUsuario}
                        </span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {usuarioAdmin.rol === "Administrador" && (
                          <Dropdown.Item as={NavLink} to="/administrador">
                            <i className="bi bi-gear-fill me-2"></i>
                            Panel de administración
                          </Dropdown.Item>
                        )}

                        {usuarioAdmin.rol !== "Administrador" &&
                          !isCartPage && (
                            <Dropdown.Item onClick={() => setShowCart(true)}>
                              <i className="bi bi-bag-fill me-2"></i>
                              Ver carrito ({getTotalItems()})
                            </Dropdown.Item>
                          )}

                        <Dropdown.Divider />

                        <Dropdown.Item onClick={logout} className="cerrar-sesion-item">
                          <i className="bi bi-box-arrow-left me-2"></i>
                          Cerrar sesión
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    {usuarioAdmin.rol !== "Administrador" && (
                      <CartOffcanvas
                        show={showCart}
                        handleClose={() => setShowCart(false)}
                      />
                    )}
                  </>
                ) : (
                  <Button
                    variant="link"
                    className="nav-link p-0"
                    onClick={handleShow}
                    title="Iniciar sesión"
                  >
                    <div className="d-flex align-items-center gap-2 text-light">
                      <i className="bi bi-person-fill fs-4"></i>
                      <span>Iniciar sesión</span>
                    </div>
                  </Button>
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
            <Form onSubmit={handleSubmit(iniciarSesion)}>
              <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese e-mail"
                  autoFocus
                  className="focus-red"
                  maxLength={100}
                  {...register("email", {
                    required: "El email es obligatorio",
                    pattern: {
                      value:
                        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                      message: "Ingresa un email válido",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  className="focus-red"
                  maxLength={100}
                  minLength={8}
                  placeholder="Ingrese contraseña"
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                    minLength: {
                      value: 8,
                      message: "Mínimo 8 caracteres",
                    },
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,100}$/,
                      message:
                        "Debe tener mayúscula, minúscula, número y símbolo",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
              </Form.Group>
              <Button variant="primary" className="w-100" type="submit">
                Ingresar
              </Button>
            </Form>
            <Button
              variant="outline-danger"
              className="w-100 mt-2"
              onClick={irARegistro}
            >
              Crear cuenta
            </Button>
          </Modal.Body>
        </div>
      </Modal>
    </header>
  );
};

export default Menu;
