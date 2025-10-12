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
  const { getTotalItems } = useCart();

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
      text: "¿Estás seguro que deseas salir de tu cuenta?",
      icon: "question", // ✅ Mejor que "warning" para esta acción
      iconColor: "#1d3557", // Color personalizado
      showCancelButton: true,
      confirmButtonText: '<i class="bi bi-box-arrow-right me-2"></i>Sí, salir',
      cancelButtonText: '<i class="bi bi-x-circle me-2"></i>Cancelar',
      confirmButtonColor: "#1d3557", // Color más elegante
      cancelButtonColor: "#6c757d",
      reverseButtons: true, // ✅ Botón cancelar a la izquierda
      backdrop: `
        rgba(0,0,0,0.6)
        left top
        no-repeat
      `,
      customClass: {
        popup: "rounded-4 shadow-lg",
        confirmButton: "px-4 py-2 fw-semibold",
        cancelButton: "px-4 py-2 fw-semibold",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("userKey"); // ✅ Limpiar sesión
        setUsuarioAdmin({});
        navegacion("/");

        Swal.fire({
          title: "¡Hasta pronto!",
          text: "Tu sesión se ha cerrado correctamente",
          icon: "success",
          iconColor: "#198754",
          timer: 2000, // ✅ Se cierra automáticamente
          timerProgressBar: true,
          showConfirmButton: false,
          customClass: {
            popup: "rounded-4 shadow-lg",
          },
        });
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

      const esAdmin = datosToken.rol === "Administrador";

      Swal.fire({
        icon: "success",
        title: `Hola, ${datoUsuario.nombreUsuario}`,
        html: `
          <div class="d-flex align-items-center justify-content-center gap-2 mt-3">
            <i class="bi ${esAdmin ? 'bi-shield-fill-check' : 'bi-person-circle'}" style="font-size: 2rem; color: ${esAdmin ? '#0d6efd' : '#198754'};"></i>
            <span class="fw-semibold">${esAdmin ? 'Acceso Administrador' : 'Redirigiendo...'}</span>
          </div>
        `,
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
        allowOutsideClick: false,
        customClass: {
          popup: 'rounded-3'
        }
      });

      handleClose();

      setTimeout(() => {
        Navegacion(datosToken.rol === "Administrador" ? "/administrador" : "/");
      }, 1500);

    } else {
      Swal.fire({
        icon: "error",
        title: "Error de autenticación",
        text: "Usuario o contraseña incorrectos",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#6c757d",
        customClass: {
          popup: 'rounded-3'
        }
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

                        <Dropdown.Item
                          onClick={logout}
                          className="logout-item"
                          style={{
                            transition: "all 0.3s ease",
                            padding: 0,
                          }}
                        >
                          <div
                            style={{
                              padding: "0.5rem 1rem",
                              width: "100%",
                              transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.setProperty(
                                "background-color",
                                "#dc3545",
                                "important"
                              );
                              e.target.style.setProperty(
                                "color",
                                "white",
                                "important"
                              );
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.removeProperty("background-color");
                              e.target.style.removeProperty("color");
                            }}
                          >
                            <i className="bi bi-box-arrow-left me-2"></i>
                            Cerrar sesión
                          </div>
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
