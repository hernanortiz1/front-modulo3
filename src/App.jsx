import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import React from 'react';
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Inicio from "./components/pages/Inicio";
import AOS from "aos";
import "aos/dist/aos.css";
import Administrador from "./components/pages/Administrador";

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
        <Menu>
          usuarioAdmin={usuarioAdmin}
          setUsuarioAdmin={setUsuarioAdmin}
        </Menu>
        <main className="colorMain">
          <Routes>
            <Route path="/" element={<Inicio />} />
          </Routes>
          <Administrador></Administrador>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
