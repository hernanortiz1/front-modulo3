import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import Swal from "sweetalert2";

const Menu = () => {
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
        Swal.fire("Sesión cerrada", "Has cerrado sesión correctamente.", "success");
      }
    });
  };

    return (
        <header>
             <Navbar expand="lg" className="bg-body-tertary" expanded={expanded}>
        <Container>
          <NavLink to="/" className="navbar-brand "> {/*falta agregar fuente */}
            Lannister
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to={"/"} onClick={() => setExpanded(false)}>
                Inicio
              </NavLink>
              <NavDropdown title="Categorias">
                <NavDropdown.Item as={NavLink} to="/shooter" onClick={() => setExpanded(false)}>
                  Shooter
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/simulacion" onClick={() => setExpanded(false)}>
                  Simulación
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/aventura" onClick={() => setExpanded(false)}>
                  Aventura
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/sandbox" onClick={() => setExpanded(false)}>
                  Sandbox
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/rpg" onClick={() => setExpanded(false)}>
                  RPG
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Acerca de">
                <NavDropdown.Item as={NavLink} to={"/sobreNosotros"} onClick={() => setExpanded(false)}>
                  ¿Sobre nosotros?
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to={"/preguntasFrecuentes"} onClick={() => setExpanded(false)}>
                  Preguntas Frecuentes
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              {/*Falta props de inicio de sesion */}
                <>
                  <NavLink className="nav-link" to="/login" onClick={() => setExpanded(false)}>
                    Iniciar sesión
                  </NavLink>
                  <NavLink className="nav-link" to="/registro" onClick={() => setExpanded(false)}>
                    Registro
                  </NavLink>
                </>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </header>
    );
};

export default Menu;