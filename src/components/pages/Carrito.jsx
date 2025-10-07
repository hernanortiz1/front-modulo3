import React from "react";
import { Button, Image } from "react-bootstrap";
import { NavLink } from "react-router";

const Carrito = () => {
  return (
    <>
      <section>
        <div className="container my-1">
          <div className="d-flex justify-content-between my-4">
            <NavLink
              to={"/"}
              className="text-decoration-none text-dark d-flex align-items-center"
            >
              <i className="bi bi-chevron-left fs-5"></i>Volver
            </NavLink>
            <h1 className="text-center Bodoni">Lannister</h1>
            <p className="d-flex align-items-center PagoSeguro mb-0">
              <i className="bi bi-lock fs-6"></i>Pago seguro
            </p>
          </div>
          <div className="row">
            <div className="col-lg-8 col-12 mb-4">
              <div className="mb-4 mx-2 mx-md-0">
                <h5 className="text-center text-md-start text-success">
                  <i className="bi bi-lightning-fill"></i> Producto Full
                </h5>
                <div className="row border border-dark bg-body-secondary p-3 mb-3 align-items-center">
                  <div className="col-2 p-0 d-flex justify-content-center">
                    <Image
                      src="https://acdn-us.mitiendanube.com/stores/002/186/544/products/rn21-5e815e9dace32e20ff16540263656000-640-0.jpg"
                      rounded
                      width={95}
                      height={95}
                    />
                  </div>
                  <div className="col-4 text-center">
                    <p className="m-0">
                      <strong>Remera levis negra</strong>
                    </p>
                    <p className="m-0">
                      Talle: <strong>XS</strong>
                    </p>
                    <p className="m-0">
                      Color: <strong>Negro</strong>
                    </p>
                  </div>
                  <div className="col-4 text-center">
                    <div>
                      <span>Cantidad</span>
                      <div className="d-flex justify-content-center align-items-center mt-2">
                        <Button variant="outline-secondary" size="sm">
                          -
                        </Button>
                        <span className="mx-2">1</span>
                        <Button variant="outline-secondary" size="sm">
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a
                        href="error404.html"
                        className="btn btn-danger text-decoration-none p-1 p-md-2 border"
                      >
                        <i className="bi bi-trash-fill text-light"></i>
                      </a>
                      <a
                        href="error404.html"
                        className="btn btn-success text-decoration-none p-1 p-md-2 border"
                      >
                        Comprar
                      </a>
                    </div>
                  </div>
                  <div className="col-2 text-center">
                    <span>$19,900</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 mx-2 mx-md-0">
                <h5 className="text-center text-md-start text-success">
                  <i className="bi bi-lightning-fill"></i> Producto tienda
                  Lannister
                </h5>
                <div className="row border border-dark bg-body-secondary p-3 mb-3 align-items-center">
                  <div className="col-2 p-0 d-flex justify-content-center">
                    <Image
                      src="https://acdn-us.mitiendanube.com/stores/002/186/544/products/rn21-5e815e9dace32e20ff16540263656000-640-0.jpg"
                      rounded
                      width={95}
                      height={95}
                    />
                  </div>
                  <div className="col-4 text-center">
                    <p className="m-0">
                      <strong>Remera levis negra</strong>
                    </p>
                    <p className="m-0">
                      Talle: <strong>XS</strong>
                    </p>
                    <p className="m-0">
                      Color: <strong>Negro</strong>
                    </p>
                  </div>
                  <div className="col-4 text-center">
                    <div>
                      <span>Cantidad</span>
                      <div className="d-flex justify-content-center align-items-center mt-2">
                        <Button variant="outline-secondary" size="sm">
                          -
                        </Button>
                        <span className="mx-2">1</span>
                        <Button variant="outline-secondary" size="sm">
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a
                        href="error404.html"
                        className="btn btn-danger text-decoration-none p-1 p-md-2 border"
                      >
                        <i className="bi bi-trash-fill text-light"></i>
                      </a>
                      <a
                        href="error404.html"
                        className="btn btn-success text-decoration-none p-1 p-md-2 border"
                      >
                        Comprar
                      </a>
                    </div>
                  </div>
                  <div className="col-2 text-center">
                    <span>$19,900</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 mx-2 mx-md-0">
                <h5 className="text-center text-md-start text-success">
                  <i className="bi bi-lightning-fill"></i> Producto Full
                </h5>
                <div className="row border border-dark bg-body-secondary p-3 mb-3 align-items-center">
                  <div className="col-2 p-0 d-flex justify-content-center">
                    <Image
                      src="https://acdn-us.mitiendanube.com/stores/002/186/544/products/rn21-5e815e9dace32e20ff16540263656000-640-0.jpg"
                      rounded
                      width={95}
                      height={95}
                    />
                  </div>
                  <div className="col-4 text-center">
                    <p className="m-0">
                      <strong>Remera levis negra</strong>
                    </p>
                    <p className="m-0">
                      Talle: <strong>XS</strong>
                    </p>
                    <p className="m-0">
                      Color: <strong>Negro</strong>
                    </p>
                  </div>
                  <div className="col-4 text-center">
                    <div>
                      <span>Cantidad</span>
                      <div className="d-flex justify-content-center align-items-center mt-2">
                        <Button variant="outline-secondary" size="sm">
                          -
                        </Button>
                        <span className="mx-2">1</span>
                        <Button variant="outline-secondary" size="sm">
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a
                        href="error404.html"
                        className="btn btn-danger text-decoration-none p-1 p-md-2 border"
                      >
                        <i className="bi bi-trash-fill text-light"></i>
                      </a>
                      <a
                        href="error404.html"
                        className="btn btn-success text-decoration-none p-1 p-md-2 border"
                      >
                        Comprar
                      </a>
                    </div>
                  </div>
                  <div className="col-2 text-center">
                    <span>$19,900</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 mx-2 mx-md-0">
                <h5 className="text-center text-md-start text-success">
                  <i className="bi bi-lightning-fill"></i> Producto Full
                </h5>
                <div className="row border border-dark bg-body-secondary p-3 mb-3 align-items-center">
                  <div className="col-2 p-0 d-flex justify-content-center">
                    <Image
                      src="https://acdn-us.mitiendanube.com/stores/002/186/544/products/rn21-5e815e9dace32e20ff16540263656000-640-0.jpg"
                      rounded
                      width={95}
                      height={95}
                    />
                  </div>
                  <div className="col-4 text-center">
                    <p className="m-0">
                      <strong>Remera levis negra</strong>
                    </p>
                    <p className="m-0">
                      Talle: <strong>XS</strong>
                    </p>
                    <p className="m-0">
                      Color: <strong>Negro</strong>
                    </p>
                  </div>
                  <div className="col-4 text-center">
                    <div>
                      <span>Cantidad</span>
                      <div className="d-flex justify-content-center align-items-center mt-2">
                        <Button variant="outline-secondary" size="sm">
                          -
                        </Button>
                        <span className="mx-2">1</span>
                        <Button variant="outline-secondary" size="sm">
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a
                        href="error404.html"
                        className="btn btn-danger text-decoration-none p-1 p-md-2 border"
                      >
                        <i className="bi bi-trash-fill text-light"></i>
                      </a>
                      <a
                        href="error404.html"
                        className="btn btn-success text-decoration-none p-1 p-md-2 border"
                      >
                        Comprar
                      </a>
                    </div>
                  </div>
                  <div className="col-2 text-center">
                    <span>$19,900</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="total-compra">
                <h5>Resumen de Compra</h5>
                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total de productos:</span>
                    <span>$165,900</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Costo de envío:</span>
                    <span className="text-success">Gratis</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between text-primary">
                    <strong>Total:</strong>
                    <strong>$165,900</strong>
                  </li>
                </ul>
                <a
                  href="./error404.html"
                  className="btn btn-success w-100 mb-2"
                >
                  Comprar
                </a>
                <NavLink
                  to={'/'}
                  className="btn btn-outline-dark text-decoration-underline w-100"
                >
                  Seguir comprando
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carrito;
