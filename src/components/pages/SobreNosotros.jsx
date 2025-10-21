import { Card } from "react-bootstrap";
import Perfil from "../../assets/sobreNosotros/imagenPerfil.webp";
import React from "react";
import BtnScroll from "./categorias/funcion/BtnScroll";
import WhatsAppButton from "./categorias/funcion/WhatsAppButton";
import { Container, Row, Col } from "react-bootstrap";
import hernan from "../../assets/fotosEquipo/hernan.jpg";
import juancho from "../../assets/fotosEquipo/juancho.jpg";
import lucas from "../../assets/fotosEquipo/lucas.jpg";
import joaquin from "../../assets/fotosEquipo/joaquin.jpg";

const SobreNosotros = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <Container className="hero-content">
          <h1 className="text-center Montserrat display-4 fw-bold mb-2">
            Sobre Nosotros
          </h1>
          <p className="text-center hero-subtitle fs-5">
            Cuatro desarrolladores. Una visión.
          </p>
        </Container>
      </div>
      <Container className="my-5">
        <Row className="g-4">
          <Col xs={12}>
            <Card className="info-card border-0 shadow-sm hover-lift border-left-accent">
              <Card.Body className="p-4">
                <h2 className="Montserrat mb-3 card-title-color">
                  Cuatro desarrolladores. Una visión.
                </h2>
                <p className="text-muted mb-0 lh-lg">
                  En <strong className="brand-color">Lannister</strong>,
                  combinamos tecnología y estilo para crear una tienda pensada
                  para el hombre moderno. Somos cuatro devs apasionados por el
                  diseño, la moda y la experiencia digital. Lo que empezó como
                  un proyecto entre colegas, hoy es una marca que busca
                  redefinir cómo se ve y se siente la ropa masculina.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="info-card border-0 shadow-sm h-100 hover-lift border-top-accent">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-circle me-3">👔</div>
                  <h2 className="Montserrat mb-0 card-title-color">
                    Más que prendas, actitud
                  </h2>
                </div>
                <p className="text-muted lh-lg">
                  Cada prenda que ofrecemos está pensada para hombres que
                  valoran la elegancia, la comodidad y los detalles. En{" "}
                  <strong className="brand-color">Lannister</strong>, no
                  seguimos tendencias pasajeras: apostamos por un estilo
                  atemporal, versátil y auténtico.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="info-card border-0 shadow-sm h-100 hover-lift border-top-accent">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-circle me-3">💻</div>
                  <h2 className="Montserrat mb-0 card-title-color">
                    Tecnología + Estilo
                  </h2>
                </div>
                <p className="text-muted lh-lg">
                  Como desarrolladores, cuidamos cada aspecto de la experiencia
                  digital. Queremos que comprar ropa sea tan intuitivo como
                  vestirse bien. Por eso, trabajamos en una plataforma rápida,
                  segura y pensada para que encuentres lo que buscás sin perder
                  tiempo.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12}>
            <Card className="trust-card border-0 shadow-sm border-left-accent">
              <Card.Body className="p-4">
                <h2 className="Montserrat mb-4 text-center card-title-color">
                  ¿Por qué confiar en Lannister?
                </h2>
                <Row className="g-3 mb-3">
                  <Col md={4}>
                    <div className="d-flex align-items-start">
                      <span className="check-icon me-3 fs-4">✓</span>
                      <p className="mb-0 text-muted">
                        Somos usuarios antes que vendedores
                      </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="d-flex align-items-start">
                      <span className="check-icon me-3 fs-4">✓</span>
                      <p className="mb-0 text-muted">
                        Creemos en la calidad antes que en la cantidad
                      </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="d-flex align-items-start">
                      <span className="check-icon me-3 fs-4">✓</span>
                      <p className="mb-0 text-muted">
                        Cada prenda fue seleccionada con criterio y propósito
                      </p>
                    </div>
                  </Col>
                </Row>
                <p className="text-center text-muted mb-0 mt-4 fst-italic">
                  Gracias por formar parte de esta comunidad. Estamos acá para
                  ayudarte a vestir mejor, sentirte mejor y mostrar tu mejor
                  versión.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <section className="equipo-section">
        <Container>
          <div className="text-center text-white mb-5">
            <h2 className="Bodoni display-3 mb-3">Lannister</h2>
            <h3 className="Montserrat fs-4 fw-light">
              Conocé al equipo detrás de Lannister
            </h3>
          </div>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="dev-card border-0 shadow-lg text-center h-100 hover-lift">
                <Card.Body className="p-4">
                  <div className="dev-image-wrapper mb-3 mx-auto">
                    <img
                      src={lucas}
                      className="dev-image"
                      alt="Figueroa Lucas"
                    />
                  </div>
                  <h3 className="Montserrat fs-5 fw-bold mb-2 dev-name">
                    Figueroa Lucas
                  </h3>
                  <p className="text-muted small mb-0">Full Stack Developer</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="dev-card border-0 shadow-lg text-center h-100 hover-lift">
                <Card.Body className="p-4">
                  <div className="dev-image-wrapper mb-3 mx-auto">
                    <img
                      src={hernan}
                      className="dev-image"
                      alt="Ortiz Hernan"
                    />
                  </div>
                  <h3 className="Montserrat fs-5 fw-bold mb-2 dev-name">
                    Ortiz Hernan
                  </h3>
                  <p className="text-muted small mb-0">UX/UI Designer</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="dev-card border-0 shadow-lg text-center h-100 hover-lift">
                <Card.Body className="p-4">
                  <div className="dev-image-wrapper mb-3 mx-auto">
                    <img
                      src={juancho}
                      className="dev-image"
                      alt="Blanco Juan"
                    />
                  </div>
                  <h3 className="Montserrat fs-5 fw-bold mb-2 dev-name">
                    Blanco Juan
                  </h3>
                  <p className="text-muted small mb-0">Backend Specialist</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="dev-card border-0 shadow-lg text-center h-100 hover-lift">
                <Card.Body className="p-4">
                  <div className="dev-image-wrapper mb-3 mx-auto">
                    <img
                      src={joaquin}
                      className="dev-image"
                      alt="Barrojo Ignacio"
                    />
                  </div>
                  <h3 className="Montserrat fs-5 fw-bold mb-2 dev-name">
                    Barrojo Ignacio
                  </h3>
                  <p className="text-muted small mb-0">Frontend Developer</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <BtnScroll />
      <WhatsAppButton />
    </>
  );
};

export default SobreNosotros;
