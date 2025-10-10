import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../../../assets/banners/bannerPublicidad1.webp";
import Banner2 from "../../../assets/banners/bannerPublicidad2.jpg";
import Banner3 from "../../../assets/banners/BannerPublicidad3.webp";
import React from "react";
const BannerPublicidad = () => {
  return (
    <Carousel fade controls={false} indicators={false}>
      <Carousel.Item interval={2000}>
        <img
          src={Banner1}
          className="img-fluid imagenBanners"
          alt="Imagen publicitaria con descuento"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          src={Banner2}
          className="img-fluid imagenBanners"
          alt="Imagen publicitaria con descuento"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          src={Banner3}
          className="img-fluid imagenBanners"
          alt="Imagen publicitaria con descuento"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default BannerPublicidad;
