import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { NavLink } from "react-router";
import { useCart } from "../../helpers/CartContext";
import Swal from "sweetalert2";
import { comprarMultiplesProductos } from "../../helpers/queries";
import WhatsAppButton from "./categorias/funcion/WhatsAppButton";

const Carrito = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
    clearCart,
  } = useCart();

  const totalPrice = getTotalPrice();
  const displayTotal = typeof totalPrice === "number" ? totalPrice : 0;

  const [animationStage, setAnimationStage] = useState("idle");

  const handleBuy = async () => {
    Swal.fire({
      title: "¿Estas seguro de esta compra?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#23e05cff",
      cancelButtonColor: "#d33",
      confirmButtonText: "Comprar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const productosSinStock = cartItems.filter(
          (item) => item.quantity > item.stock
        );

        if (productosSinStock.length > 1) {
          Swal.fire({
            title: "Stock insuficiente",
            text: `Algunos productos no tienen stock suficiente`,
            icon: "error",
            confirmButtonColor: "#3085d6",
          });
          return;
        }

        try {
          const compraExitosa = await comprarMultiplesProductos(cartItems);

          if (compraExitosa) {
            setAnimationStage("entering");

            setTimeout(() => {
              setAnimationStage("exiting");
            }, 2000);

            setTimeout(() => {
              setAnimationStage("idle");
              clearCart();

              Swal.fire({
                title: "¡Gracias por su compra!",
                text: `Su compra fue realizada exitosamente`,
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });
            }, 4000);
          } else {
            throw new Error("Error en alguna de las compras");
          }
        } catch (error) {
          console.error("Error en la compra:", error);
          Swal.fire({
            title: "Error en la compra",
            text: "No se pudo procesar tu compra. Intenta nuevamente.",
            icon: "error",
            confirmButtonColor: "#3085d6",
          });
        }
      }
    });
  };

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
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12 mb-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-5">
                  <h4>Tu carrito está vacío</h4>
                  <NavLink to="/" className="btn btn-primary mt-3">
                    Seguir comprando
                  </NavLink>
                </div>
              ) : (
                cartItems.map((item, index) => (
                  <div
                    key={`${item._id}-${item.size}-${index}`}
                    className="mb-4 mx-2 mx-md-0"
                  >
                    <h5 className="text-center text-md-start text-success">
                      <i className="bi bi-lightning-fill"></i>
                      {item.vendor || "Producto tienda Lannister"}
                    </h5>
                    <div className="row border border-dark bg-body-secondary p-3 mb-3 align-items-center">
                      <div className="col-2 p-0 d-flex justify-content-center">
                        <Image
                          src={item.imagen}
                          rounded
                          width={80}
                          height={80}
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/95x95?text=Imagen+No+Disponible";
                          }}
                        />
                      </div>
                      <div className="col-4 text-center">
                        <p className="m-0">
                          <strong>{item.nombre}</strong>
                        </p>
                        <p className="m-0">
                          Talle: <strong>{item.size || "Único"}</strong>
                        </p>
                        <p className="m-0">
                          Color:{" "}
                          <strong>{item.color || "No especificado"}</strong>
                        </p>
                      </div>
                      <div className="col-4 text-center">
                        <div>
                          <span>Cantidad</span>
                          <div className="d-flex justify-content-center align-items-center mt-2">
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              onClick={() =>
                                decreaseQuantity(item._id, item.size)
                              }
                            >
                              -
                            </Button>
                            <span className="mx-2">{item.quantity}</span>
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              onClick={() =>
                                increaseQuantity(item._id, item.isze)
                              }
                            >
                              +
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button
                            onClick={() => removeFromCart(item._id, item.size)}
                            className="btn btn-danger text-decoration-none p-1 p-md-2 border me-2"
                          >
                            <i className="bi bi-trash-fill text-light"></i>
                          </Button>
                        </div>
                      </div>
                      <div className="col-2 text-center">
                        <span>
                          ${(item.precio * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="col-lg-4 col-12">
                <div className="total-compra">
                  <h5>Resumen de Compra</h5>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item d-flex justify-content-between">
                      <span>Total de productos:</span>
                      <span>${displayTotal.toLocaleString()}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <span>Costo de envío:</span>
                      <span className="text-success">Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between text-primary">
                      <strong>Total:</strong>
                      <strong>${displayTotal.toLocaleString()}</strong>
                    </li>
                  </ul>
                  <NavLink
                    className="btn btn-success w-100 mb-2"
                    onClick={handleBuy}
                  >
                    Comprar
                  </NavLink>
                  <NavLink to={"/"} className="btn btn-outline-dark w-100">
                    Seguir comprando
                  </NavLink>
                </div>
              </div>
            )}
            {animationStage !== "idle" && (
              <div className="buy-overlay">
                <div className={`buy-overlay ${animationStage}`}>
                  <div className="buy-box">📦</div>
                </div>
              </div>
            )}
          </div>
        </div>
        <WhatsAppButton />
      </section>
    </>
  );
};

export default Carrito;
