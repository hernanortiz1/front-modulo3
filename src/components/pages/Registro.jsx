import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Registro = () => {

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    return (
        <>
        <section className="py-3 colorNavbarFooter text-light">
        <h1 className=" Montserrat text-center">CREA TU CUENTA</h1>
      </section>
      <section className="container-fluid my-5">
        <Form className="Montserrat" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nombreUsuario">
              <Form.Label>Nombre del usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: juanperez01"
                required
                maxLength={100}
                {...register("nombreUsuario", {
                  required: "El nombre del usuario es un dato obligatorio",
              minLength: {
                value: 3,
                message:
                  "El nombre del usuario debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 100,
                message:
                  "El nombre del usuario debe tener como maximo 100 caracteres",
              },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreUsuario?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ej: juanperez@mail.com"
                required
                maxLength={100}
                {...register("email", {
                  required: "El email es un dato obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "El email debe tener un formato valido, por ejemplo juanperez@mail.com",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa una contraseña"
                required
                maxLength={40}
                {...register("password", {
                  required: "La contraseña es un dato obligatorio",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                    message:
                      "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="success" type="submit">
              Registrarse
            </Button>
          </Form>
      </section>
        </>
    );
};

export default Registro;
