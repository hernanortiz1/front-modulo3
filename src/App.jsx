import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import Login from "./components/pages/Login";
import FormularioRopa from "./components/pages/ropa/FormularioRopa";

function App() {
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
        <main>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            {/*  <Route
              path="/detalle/:id"
              element={<DetalleProducto></DetalleProducto>}
            ></Route>*/}
            <Route path="/login" element={<Login></Login>}></Route>

            {/* <Route
              path="/administrador"
              element={<ProtectorAdmin isAdmin={usuarioAdmin}></ProtectorAdmin>}
            ></Route> */}

            <Route index element={<Administrador></Administrador>}></Route>

            {/* <Route
                path="crear"
                element={
                  <FormularioRopa
                  titulo={"Crear producto"}  
                 
                  ></FormularioRopa>
                }
              ></Route> */}
            <Route
              path="editar/:id"
              element={
                <FormularioRopa titulo={"Editar producto"}></FormularioRopa>
              }
            ></Route>

            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
