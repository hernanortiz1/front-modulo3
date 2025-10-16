import BannerPublicidad from "./componentsInicio/bannerPublicidad";
import Carousel from "react-bootstrap/Carousel";
import CardRopa from "../pages/ropa/CardRopa";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router";
import BannerDesktop_uno from "../../assets/BannerDesktop_uno.png";
import BannerDesktop_dos from "../../assets/BannerDesktop_dos.png";
import BannerDesktop_tres from "../../assets/BannerDesktop_tres.png";
import BannerMobile from "../../assets/BannerMobile.png";
import BannerMobile_dos from "../../assets/BannerMobile_dos.png";
import BannerMobile_tres from "../../assets/BannerMobile_tres.png";
import React from "react";
import HashLoader from "react-spinners/HashLoader";
import { useEffect, useState } from "react";
import { obtenerProductos } from "../../helpers/queries";
import { Navigation, Pagination } from "swiper/modules";
import BtnScroll from "./categorias/funcion/BtnScroll";
import WhatsAppButton from "./categorias/funcion/WhatsAppButton";
import SwiperCustom from "../shared/componentsMenu/SwiperCustom";
const Inicio = () => {
  const [productos, setProductos] = useState([]);
  const [coleccionRandom, setColeccionRandom] = useState([]);

  useEffect(() => {
    leerProductos();
  }, []);

  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (productos) {
      const timer = setTimeout(() => setCargando(false), 500);
      return () => clearTimeout(timer);
    }
  }, [productos]);

  const leerProductos = async () => {
    const respuesta = await obtenerProductos();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setProductos(datos);
      const productosColeccion = datos.filter(
        (producto) =>
          producto.categoria !== "Abrigos y camperas" &&
          producto.categoria !== "Sweaters y buzos"
      );

      const productosRandom = productosColeccion
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);

      setColeccionRandom(productosRandom);
    } else {
      console.info("Error al cargar los productos");
    }
  };
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const handleChange = (e) => {
    setTerminoBusqueda(e.target.value);
  };

  const filtrarPorCategoria = (categoria) => {
    const categoriaFiltrados = productos.filter(
      (producto) => producto.categoria === categoria
    );
    if (terminoBusqueda.trim() !== "") {
      return categoriaFiltrados.filter((producto) =>
        producto.nombreProducto
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      );
    }

    return categoriaFiltrados;
  };

  const abrigosCamperas = filtrarPorCategoria("Abrigos y camperas");
  const buzos = filtrarPorCategoria("Sweaters y buzos");
  const remeras = filtrarPorCategoria("Remeras y chombas");
  const camisas = filtrarPorCategoria("Camisas");
  const pantalones = filtrarPorCategoria("Pantalones");
  const bermudas = filtrarPorCategoria("Bermudas");
  const shortsBanio = filtrarPorCategoria("Shorts de Baño");
  const gorras = filtrarPorCategoria("Gorras");
  const anteojos = filtrarPorCategoria("Anteojos de sol");

  const sinResultados =
    terminoBusqueda.trim() !== "" &&
    remeras.length === 0 &&
    camisas.length === 0 &&
    buzos.length === 0 &&
    abrigosCamperas.length === 0 &&
    pantalones.length === 0 &&
    bermudas.length === 0 &&
    shortsBanio.length === 0 &&
    gorras.length === 0 &&
    anteojos.length === 0;
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
          <h2 className="Montserrat text-center mt-5 mb-4">
            COLECCIÓN PRIMAVERA-VERANO
          </h2>
          <p className="text-center lead mb-5">
            Explora lo último en tendencias.
          </p>
          <SwiperCustom
            items={coleccionRandom}
            CardComponent={CardRopa}
            uniqueId="coleccion-random"
            linkTo="/"
            title=""
            slidesPerView={4}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            style={{
              paddingBottom: "40px",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 4 },
            }}
          />
        </div>
        <hr />
        <div className="row align-items-center">
          <h3 className="Montserrat text-start my-5 col-6">
            TODAS NUESTRAS CATEGORÍAS
          </h3>
          <Form className="col-6">
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Buscar producto"
                onChange={handleChange}
                value={terminoBusqueda}
              />
            </Form.Group>
          </Form>
        </div>
        {cargando ? (
          <div className="d-flex justify-content-center my-5">
            <HashLoader size={80} color="#1d3557" />
          </div>
        ) : (
          <Container>
            {sinResultados && (
              <p className="text-center lead my-5">
                <i className="bi bi-x-lg"></i> No hay resultados disponibles
                para “{terminoBusqueda}”
              </p>
            )}
            {(remeras.length > 0 || terminoBusqueda === "") && (
              <div data-aos="fade-down" data-aos-delay="0">
                <div className="d-flex my-1">
                  <h5 className="Montserrat me-auto">REMERAS Y CHOMBAS</h5>
                  <Link
                    to={"/remeras-chombas"}
                    className="text-decoration-none text-dark"
                  >
                    {" "}
                    Ver todo <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
                {remeras.length === 0 ? (
                  <p className="text-center lead my-3">
                    <i className="bi bi-x-lg"></i> No se encontraron productos
                  </p>
                ) : (
                  <SwiperCustom items={remeras} CardComponent={CardRopa} uniqueId="remeras" />
                )}
              </div>
            )}
            {(camisas.length > 0 || terminoBusqueda === "") && (
              <div data-aos="fade-down" data-aos-delay="0">
                <div className="d-flex my-1">
                  <h5 className="Montserrat me-auto">CAMISAS</h5>
                  <Link
                    to={"/camisas"}
                    className="text-decoration-none text-dark"
                  >
                    {" "}
                    Ver todo <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
                {camisas.length === 0 ? (
                  <p className="text-center lead my-3">
                    <i className="bi bi-x-lg"></i> No se encontraron productos
                  </p>
                ) : (
                  <SwiperCustom items={camisas} CardComponent={CardRopa} uniqueId="camisas" />
                )}
              </div>
            )}
            {(buzos.length > 0 || terminoBusqueda === "") && (
              <div data-aos="fade-down" data-aos-delay="0">
                <div className="d-flex my-1">
                  <h5 className="Montserrat me-auto">SWEATERS Y BUZOS</h5>
                  <Link
                    to={"/sweaters-buzos"}
                    className="text-decoration-none text-dark"
                  >
                    {" "}
                    Ver todo <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
                {buzos.length === 0 ? (
                  <p className="text-center lead my-3">
                    <i className="bi bi-x-lg"></i> No se encontraron productos
                  </p>
                ) : (
                  <SwiperCustom items={buzos} CardComponent={CardRopa} uniqueId="buzos" />
                )}
              </div>
            )}
            {(abrigosCamperas.length > 0 || terminoBusqueda === "") && (
              <div data-aos="fade-down" data-aos-delay="0">
                <div className="d-flex my-1">
                  <h5 className="Montserrat me-auto">ABRIGOS Y CAMPERAS</h5>
                  <Link
                    to={"/abrigos-camperas"}
                    className="text-decoration-none text-dark"
                  >
                    {" "}
                    Ver todo <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
                {abrigosCamperas.length === 0 ? (
                  <p className="text-center lead my-3">
                    <i className="bi bi-x-lg"></i> No se encontraron productos
                  </p>
                ) : (
                  <SwiperCustom items={abrigosCamperas} CardComponent={CardRopa} uniqueId="abrigos-camperas" />
                )}
              </div>
            )}
            {(pantalones.length > 0 || terminoBusqueda === "") && (
              <div data-aos="fade-down" data-aos-delay="0">
                <div className="d-flex my-1">
                  <h5 className="Montserrat me-auto">PANTALONES</h5>
                  <Link
                    to={"/pantalones"}
                    className="text-decoration-none text-dark"
                  >
                    {" "}
                    Ver todo <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
                {pantalones.length === 0 ? (
                  <p className="text-center lead my-3">
                    <i className="bi bi-x-lg"></i> No se encontraron productos
                  </p>
                ) : (
                  <SwiperCustom items={pantalones} CardComponent={CardRopa} uniqueId="pantalones" />
                )}
              </div>
            )}
            {(bermudas.length > 0 || terminoBusqueda === "") && (
              <div data-aos="fade-down" data-aos-delay="0">
                <div className="d-flex my-1">
                  <h5 className="Montserrat me-auto">BERMUDAS</h5>
                  <Link
                    to={"/bermudas"}
                    className="text-decoration-none text-dark"
                  >
                    {" "}
                    Ver todo <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
                {bermudas.length === 0 ? (
                  <p className="text-center lead my-3">
                    <i className="bi bi-x-lg"></i> No se encontraron productos
                  </p>
                ) : (
                  <SwiperCustom items={bermudas} CardComponent={CardRopa} uniqueId="bermudas" />
                )}
              </div>
            )}
            {(shortsBanio.length > 0 || terminoBusqueda === "") && (
              <div data-aos="fade-down" data-aos-delay="0">
                <div className="d-flex my-1">
                  <h5 className="Montserrat me-auto">SHORTS DE BAÑO</h5>
                  <Link
                    to={"/shorts"}
                    className="text-decoration-none text-dark"
                  >
                    {" "}
                    Ver todo <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
                {shortsBanio.length === 0 ? (
                  <p className="text-center lead my-3">
                    <i className="bi bi-x-lg"></i> No se encontraron productos
                  </p>
                ) : (
                  <SwiperCustom items={shortsBanio} CardComponent={CardRopa} uniqueId="shorts-banio" />
                )}
              </div>
            )}
            {(gorras.length > 0 || terminoBusqueda === "") && (
              <div data-aos="fade-down" data-aos-delay="0">
                <div className="d-flex my-1">
                  <h5 className="Montserrat me-auto">GORRAS</h5>
                  <Link
                    to={"/gorras"}
                    className="text-decoration-none text-dark"
                  >
                    {" "}
                    Ver todo <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
                {gorras.length === 0 ? (
                  <p className="text-center lead my-3">
                    <i className="bi bi-x-lg"></i> No se encontraron productos
                  </p>
                ) : (
                  <SwiperCustom items={gorras} CardComponent={CardRopa} uniqueId="gorras" />
                )}
              </div>
            )}
            {(anteojos.length > 0 || terminoBusqueda === "") && (
              <div data-aos="fade-down" data-aos-delay="0">
                <div className="d-flex my-1">
                  <h5 className="Montserrat me-auto">ANTEOJOS DE SOL</h5>
                  <Link
                    to={"/anteojos"}
                    className="text-decoration-none text-dark"
                  >
                    {" "}
                    Ver todo <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
                {anteojos.length === 0 ? (
                  <p className="text-center lead my-3">
                    <i className="bi bi-x-lg"></i> No se encontraron productos
                  </p>
                ) : (
                  <SwiperCustom items={anteojos} CardComponent={CardRopa} uniqueId="anteojos" />
                )}
              </div>
            )}
          </Container>
        )}
      </Container>
      <section className="mt-3">
        <BannerPublicidad />
      </section>
      <BtnScroll />
      <WhatsAppButton />
    </>
  );
};

export default Inicio;
