import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import Menu from "./components/shared/Menu";


function App() {


  return (
    <>
      <BrowserRouter>
        <Menu>
          {/*Falta session storage */}

        </Menu>
        <main></main>
        
      </BrowserRouter>
    </>
  )
}

export default App
