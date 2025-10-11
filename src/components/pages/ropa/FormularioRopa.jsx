import React from "react";
import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  crearProducto,
  editarProducto,
  obtenerProductosPorId,
} from "../../../helpers/queries";
import "./FormularioProducto.css";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";
import HashLoader from "react-spinners/HashLoader";

const FormularioRopa = ({ titulo }) => {
  const [imagenActual, setImagenActual] = useState("");
  const [preview, setPreview] = useState("");
  const [cargando, setCargando] = useState(false);

  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    const obtenerProducto = async () => {
      if (titulo === "Editar producto") {
        setCargando(true);
        const respuesta = await obtenerProductosPorId(id);
        if (respuesta.status === 200) {
          const productoBuscado = await respuesta.json();
          setValue("nombreProducto", productoBuscado.nombreProducto);
          setValue("precio", productoBuscado.precio);
          setValue("categoria", productoBuscado.categoria);
          setValue("talle", productoBuscado.talle);
          setValue("stock", productoBuscado.stock);
          setValue("descripcion", productoBuscado.descripcion);
          setValue(
            "fechaUltimoControlStock",
            productoBuscado.fechaUltimoControlStock
              ? productoBuscado.fechaUltimoControlStock.slice(0, 10)
              : ""
          );
          setValue("color", productoBuscado.color);
          setImagenActual(productoBuscado.imagen);
        }
        setTimeout(() => setCargando(false), 500);
      }
    };
    obtenerProducto();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
    setValue,
  } = useForm();

  const onSubmit = async (producto) => {
    const productoMejorado = {
      ...producto,
      imagen: producto.imagen[0],
    };
    if (titulo === "Crear producto") {
      const respuesta = await crearProducto(productoMejorado);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Producto creado",
          text: `El producto ${producto.nombreProducto} fue creado correctamente`,
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            reset();
            navegacion("/administrador");
          }
        });
      } else {
        const datosErroneos = await respuesta.json();
        Swal.fire({
          title: "Ocurrio un error",
          text: `El producto ${producto.nombreProducto} no pudo ser creado, ${datosErroneos[0].msg}`,
          icon: "error",
        });
      }
    } else {
      const respuesta = await editarProducto(productoMejorado, id);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Producto editado",
          text: `El producto ${producto.nombreProducto} fue editado correctamente`,
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            reset();
            navegacion("/administrador");
          }
        });
      } else {
        const datosErroneos = await respuesta.json();
        Swal.fire({
          title: "Ocurrio un error",
          text: `El producto ${producto.nombreProducto} no pudo ser creado, ${datosErroneos[0].msg}`,
          icon: "error",
        });
      }
    }
  };

  return (
    <section className="container">
      {cargando ? (
        <div className="d-flex justify-content-center my-5">
          <HashLoader size={80} color="#1d3557" />
        </div>
      ) : (
        <>
          <h1 className="display-5 mt-5 Montserrat">{titulo}</h1>
          <hr />
          <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formNombreProducto">
              <Form.Label>Nombre producto*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Remera Levis"
                maxLength={100}
                {...register("nombreProducto", {
                  required: "El nombre del producto es un dato obligatorio",
                  minLength: {
                    value: 3,
                    message:
                      "El nombre del producto debe tener al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 100,
                    message:
                      "El nombre del producto debe tener como maximo 100 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreProducto?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrecio">
              <Form.Label>Precio*</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: 10000"
                max={1000000}
                step="0.01"
                {...register("precio", {
                  required: "El precio es un valor obligatorio",
                  min: {
                    value: 100,
                    message:
                      "El precio minimo del producto debe ser de al menos $100",
                  },
                  max: {
                    value: 1000000,
                    message:
                      "El precio maximo de un producto debe ser de hasta $1000000",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.precio?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCategoria">
              <Form.Label>Categoría*</Form.Label>
              <Form.Select
                {...register("categoria", {
                  required: "Debe seleccionar una categoria",
                })}
              >
                <option value="">Seleccione una opcion</option>
                <option value="Remeras y chombas">Remeras y chombas</option>
                <option value="Abrigos y camperas">Abrigos y camperas</option>
                <option value="Sweaters y buzos">Sweaters y buzos</option>
                <option value="Camisas">Camisas</option>
                <option value="Bermudas">Bermudas</option>
                <option value="Pantalones">Pantalones</option>
                <option value="Shorts de Baño">Shorts de Baño</option>
                <option value="Anteojos de sol">Anteojos de sol</option>
                <option value="Gorras">Gorras</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.categoria?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStock">
              <Form.Label>Disponibilidad de Stock*</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: 5"
                max={5000}
                {...register("stock", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "El campo solo admite números",
                  },
                  min: {
                    value: 1,
                    message: "Como minimo es 1 stock (un producto disponible)",
                  },
                  max: {
                    value: 5000,
                    message:
                      "La cantidad de stock debe tener entre 1 y 5000 productos",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.stock?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescripcion">
              <Form.Label>Descripción*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Remera Levis Estampa Original Manga Corta Logo Rojo Algodon"
                as="textarea"
                rows={2}
                maxLength={500}
                {...register("descripcion", {
                  required: "La descripción es un dato obligatorio",
                  minLength: {
                    value: 10,
                    message: "La descrición debe tener al menos 10 caracteres",
                  },
                  maxLength: {
                    value: 500,
                    message:
                      "La descrición debe tener como máximo 500 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.descripcion?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formFechaUltimoControlStock"
            >
              <Form.Label>fechaUltimoControlStock*</Form.Label>
              <Form.Control
                type="date"
                {...register("fechaUltimoControlStock", {
                  required: "Este campo es obligatorio",
                  validate: (value) => {
                    const hoy = new Date();
                    const fechaIngresada = new Date(value);
                    hoy.setHours(0, 0, 0, 0);
                    fechaIngresada.setHours(0, 0, 0, 0);
                    return (
                      fechaIngresada <= hoy || "La fecha no puede ser futura"
                    );
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.fechaUltimoControlStock?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImagen">
              <Form.Label>Imagen URL*</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                {...register("imagen", {
                  required:
                    titulo === "Crear producto"
                      ? "La imagen es obligatoria"
                      : false,
                  validate: {
                    fileSize: (files) =>
                      !files[0] ||
                      files[0].size <= 2 * 1024 * 1024 ||
                      "La imagen no debe superar los 2MB.",
                  },
                })}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setPreview(URL.createObjectURL(file));
                  } else {
                    setPreview("");
                  }
                }}
              />
              {(preview || imagenActual) && (
                <div className="mb-2 position-relative d-inline-block mt-3">
                  <img
                    className="rounded-3 img-preview"
                    src={preview || imagenActual}
                    alt="Imagen"
                  />
                  <Button
                    variant="light"
                    size="sm"
                    className="p-0 d-flex align-items-center justify-content-center shadow btn-img-preview"
                    onClick={() => {
                      setPreview("");
                      setImagenActual("");
                      resetField("imagen");
                    }}
                  >
                    <i className="bi bi-x fs-5 text-danger"></i>
                  </Button>
                </div>
              )}
              <Form.Text className="text-danger">
                {errors.imagen?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTalle">
              <Form.Label>Talle*</Form.Label>
              <Form.Select
                {...register("talle", {
                  required: "Debe seleccionar un talle",
                })}
              >
                <option value="">Seleccione una opcion</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
                <option value="XXXL">XXXL</option>
                <option value="Único">Único</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.talle?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formColorProducto">
              <Form.Label>Color del producto*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Negro"
                maxLength={20}
                {...register("color", {
                  required: "El color del producto es un dato obligatorio",
                  pattern: {
                    value: /^[^\d]+$/,
                    message: "No se permiten números en el nombre del color",
                  },

                  minLength: {
                    value: 3,
                    message:
                      "El color del producto debe tener al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message:
                      "El color del producto debe tener como maximo 20 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.color?.message}
              </Form.Text>
            </Form.Group>
            <Button type="submit" variant="success">
              {titulo}
            </Button>
            <Button
              variant="danger"
              className="mx-2"
              onClick={() => navegacion("/administrador")}
            >
              Cancelar
            </Button>
          </Form>
        </>
      )}
    </section>
  );
};

export default FormularioRopa;
