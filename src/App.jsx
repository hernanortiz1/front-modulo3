import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";

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
        
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
