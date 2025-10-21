import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { registro } from "../../helpers/queries.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import WhatsAppButton from "./categorias/funcion/WhatsAppButton.jsx";

const Registro = () => {
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [mostrarPasswordRepetida, setMostrarPasswordRepetida] = useState(false);

  const navegacion = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const verPassword = () => {
    setMostrarPassword((prev) => !prev);
  };

  const verPasswordRepetida = () => {
    setMostrarPasswordRepetida((prev) => !prev);
  };

  const crearCuenta = async (usuario) => {
    const respuesta = await registro(usuario);

    if (respuesta.status === 201) {
      Swal.fire({
        title: "Cuenta creada",
        text: `Bienvenido/a ${usuario.nombreUsuario}, ya puedes iniciar sesión!`,
        icon: "success",
        iconColor: "#1d3557",
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false,
        customClass: {
          popup: "rounded-4 shadow-lg",
        },
      });
      navegacion("/");
    } else {
      Swal.fire({
        title: "Error al registrarse",
        text: `Credenciales incorrectas`,
        icon: "error",
      });
    }
  };

  return (
    <>
      <section className="py-3 colorNavbarFooter text-light">
        <h1 className=" Montserrat text-center">CREA TU CUENTA</h1>
      </section>
      <section className="container-fluid my-5 row justify-content-center">
        <div className="col-12 col-md-5">
          <Form className="Montserrat" onSubmit={handleSubmit(crearCuenta)}>
            <Form.Group className="mb-3" controlId="nombreUsuario">
              <Form.Label>Nombre del usuario *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: juanperez01"
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
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ej: juanperez@mail.com"
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
              <Form.Label>Contraseña *</Form.Label>
              <div className="d-flex">
                <Form.Control
                  type={mostrarPassword ? "text" : "password"}
                  placeholder="Ingresa una contraseña"
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
                <Button variant="link" onClick={verPassword}>
                  {mostrarPassword ? (
                    <i className="bi bi-eye-slash text-dark"></i>
                  ) : (
                    <i className="bi bi-eye text-dark"></i>
                  )}
                </Button>
              </div>
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="passwordRepetida">
              <Form.Label>Repetir contraseña *</Form.Label>
              <div className="d-flex">
                <Form.Control
                  type={mostrarPasswordRepetida ? "text" : "password"}
                  placeholder="Ingresa nuevamente la contraseña"
                  maxLength={40}
                  {...register("passwordRepetida", {
                    required: "La contraseña debe ser ingresada nuevamente",
                    validate: (passwordRepetida) =>
                      passwordRepetida === watch("password") ||
                      "Las contraseñas deben coincidir",
                  })}
                />
                <Button variant="link" onClick={verPasswordRepetida}>
                  {mostrarPasswordRepetida ? (
                    <i className="bi bi-eye-slash text-dark"></i>
                  ) : (
                    <i className="bi bi-eye text-dark"></i>
                  )}
                </Button>
              </div>
              <Form.Text className="text-danger">
                {errors.passwordRepetida?.message}
              </Form.Text>
            </Form.Group>
            <div className="form-text my-3">
              Los campos (*) son obligatorios.
            </div>
            <Button variant="success" type="submit">
              Registrarse
            </Button>
          </Form>
        </div>
      </section>
      <WhatsAppButton />
    </>
  );
};

export default Registro;
