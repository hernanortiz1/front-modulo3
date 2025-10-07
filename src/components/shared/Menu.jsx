import React from "react";
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
import { useForm } from "react-hook-form";
import { login } from "../../helpers/queries";
import Swal from "sweetalert2";
import CartOffcanvas from "./componentsMenu/CartOffCanvas";

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

  const cartItems = [
    {
      name: "Remera levis negra",
      size: 46,
      price: 279900,
      quantity: 1,
      image:
        "https://acdn-us.mitiendanube.com/stores/002/186/544/products/rn21-5e815e9dace32e20ff16540263656000-640-0.jpg",
      increaseQty: () => {}, // lógica personalizada
      decreaseQty: () => {}, // lógica personalizada
    },
    {
      name: "Remera levis negra",
      size: 46,
      price: 279900,
      quantity: 1,
      image:
        "https://acdn-us.mitiendanube.com/stores/002/186/544/products/rn21-5e815e9dace32e20ff16540263656000-640-0.jpg",
      increaseQty: () => {}, // lógica personalizada
      decreaseQty: () => {}, // lógica personalizada
    },
    {
      name: "Remera levis negra",
      size: 46,
      price: 279900,
      quantity: 1,
      image:
        "https://acdn-us.mitiendanube.com/stores/002/186/544/products/rn21-5e815e9dace32e20ff16540263656000-640-0.jpg",
      increaseQty: () => {}, // lógica personalizada
      decreaseQty: () => {}, // lógica personalizada
    },
    {
      name: "Remera levis negra",
      size: 46,
      price: 279900,
      quantity: 1,
      image:
        "https://acdn-us.mitiendanube.com/stores/002/186/544/products/rn21-5e815e9dace32e20ff16540263656000-640-0.jpg",
      increaseQty: () => {}, // lógica personalizada
      decreaseQty: () => {}, // lógica personalizada
    },
    {
      name: "Remera levis negra",
      size: 46,
      price: 279900,
      quantity: 1,
      image:
        "https://acdn-us.mitiendanube.com/stores/002/186/544/products/rn21-5e815e9dace32e20ff16540263656000-640-0.jpg",
      increaseQty: () => {}, // lógica personalizada
      decreaseQty: () => {}, // lógica personalizada
    },
    {
      name: "Remera levis negra",
      size: 46,
      price: 279900,
      quantity: 1,
      image:
        "https://acdn-us.mitiendanube.com/stores/002/186/544/products/rn21-5e815e9dace32e20ff16540263656000-640-0.jpg",
      increaseQty: () => {}, // lógica personalizada
      decreaseQty: () => {}, // lógica personalizada
    },
    {
      name: "Remera levis negra",
      size: 46,
      price: 279900,
      quantity: 1,
      image:
        "https://acdn-us.mitiendanube.com/stores/002/186/544/products/rn21-5e815e9dace32e20ff16540263656000-640-0.jpg",
      increaseQty: () => {}, // lógica personalizada
      decreaseQty: () => {}, // lógica personalizada
    },
  ];

  const irALogin = () => {
    handleClose();
    navegacion("/login");
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
      setUsuarioAdmin({
        nombreUsuario: datoUsuario.nombreUsuario,
        token: datoUsuario.token,
      });
      Swal.fire({
        title: "Inicio de sesion correcto!",

        text: `Bienvenido ${datoUsuario.nombreUsuario} !`,

        icon: "success",
      });
      handleClose();
      Navegacion("/administrador");
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
                  //falta agregar .TOKEN
                  <>
                    <NavLink className="nav-link" to={"/administrador"}>
                      Administrador
                    </NavLink>
                    <Button className="nav-link" onClick={logout}>
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
                    <Button
                      className="nav-link d-flex align-items-center ms-lg-5"
                      onClick={() => setShowCart(true)}
                    >
                      <i className="bi bi-bag-fill text-light fs-4"></i>
                    </Button>
                    <CartOffcanvas
                      show={showCart}
                      handleClose={() => setShowCart(false)}
                      cartItems={cartItems}
                    />
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
              onClick={irALogin}
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
