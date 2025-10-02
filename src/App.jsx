import { BrowserRouter, Routes, Route } from "react-router";
import React from 'react'
import { useEffect, useState } from "react";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import SobreNosotros from "./components/pages/SobreNosotros";

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
        <main>
          <Routes>
            <Route path="/sobreNosotros" element={<SobreNosotros />} />
          </Routes>        
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
