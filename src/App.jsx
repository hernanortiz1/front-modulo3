import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import React from "react";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Contacto from "./components/pages/Contacto";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import ProtectorAdmin from "./components/routes/ProtectorAdmin";
import DetalleProducto from "./components/pages/DetalleProducto";
import FormularioRopa from "./components/pages/ropa/FormularioRopa";
import AbrigosCamperas from "./components/pages/categorias/AbrigosCamperas";
import Anteojos from "./components/pages/categorias/Anteojos";
import Bermudas from "./components/pages/categorias/Bermudas";
import Camisas from "./components/pages/categorias/Camisas";
import Gorras from "./components/pages/categorias/Gorras";
import Pantalones from "./components/pages/categorias/Pantalones";
import RemerasChombas from "./components/pages/categorias/RemerasChombas";
import Shorts from "./components/pages/categorias/Shorts";
import SweatersBuzos from "./components/pages/categorias/SweatersBuzos";
import AOS from "aos";
import "aos/dist/aos.css";
import Registro from "./components/pages/Registro";
import { obtenerProductos } from "./helpers/queries";
import Carrito from "./components/pages/Carrito";
import SobreNosotros from "./components/pages/SobreNosotros";
import { CartProvider } from "./helpers/CartContext";
import ProtectorRol from "./components/routes/ProtectorRol";
import CategoriaDestacada from "./components/pages/categorias/CategoriaDestacada";
import PagoExitoso from "./components/pages/PagoExitoso";
import PagoFallido from "./components/pages/PagoFallido";
import PagoPendiente from "./components/pages/PagoPendiente";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("userKey")) || {};
  const [usuarioAdmin, setUsuarioAdmin] = useState(usuarioLogueado);

  const [productos, setProductos] = useState([]);

  const cargarProductos = async () => {
    try {
      const respuesta = await obtenerProductos();
      if (respuesta && respuesta.ok) {
        const data = await respuesta.json();
        setProductos(data);
      } else {
        console.error("Error al obtener productos");
      }
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("userKey", JSON.stringify(usuarioAdmin));
  }, [usuarioAdmin]);

  useEffect(() => {
    const cargarProductos = async () => {
      const respuesta = await obtenerProductos();
      if (respuesta && respuesta.ok) {
        const data = await respuesta.json();
        setProductos(data);
      } else {
        console.error("Error al obtener productos");
      }
    };

    cargarProductos();
  }, []);

  return (
    <>
      <CartProvider>
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
                element={
                  <DetalleProducto
                    usuarioAdmin={usuarioAdmin}
                  ></DetalleProducto>
                }
              ></Route>

              <Route path="/carrito" element={<Carrito />} />

              <Route path="/registro" element={<Registro></Registro>}></Route>
              <Route
                path="/remeras-chombas"
                element={
                  <RemerasChombas productos={productos}></RemerasChombas>
                }
              ></Route>
              <Route
                path="/abrigos-camperas"
                element={
                  <AbrigosCamperas productos={productos}></AbrigosCamperas>
                }
              ></Route>
              <Route
                path="/sweaters-buzos"
                element={<SweatersBuzos productos={productos}></SweatersBuzos>}
              ></Route>
              <Route
                path="/camisas"
                element={<Camisas productos={productos}></Camisas>}
              ></Route>
              <Route
                path="/bermudas"
                element={<Bermudas productos={productos}></Bermudas>}
              ></Route>
              <Route
                path="/pantalones"
                element={<Pantalones productos={productos}></Pantalones>}
              ></Route>
              <Route
                path="/shorts"
                element={<Shorts productos={productos}></Shorts>}
              ></Route>
              <Route
                path="/anteojos"
                element={<Anteojos productos={productos}></Anteojos>}
              ></Route>
              <Route
                path="/gorras"
                element={<Gorras productos={productos}></Gorras>}
              ></Route>

              <Route path="/sobreNosotros" element={<SobreNosotros />}></Route>
              <Route
                path="/categorias-destacadas"
                element={<CategoriaDestacada />}
              ></Route>
              <Route
                path="/administrador"
                element={
                  <ProtectorRol
                    rolesPermitidos={["Administrador", "Gerente", "Empleado"]}
                    usuario={usuarioAdmin}
                  ></ProtectorRol>
                }
              >
                <Route
                  index
                  element={
                    <Administrador
                      titulo={usuarioAdmin.rol || "Administrador"}
                    ></Administrador>
                  }
                ></Route>

                <Route
                  path="crear"
                  element={
                    <FormularioRopa
                      titulo={"Crear producto"}
                      cargarProductos={cargarProductos}
                    />
                  }
                ></Route>

                <Route
                  path="editar/:id"
                  element={
                    <FormularioRopa
                      titulo={"Editar producto"}
                      cargarProductos={cargarProductos}
                    ></FormularioRopa>
                  }
                ></Route>
              </Route>
              <Route path="/pago/exitoso" element={<PagoExitoso />} />
              <Route path="/pago/fallido" element={<PagoFallido />} />
              <Route path="/pago/pendiente" element={<PagoPendiente />} />
              <Route path="*" element={<Error404></Error404>}></Route>
            </Routes>
          </main>
          <Footer></Footer>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
