import Card from "react-bootstrap/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import React from 'react';

const CardRopa = () => {
  const productos = [
    {
      img: "https://equusio.vtexassets.com/arquivos/ids/290550-500-auto?v=638912968771200000&width=500&height=auto&aspect=true",
      nombre: "Camisa regular 100% algodón OSAKA",
      precio: "$74.000",
    },
    {
      img: "https://equusio.vtexassets.com/arquivos/ids/290550-500-auto?v=638912968771200000&width=500&height=auto&aspect=true",
      nombre: "Camisa regular 100% algodón OSAKA",
      precio: "$74.000",
    },
    {
      img: "https://equusio.vtexassets.com/arquivos/ids/290550-500-auto?v=638912968771200000&width=500&height=auto&aspect=true",
      nombre: "Camisa regular 100% algodón OSAKA",
      precio: "$74.000",
    },
    {
      img: "https://equusio.vtexassets.com/arquivos/ids/290550-500-auto?v=638912968771200000&width=500&height=auto&aspect=true",
      nombre: "Camisa regular 100% algodón OSAKA",
      precio: "$74.000",
    },
    {
      img: "https://equusio.vtexassets.com/arquivos/ids/290550-500-auto?v=638912968771200000&width=500&height=auto&aspect=true",
      nombre: "Camisa regular 100% algodón OSAKA",
      precio: "$74.000",
    },
  ];

  return (
    <>
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
        {productos.map((ropa, index) => (
          <SwiperSlide key={index}>
              <Card className="card-ropa">
                <Link>
                <Card.Img variant="top" src={ropa.img} />
                </Link>
                <Card.Body>
                  <Link className="text-decoration-none text-dark Montserrat">
                    <Card.Title>{ropa.nombre}</Card.Title>
                    <Card.Text>{ropa.precio}</Card.Text>
                  </Link>
                </Card.Body>
              </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardRopa;
