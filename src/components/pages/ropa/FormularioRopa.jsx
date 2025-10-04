import { Form, Button } from "react-bootstrap";
import React from "react";
import { useForm } from "react-hook-form";

const FormularioRopa = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    alert("Producto creado");
  };

  return (
    <section className="container">
      <h1 className="display-4 mt-5">Crear Producto</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProducto">
          <Form.Label>Nombre producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Remera Levis"
            {...register("nombreProducto", {
              required: "El nombre del producto es un dato obligatorio",
              minLength: {
                value: 3,
                message:
                  "El nombre del producto debe tener almenos 3 caracteres",
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
            step="0.01"
            {...register("precio", {
              required: "El precio es un valor obligatorio",
              min: {
                value: 100,
                message:
                  "El precio minimo del producto debe ser de almenos $100",
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
          <Form.Control type="number" placeholder="Ej: 5" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripción*</Form.Label>
          <Form.Control
            type="text"
            minLength={10}
            maxLength={500}
            placeholder="Ej: Remera Levis Estampa Original Manga Corta Logo Rojo Algodon"
            as="textarea"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFechaUltimoControlStock">
          <Form.Label>fechaUltimoControlStock*</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control type="file" accept="image/*" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTalle">
          <Form.Label>Talle*</Form.Label>
          <Form.Select placeholder="Debe seleccionar un talle">
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
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColorProducto">
          <Form.Label>Color del producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Negro"
            minLength={1}
            maxLength={20}
          />
        </Form.Group>
        <Button type="submit" variant="success">
          Crear producto
        </Button>
      </Form>
    </section>
  );
};

export default FormularioRopa;
