import { BrowserRouter, Routes, Route } from "react-router";
import React from "react";
import { useEffect, useState } from "react";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Contacto from "./components/pages/Contacto";

function App() {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("userKey")) || {};
  const [usuarioAdmin, setUsuarioAdmin] = useState(usuarioLogueado);

  useEffect(() => {
    sessionStorage.setItem("userKey", JSON.stringify(usuarioAdmin));
  }, [usuarioAdmin]);

  return (
    <>
      <BrowserRouter>
        <Menu>
          usuarioAdmin={usuarioAdmin}
          setUsuarioAdmin={setUsuarioAdmin}
        </Menu>
        <main className="colorMain">
          <Routes>
            <Route path="/contacto" element={<Contacto />}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
