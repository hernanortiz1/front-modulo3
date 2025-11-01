import React, { useState, useEffect } from "react";
import { Container, Form, Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import {
  obtenerConfiguracion,
  guardarConfiguracion,
} from "../../../helpers/queries";
import { useNavigate } from "react-router";

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

  const [titulo, setTitulo] = useState("");
  const [seleccionadas, setSeleccionadas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarDatos = async () => {
      const respuesta = await obtenerConfiguracion();
      if (respuesta?.ok) {
        const data = await respuesta.json();
        setTitulo(data.titulo || "");
        setSeleccionadas(data.categoriasSeleccionadas || []);
      }
    };
    cargarDatos();
  }, []);

  const manejarCheck = (categoria) => {
    setSeleccionadas((prev) =>
      prev.includes(categoria)
        ? prev.filter((c) => c !== categoria)
        : [...prev, categoria]
    );
  };

  const manejarGuardar = async () => {
    const configuracion = {
      titulo,
      categoriasSeleccionadas: seleccionadas,
    };

    const respuesta = await guardarConfiguracion(configuracion);
    if (respuesta?.ok) {
      Swal.fire("Éxito", "Configuración guardada correctamente", "success");
    } else {
      Swal.fire("Error", "No se pudo guardar la configuración", "error");
    }
  };

  return (
    <Container className="my-5">
      <div className="border border-dark rounded-3 p-4 colorNavbarFooter shadow-sm ">
        <div className="mb-4 text-center text-light">
          <h4>Título de categoría</h4>
          <Form.Control
            type="text"
            placeholder="Ingrese título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <h4 className="text-center mb-4 text-light">Categorías destacadas</h4>
        <div className="table-responsive">
          <Table className="text-center align-middle rounded-3">
            <thead>
              <tr>
                {categorias.map((cat) => (
                  <th key={cat}>{cat}</th>
                ))}
              </tr>
            </thead>
            <tbody className="rounded rounded-3">
              <tr className="table-primary ">
                {categorias.map((cat) => (
                  <td key={cat}>
                    <Form.Check
                      type="checkbox"
                      id={`check-${cat}`}
                      checked={seleccionadas.includes(cat)}
                      onChange={() => manejarCheck(cat)}
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="text-center mt-4">
          <Button onClick={manejarGuardar} className="me-2">
            Guardar cambios
          </Button>
          <Button variant="danger" onClick={() => navigate("/administrador")}>
            Volver
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default CategoriaDestacada;
