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
import ParteSuperior from "../../assets/ParteSuperior.jpeg";
import ParteInferior from "../../assets/ParteInferior.jpeg";
import gafas from "../../assets/gafas.avif";
import Gorra from "../../assets/Gorra.avif";
import sueter from "../../assets/sueter.avif";

import React from "react";

import { useEffect, useState } from "react";
import { obtenerProductos } from "../../helpers/queries";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
const Inicio = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    leerProductos();
  }, []);

  const leerProductos = async () => {
    const respuesta = await obtenerProductos();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setProductos(datos);
    } else {
      console.info("Error al cargar los productos");
    }
  };

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
        <Link
          className="d-flex justify-content-end ver-todo"
          to="/remeras-chombas"
        >
          Ver todo
        </Link>
        <div data-aos="fade-down" data-aos-delay="0">
          <div
            className="swiper-button-prev"
            style={{
              left: "-40px",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              color:"#000"
            }}
          ></div>
          <div
            className="swiper-button-next"
            style={{
              right: "-40px",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              color:"#000"
            }}
          ></div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            style={{ paddingBottom: "40px" }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 4 },
            }}
          >
            {productos
              .filter((ropa) => ropa.categoria === "Remeras y chombas")
              .map((ropa) => (
                <SwiperSlide key={ropa.id}>
                  <CardRopa ropa={ropa} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        {/* TARJETAS */}
        <Row className="m-4 g-3">
          <Col
            xs={12}
            md={6}
            className="imagen-container box-shadow"
            data-aos="fade-right"
          >
            <Link to="/camisas">
              <img
                src={ParteSuperior}
                alt="Parte Superior Ropa"
                className="w-100 h-100"
              />
              <span className="texto-sobre-imagen">PARTE SUPERIOR</span>
            </Link>
          </Col>

          <Col
            xs={12}
            md={6}
            className="imagen-container box-shadow"
            data-aos="fade-left"
          >
            <Link to="/pantalones">
              <img
                src={ParteInferior}
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
            className="imagen-container mb-3 box-shadow "
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Link to="/gorras">
              <img src={Gorra} alt="gorra" className="w-100" />
              <span className="texto-sobre-imagen">GORRAS</span>
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
            <Link to="/anteojos">
              <img src={gafas} alt="gafas" className="w-100 h-100" />
              <span className="texto-sobre-imagen">GAFAS</span>
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
            <Link to="/sweaters-buzos">
              <img src={sueter} alt="sueter" className="w-100" />
              <span className="texto-sobre-imagen">SWEATER Y BUZOS</span>
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
