import BannerPublicidad from "./componentsInicio/bannerPublicidad";
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
import React from 'react';

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
              alt="Banner de descuentos"
            />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source media="(max-width: 768px)" srcSet={BannerMobile_dos} />
            <img
              className="d-block w-100 carousel-img"
              src={BannerDesktop_dos}
              alt="Banner de descuentos"
            />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source media="(max-width: 768px)" srcSet={BannerMobile_tres} />
            <img
              className="d-block w-100 carousel-img"
              src={BannerDesktop_tres}
              alt="Banner de descuentos"
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
          <Col xs={12} md={6} className="imagen-container box-shadow" data-aos="fade-right">
            <Link to="/parte-superior">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60"
                alt="Parte Superior Ropa"
                className="w-100"
              />
              <span className="texto-sobre-imagen">PARTE SUPERIOR</span>
            </Link>
          </Col>

          <Col xs={12} md={6} className="imagen-container box-shadow" data-aos="fade-left">
            <Link to="/parte-inferior">
              <img
                src="https://images.unsplash.com/photo-1548883354-7622d03aca27?w=500&auto=format&fit=crop&q=60"
                alt="Parte Inferior Ropa"
                className="w-100"
              />
              <span className="texto-sobre-imagen">PARTE INFERIOR</span>
            </Link>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col
            xs={12}
            sm={12}
            md={4}
            className="imagen-container mb-3 box-shadow"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Link to="/remeras-chombas box-shadow">
              <img
                src="https://images.unsplash.com/photo-1614495039153-e9cd13240469?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Remeras y Chombas"
                className="w-100"
              />
              <span className="texto-sobre-imagen">REMERAS Y CHOMBAS</span>
            </Link>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={4}
            className="imagen-container mb-3 box-shadow"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <Link to="/camisas">
              <img
                src="https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Camisas"
                className="w-100"
              />
              <span className="texto-sobre-imagen">CAMISAS</span>
            </Link>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={4}
            className="imagen-container mb-3 box-shadow"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <Link to="/pantalones">
              <img
                src="https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Pantalones"
                className="w-100"
              />
              <span className="texto-sobre-imagen">PANTALONES</span>
            </Link>
          </Col>
        </Row>
      </Container>
              <section className="mt-3">
            <BannerPublicidad />
        </section>
    </>
  );
};

export default Inicio;
