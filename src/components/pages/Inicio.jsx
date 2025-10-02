import Carousel from "react-bootstrap/Carousel";
import CardRopa from "../pages/ropa/CardRopa";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";
import BannerDesktop_uno from "../../assets/BannerDesktop_uno.png";
import BannerDesktop_dos from "../../assets/BannerDesktop_dos.png";
import BannerDesktop_tres from "../../assets/BannerDesktop_tres.png";

import BannerMobile from "../../assets/BannerMobile.png";
import BannerMobile_dos from "../../assets/BannerMobile_dos.png";
import BannerMobile_tres from "../../assets/BannerMobile_tres.png";

const Inicio = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <picture>
            <source media="(max-width: 768px)" srcSet={BannerMobile} />
            <img
              className="d-block w-100 carousel-img"
              src={BannerDesktop_uno}
              alt="First slide"
            />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source media="(max-width: 768px)" srcSet={BannerMobile_dos} />
            <img
              className="d-block w-100 carousel-img"
              src={BannerDesktop_dos}
              alt="Second slide"
            />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source media="(max-width: 768px)" srcSet={BannerMobile_tres} />
            <img
              className="d-block w-100 carousel-img"
              src={BannerDesktop_tres}
              alt="Third slide"
            />
          </picture>
        </Carousel.Item>
      </Carousel>
      <Container className="my-4">
        <Row data-aos="fade-up" data-aos-delay="0">
          <CardRopa />
        </Row>
        {/* TARJETAS */}
        <Row className="m-4 g-3">
          <Col
            xs={12}
            md={6}
            className="imagen-container"
            data-aos="fade-right"
          >
            <Link>
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtaXNhc3xlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                className="w-100"
              />
            </Link>
            <Link className="texto-sobre-imagen">PARTE SUPERIOR</Link>
          </Col>

          <Col xs={12} md={6} className="imagen-container" data-aos="fade-left">
            <Link>
              <img
                src="https://images.unsplash.com/photo-1548883354-7622d03aca27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhbnRhbCVDMyVCM258ZW58MHx8MHx8fDA%3D"
                alt=""
                className="w-100"
              />
            </Link>
            <Link className="texto-sobre-imagen">PARTE INFERIOR</Link>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col
            className="imagen-container mb-3"
            data-aos="fade-right"
            data-aos-duration="1000"
            xs={12}
            sm={12}
            md={4}
          >
            <Link>
              <img
                src="https://images.unsplash.com/photo-1614495039153-e9cd13240469?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <Link className="texto-sobre-imagen">REMERAS Y CHOMBAS</Link>
            </Link>
          </Col>
          <Col
            className="imagen-container mb-3"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="100"
            xs={12}
            sm={12}
            md={4}
          >
            <Link>
              <img src="https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <Link className="texto-sobre-imagen">CAMISAS</Link>
            </Link>
          </Col>
          <Col
            className="imagen-container mb-3"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            xs={12}
            sm={12}
            md={4}
          >
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
