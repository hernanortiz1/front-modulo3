import React from "react";
import { Container, Form, Table } from "react-bootstrap";

const CategoriaDestacada = () => {
  const categorias = [
    "Abrigos y camperas",
    "Sweaters y buzos",
    "Remeras y chombas",
    "Camisas",
    "Pantalones",
    "Bermudas",
    "Shorts de Baño",
    "Gorras",
    "Anteojos de sol",
  ];

  return (
    <Container className="my-5">
      <div className="border border-dark rounded-3 p-4 bg-light shadow-sm">
        <h4 className="text-center mb-4">Categorías destacadas</h4>
        <div className="table-responsive">
          <Table className="text-center align-middle">
            <thead>
              <tr>
                {categorias.map((cat) => (
                  <th key={cat}>{cat}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="table-primary">
                {categorias.map((cat) => (
                  <td key={cat}>
                    <Form.Check type="checkbox" id={`check-${cat}`} />
                  </td>
                ))}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </Container>
  );
};

export default CategoriaDestacada;
