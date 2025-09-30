import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="py-3 colorNavbarFooter Montserrat">
      <div className="container">
        <Link to={"/"} className="text-decoration-none">
          <h2 className="text-center text-lg-start text-light mb-4 Bodoni">
            Lannister
          </h2>
        </Link>
        <div className="row text-center text-lg-start">
          <div className="col-12 col-lg-3 col-md-6">
            <h5 className="mb-2 Montserrat text-light">Destacados</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to={"/error404"}
                  className="link-light link-underline-opacity-0"
                >
                  Promociones
                </Link>
              </li>
              <li>
                <Link
                  to={"/error404"}
                  className="link-light link-underline-opacity-0"
                >
                  Venta mayorista
                </Link>
              </li>
              <li>
                <Link
                  to={"/error404"}
                  className="link-light link-underline-opacity-0"
                >
                  Venta corporativa
                </Link>
              </li>
              <li>
                <Link
                  to={"/error404"}
                  className="link-light link-underline-opacity-0"
                >
                   Formas de pago
                </Link>
              </li>
            
            </ul>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <h5 className="Montserrat text-light">Categorías</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to={"/remeras-chombas"}
                  className="link-light link-underline-opacity-0"
                >
                  Remeras y Chombas
                </Link>
              </li>
              <li>
                <Link
                  to={"/abrigos-camperas"}
                  className="link-light link-underline-opacity-0"
                >
                  Abrigos y camperas
                </Link>
              </li>
              <li>
                <Link
                  to={"/camisas"}
                  className="link-light link-underline-opacity-0"
                >
                  Camisas
                </Link>
              </li>
              <li>
                <Link
                  to={"/pantalones"}
                  className="link-light link-underline-opacity-0"
                >
                  Pantalones
                </Link>
              </li>
              <li>
                <Link
                  to={"/anteojos"}
                  className="link-light link-underline-opacity-0"
                >
                  Anteojos de sol
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <h5 className="Montserrat text-light">Soporte</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to={"/contacto"}
                  className="link-light link-underline-opacity-0"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  to={"/error404"}
                  className="link-light link-underline-opacity-0"
                >
                  Cambios y devoluciones
                </Link>
              </li>
              <li>
                <Link
                  to={"/error404"}
                  className="link-light link-underline-opacity-0"
                >
                  Métodos de envío
                </Link>
              </li>
              
            </ul>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <h5 className="Montserrat text-light">Legales</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to={"/error404"}
                  className="link-light link-underline-opacity-0"
                >
                  Políticas de privacidad
                </Link>
              </li>
              <li>
                <Link
                  to={"/error404"}
                  className="link-light link-underline-opacity-0"
                >
                 Libro de quejas
                </Link>
              </li>
              <li>
                <Link
                  to={"/error404"}
                  className="link-light link-underline-opacity-0"
                >
                  Términos y condiciones
                </Link>
              </li>

              <li className="mt-5">
                <p className="text-light">¡Mantente informado!</p>
              </li>
              <li className="d-flex justify-content-center justify-content-lg-start gap-3">
                <Link
                  to={"/error404"}
                  className="link-light link-underline-opacity-0"
                >
                  <i className="text-light bi bi-facebook fs-3"></i>
                </Link>

                <Link
                  to={"/error404"}
                  className="link-light link-underline-opacity-0"
                >
                  <i className="text-light bi bi-twitter-x fs-3"></i>
                </Link>

                <Link
                  to={"/error404"}
                  className="link-light link-underline-opacity-0"
                >
                  <i className="text-light bi bi-instagram fs-3"></i>
                </Link>

                <Link
                  to={"/error404"}
                  className="link-light link-underline-opacity-0"
                >
                  <i className="text-light bi bi-tiktok fs-3"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
