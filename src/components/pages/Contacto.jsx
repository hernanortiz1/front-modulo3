import { Button, Col, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import React from "react";
import WhatsAppButton from "./categorias/funcion/WhatsAppButton";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const agregarDatos = (datos) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: datos.nombreYapellido,
          email: datos.email,
          phone: datos.telefono,
          message: datos.consulta,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        Swal.fire({
          title: "Mensaje enviado con éxito",
          text: "En breve responderemos tu consulta",
          icon: "success",
        });
        reset();
      })
      .catch(() => {
        Swal.fire({
          title: "Error al enviar",
          text: "Intenta nuevamente más tarde",
          icon: "error",
        });
      });
  };

  return (
    <>
      <section className="py-3 colorNavbarFooter text-light ">
        <h1 className="text-center Montserrat">Contacto</h1>
      </section>

      <section className="container Montserrat shadowContacto rounded-3 border my-5 bg-light">
        <div className="row">
          <article className="col-12 col-md-6 my-4">
            <Form onSubmit={handleSubmit(agregarDatos)}>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Nombre y apellido *</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingrese nombre"
                    maxLength={80}
                    {...register("nombreYapellido", {
                      required: "El nombre un dato obligatorio",
                      minLength: {
                        value: 6,
                        message:
                          "El nombre debe tener 6 caracteres como minimo ",
                      },
                      maxLength: {
                        value: 80,
                        message:
                          "El nombre debe tener 80 caracteres como máximo",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.nombreYapellido?.message}
                  </Form.Text>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese email"
                    required
                    maxLength={100}
                    {...register("email", {
                      required: "El Email un dato obligatorio",

                      pattern: {
                        value:
                          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                        message: "Email inválido",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.email?.message}
                  </Form.Text>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label>Teléfono *</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Ingrese teléfono"
                    required
                    maxLength={15}
                    {...register("telefono", {
                      required: "El teléfono es obligatorio",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "El campo solo admite números",
                      },
                      minLength: {
                        value: 7,
                        message: "Debe tener al menos 7 dígitos",
                      },
                      maxLength: {
                        value: 15,
                        message: "No debe superar los 15 dígitos",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.telefono?.message}
                  </Form.Text>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="consulta">
                  <Form.Label>Consulta *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Ingrese consulta"
                    required
                    maxLength={150}
                    {...register("consulta", {
                      required: "La consulta es un dato obligatorio",
                      minLength: {
                        value: 10,
                        message:
                          "La consulta deber tener 10 caracteres como minimo ",
                      },
                      maxLength: {
                        value: 150,
                        message:
                          "La consulta deber tener 150 caracteres como máximo",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.consulta?.message}
                  </Form.Text>
                </Form.Group>
              </Row>

              <div className="form-text my-3">
                Los campos (*) son obligatorios.
              </div>

              <Button type="submit" className="btn btn-primary fs-5">
                Enviar
              </Button>
            </Form>
          </article>

          <article className="col-12 col-md-6 my-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.106067949496!2d-65.20974192528038!3d-26.836578490025605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses!2sar!4v1740442348659!5m2!1ses!2sar"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-100 h-100"
              title="Mapa de contacto"
            ></iframe>
          </article>
        </div>
        <WhatsAppButton />
      </section>
    </>
  );
};

export default Contacto;
