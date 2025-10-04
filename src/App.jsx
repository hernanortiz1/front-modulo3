import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState} from "react";
import React from "react";
import { Carousel } from "react-bootstrap";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Contacto from "./components/pages/Contacto";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import Login from "./components/pages/Login";
import FormularioRopa from "./components/pages/ropa/FormularioRopa";
import ProtectorAdmin from "./components/routes/ProtectorAdmin";
import DetalleProducto from "./components/pages/DetalleProducto";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("userKey")) || {};
  const [usuarioAdmin, setUsuarioAdmin] = useState(usuarioLogueado);

  useEffect(() => {
    sessionStorage.setItem("userKey", JSON.stringify(usuarioAdmin));
  }, [usuarioAdmin]);

  return (
    <>
      <BrowserRouter>
        <Menu
          usuarioAdmin={usuarioAdmin}
          setUsuarioAdmin={setUsuarioAdmin}
        ></Menu>
        <main className="colorMain">
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
             <Route
              path="/detalle/:id"
              element={<DetalleProducto></DetalleProducto>}
            ></Route>

            <Route path="/login" element={<Login></Login>}></Route>

            {/* <Route path="/registro" element={<Registro></Registro>}></Route>*/}
            {/*
            <Route
              path="/remeras-chombas"
              element={<RemerasChombas></RemerasChombas>}
            ></Route>
            <Route
              path="/abrigos-camperas"
              element={<AbrigosCamperas></AbrigosCamperas>}
            ></Route>
            <Route
              path="/sweaters-buzos"
              element={<SweatersBuzos></SweatersBuzos>}
            ></Route>
            <Route path="/camisas" element={<Camisas></Camisas>}></Route>
            <Route path="/bermudas" element={<Bermudas></Bermudas>}></Route>
            <Route
              path="/pantalones"
              element={<Pantalones></Pantalones>}
            ></Route>
            <Route path="/shorts" element={<Shorts></Shorts>}></Route>
            <Route path="/anteojos" element={<Anoteojos></Anoteojos>}></Route>
            <Route path="/gorras" element={<Gorras></Gorras>}></Route>
            */}

            <Route
              path="/administrador"
              element={<ProtectorAdmin isAdmin={usuarioAdmin}></ProtectorAdmin>}
            >
              <Route index element={<Administrador></Administrador>}></Route>

                  {/* <Route
                    path="crear"
                    element={
                      <FormularioRopa
                      titulo={"Crear producto"}

                      ></FormularioRopa>
                    }
                  ></Route> */}

                  {/*<Route
                  path="editar/:id"
                  element={
                    <FormularioRopa titulo={"Editar producto"}></FormularioRopa>
                  }
                ></Route>*/}
            </Route>

            <Route path="*" element={<Error404></Error404>}></Route>

          </Routes>
        </main>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
