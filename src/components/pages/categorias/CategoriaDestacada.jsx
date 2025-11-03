import React, { useState, useEffect } from "react";
import { Container, Form, Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import {
  obtenerConfiguracion,
  guardarConfiguracion,
} from "../../../helpers/queries";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

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

  const [seleccionadas, setSeleccionadas] = useState([]);
  const [errorCategorias, setErrorCategorias] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const cargarDatos = async () => {
      const respuesta = await obtenerConfiguracion();
      if (respuesta?.ok) {
        const data = await respuesta.json();
        setValue("tituloCategoriaDestacada", data.titulo || "");
        setSeleccionadas(data.categoriasSeleccionadas || []);
      }
    };
    cargarDatos();
  }, [setValue]);

  const categoriasCheck = (categoria) => {
    setSeleccionadas((prev) =>
      prev.includes(categoria)
        ? prev.filter((cat) => cat !== categoria)
        : [...prev, categoria]
    );
  };

  const guardarCategoriasCheck = async (data) => {
    if (seleccionadas.length === 0) {
      setErrorCategorias("Debe seleccionar al menos una categoria destacada");
      return;
    } else {
      setErrorCategorias("");
    }
    const configuracion = {
      titulo: data.tituloCategoriaDestacada,
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
        <Form onSubmit={handleSubmit(guardarCategoriasCheck)}>
          <div className="mb-4 text-light">
            <h4 className="text-center">Título de categoría</h4>

            <Form.Control
              type="text"
              required
              placeholder="Ingrese título"
              maxLength={100}
              {...register("tituloCategoriaDestacada", {
                required: "El titulo un dato obligatorio",
                minLength: {
                  value: 3,
                  message: "El titulo debe tener 3 caracteres como minimo",
                },
                maxLength: {
                  value: 100,
                  message: "El titulo debe tener 100 caracteres como máximo",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.tituloCategoriaDestacada?.message}
            </Form.Text>
          </div>

          <h4 className="text-center mb-4 text-light">Categorías destacadas</h4>
          <div className="table-responsive rounded-3 overflow-hidden">
            <Table className="text-center align-middle mb-0 table-bordered">
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
                        onChange={() => categoriasCheck(cat)}
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </div>
          <Form.Text className="text-danger">
            {errorCategorias}
          </Form.Text>

          <div className="text-center mt-4">
            <Button type="submit" className="me-2">
              Guardar cambios
            </Button>
            <Button variant="danger" onClick={() => navigate("/administrador")}>
              Volver
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default CategoriaDestacada;
