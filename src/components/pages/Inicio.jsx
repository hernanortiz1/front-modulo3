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

  const abrigosCamperas = (productos || []).filter(
    (producto) => producto.categoria === "Abrigos y camperas"
  );

  const anteojos = (productos || []).filter(
    (producto) => producto.categoria === "Anteojos de sol"
  );

  const bermudas = (productos || []).filter(
    (producto) => producto.categoria === "Bermudas"
  );

  const camisas = (productos || []).filter(
    (producto) => producto.categoria === "Camisas"
  );

  const gorras = (productos || []).filter(
    (producto) => producto.categoria === "Gorras"
  );

  const pantalones = (productos || []).filter(
    (producto) => producto.categoria === "Pantalones"
  );

  const remeras = (productos || []).filter(
    (producto) => producto.categoria === "Remeras y chombas"
  );

  const shortsBanio = (productos || []).filter(
    (producto) => producto.categoria === "Shorts de Baño"
  );

  const buzos = (productos || []).filter(
    (producto) => producto.categoria === "Sweaters y buzos"
  );

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
        <div data-aos="fade-down" data-aos-delay="0">
          <div className="d-flex my-1">
            <h3 className="Montserrat me-auto colorTitleInicio">
              Remeras y chombas
            </h3>
            <Link
              to={"/remeras-chombas"}
              className="colorTitleInicio text-decoration-none"
            >
              {" "}
              ver todo <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            style={{ paddingBottom: "40px" }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 4 },
            }}
          >
            {remeras.map((ropa) => (
              <SwiperSlide key={ropa.id}>
                <CardRopa ropa={ropa} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div data-aos="fade-down" data-aos-delay="0">
          <div className="d-flex my-1">
            <h3 className="Montserrat me-auto colorTitleInicio">
              Camisas
            </h3>
            <Link
              to={"/camisas"}
              className="colorTitleInicio text-decoration-none"
            >
              {" "}
              ver todo <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            style={{ paddingBottom: "40px" }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 4 },
            }}
          >
            {camisas.map((ropa) => (
              <SwiperSlide key={ropa.id}>
                <CardRopa ropa={ropa} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div data-aos="fade-down" data-aos-delay="0">
          <div className="d-flex my-1">
            <h3 className="Montserrat me-auto colorTitleInicio">
              Sweaters y buzos
            </h3>
            <Link
              to={"/sweaters-buzos"}
              className="colorTitleInicio text-decoration-none"
            >
              {" "}
              ver todo <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            style={{ paddingBottom: "40px" }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 4 },
            }}
          >
            {buzos.map((ropa) => (
              <SwiperSlide key={ropa.id}>
                <CardRopa ropa={ropa} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div data-aos="fade-down" data-aos-delay="0">
          <div className="d-flex my-1">
            <h3 className="Montserrat me-auto colorTitleInicio">
              Abrigos y camperas
            </h3>
            <Link
              to={"/abrigos-camperas"}
              className="colorTitleInicio text-decoration-none"
            >
              {" "}
              ver todo <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            style={{ paddingBottom: "40px" }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 4 },
            }}
          >
            {abrigosCamperas.map((ropa) => (
              <SwiperSlide key={ropa.id}>
                <CardRopa ropa={ropa} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div data-aos="fade-down" data-aos-delay="0">
          <div className="d-flex my-1">
            <h3 className="Montserrat me-auto colorTitleInicio">
              Pantalones
            </h3>
            <Link
              to={"/pantalones"}
              className="colorTitleInicio text-decoration-none"
            >
              {" "}
              ver todo <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            style={{ paddingBottom: "40px" }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 4 },
            }}
          >
            {pantalones.map((ropa) => (
              <SwiperSlide key={ropa.id}>
                <CardRopa ropa={ropa} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div data-aos="fade-down" data-aos-delay="0">
          <div className="d-flex my-1">
            <h3 className="Montserrat me-auto colorTitleInicio">
              Bermudas
            </h3>
            <Link
              to={"/bermudas"}
              className="colorTitleInicio text-decoration-none"
            >
              {" "}
              ver todo <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            style={{ paddingBottom: "40px" }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 4 },
            }}
          >
            {bermudas.map((ropa) => (
              <SwiperSlide key={ropa.id}>
                <CardRopa ropa={ropa} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div data-aos="fade-down" data-aos-delay="0">
          <div className="d-flex my-1">
            <h3 className="Montserrat me-auto colorTitleInicio">
              Shorts de Baño
            </h3>
            <Link
              to={"/shorts"}
              className="colorTitleInicio text-decoration-none"
            >
              {" "}
              ver todo <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            style={{ paddingBottom: "40px" }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 4 },
            }}
          >
            {shortsBanio.map((ropa) => (
              <SwiperSlide key={ropa.id}>
                <CardRopa ropa={ropa} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div data-aos="fade-down" data-aos-delay="0">
          <div className="d-flex my-1">
            <h3 className="Montserrat me-auto colorTitleInicio">
              Gorras
            </h3>
            <Link
              to={"/gorras"}
              className="colorTitleInicio text-decoration-none"
            >
              {" "}
              ver todo <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            style={{ paddingBottom: "40px" }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 4 },
            }}
          >
            {gorras.map((ropa) => (
              <SwiperSlide key={ropa.id}>
                <CardRopa ropa={ropa} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div data-aos="fade-down" data-aos-delay="0">
          <div className="d-flex my-1">
            <h3 className="Montserrat me-auto colorTitleInicio">
              Anteojos de sol
            </h3>
            <Link
              to={"/anteojos"}
              className="colorTitleInicio text-decoration-none"
            >
              {" "}
              ver todo <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            style={{ paddingBottom: "40px" }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 4 },
            }}
          >
            {anteojos.map((ropa) => (
              <SwiperSlide key={ropa.id}>
                <CardRopa ropa={ropa} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
      <section className="mt-3">
        <BannerPublicidad />
      </section>
    </>
  );
};

export default Inicio;
