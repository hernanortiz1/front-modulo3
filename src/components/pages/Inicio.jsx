import Carousel from "react-bootstrap/Carousel";
import CardRopa from "../pages/ropa/CardRopa";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";
import descuento_uno from "../../assets/descuento_uno.avif";
import descuento_dos from "../../assets/descuento_dos.avif";
import descuento_tres from "../../assets/descuento_tres.avif";
const Inicio = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={descuento_uno}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={descuento_dos}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={descuento_tres}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <Container className="my-4">
        <Row>
          <CardRopa />
        </Row>
        <Row className="m-4">
          {/* TARJETAS */}
          <Col className="imagen-container">
            <img
              src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtaXNhc3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="w-100"
            />
            <Link className="texto-sobre-imagen">PARTE SUPERIOR</Link>
          </Col>
          <Col className="imagen-container">
            <img
              src="https://images.unsplash.com/photo-1548883354-7622d03aca27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhbnRhbCVDMyVCM258ZW58MHx8MHx8fDA%3D"
              alt=""
              className="w-100"
            />
            <Link className="texto-sobre-imagen">PARTE INFERIOR</Link>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="imagen-container">
            <img
              src="https://images.unsplash.com/photo-1614495039153-e9cd13240469?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <Link className="texto-sobre-imagen">REMERAS Y CHOMBAS</Link>
          </Col>
          <Col className="imagen-container">
            <img src="https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Link className="texto-sobre-imagen">CAMISAS</Link>
          </Col>
          <Col className="imagen-container">
            <Link>
              <img src="https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </Link>
            <Link className="texto-sobre-imagen">PANTALONES</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Inicio;
