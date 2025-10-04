import React from "react";
import { Row } from "react-bootstrap";
import CardCategoriaProducto from "../ropa/CardCategoriaProducto";

const AbrigosCamperas = ({ productos }) => {
   const abrigosCamperas = (productos || []).filter(
    (producto) => producto.categoria === "Abrigos y camperas"
  
  );
console.log("productos recibidos en AbrigosCamperas:", productos);
  return (
    <>
      <section className="py-3 colorNavbarFooter text-light ">
        <h1 className="text-center Montserrat">Abrigos y camperas</h1>
      </section>
      <section className="my-5 container rounded py-3">
        <Row>
          {abrigosCamperas.length > 0 ? (
            abrigosCamperas.map((producto) => (
              <CardCategoriaProducto
                key={producto.id}
                productos={producto}
              ></CardCategoriaProducto>
            ))
          ) : (
            <p className="text-center fs-3 my-5">No se encontraron productos para mostrar.</p>
          )}
        </Row>
      </section>
    </>
  );
};

export default AbrigosCamperas;
