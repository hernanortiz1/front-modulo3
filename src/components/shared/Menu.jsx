import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import Swal from "sweetalert2";

const Menu = ({ usuarioAdmin, setUsuarioAdmin }) => {
  const navegacion = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const logout = () => {
    Swal.fire({
      title: "¿Seguro que deseas cerrar sesión?",
      text: "Tu sesión se cerrará y volverás al inicio.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setUsuarioAdmin(null);
        setNombreUsuario("");

        navegacion("/");
        setExpanded(false);
        Swal.fire(
          "Sesión cerrada",
          "Has cerrado sesión correctamente.",
          "success"
        );
      }
    });
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
                    <Button className="nav-link" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <NavLink className="nav-link" to={"/login"}>
                    Login
                  </NavLink>
                )}
              </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
