import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import CardCategoriaProducto from "../ropa/CardCategoriaProducto";
import HashLoader from "react-spinners/HashLoader";
import BtnScroll from "./funcion/BtnScroll";

const Pantalones = ({ productos }) => {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (productos) {
      const timer = setTimeout(() => setCargando(false), 500);
      //muestra medio segundo el loader
      return () => clearTimeout(timer);
    }
  }, [productos]);

  const abrigosCamperas = (productos || []).filter(
    (producto) => producto.categoria === "Pantalones"
  );

  return (
    <>
      <section className="py-3 colorNavbarFooter text-light ">
        <h1 className="text-center Montserrat">Pantalones</h1>
      </section>
      <section className="my-5 container rounded py-3">
        {cargando ? (
          <div className="d-flex justify-content-center my-5">
            <HashLoader size={80} color="#1d3557" />
          </div>
        ) : (
          <Row>
            {abrigosCamperas.length > 0 ? (
              abrigosCamperas.map((producto) => (
                <CardCategoriaProducto
                  key={producto._id}
                  productos={producto}
                ></CardCategoriaProducto>
              ))
            ) : (
              <p className="text-center fs-3 my-5">
                No se encontraron productos para mostrar.
              </p>
            )}
          </Row>
        )}
      </section>
      <BtnScroll />
    </>
  );
};

export default Pantalones;
