import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperCustom = ({ items = [], CardComponent, uniqueId }) => {
  return (
    <div style={{ position: "relative" }}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
          prevEl: `.custom-prev-${uniqueId}`,
          nextEl: `.custom-next-${uniqueId}`,
        }}
        pagination={{
          el: `.custom-pagination-${uniqueId}`,
          clickable: true,
          dynamicBullets: true,
        }}
        style={{
          paddingBottom: "60px", // espacio para los dots
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          992: { slidesPerView: 4 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item._id || item.id}>
            <CardComponent ropa={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Flecha izquierda */}
      <div
        className={`custom-prev-${uniqueId}`}
        style={{
          position: "absolute",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          cursor: "pointer",
          color: "#1d3557",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          width: "45px",
          height: "45px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#1d3557";
          e.currentTarget.style.color = "white";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
          e.currentTarget.style.color = "#1d3557";
          e.currentTarget.style.transform = "translateY(-50%) scale(1)";
        }}
      >
        <i className="bi bi-chevron-left" style={{ fontSize: "24px" }}></i>
      </div>

      {/* Flecha derecha */}
      <div
        className={`custom-next-${uniqueId}`}
        style={{
          position: "absolute",
          right: "0",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          cursor: "pointer",
          color: "#1d3557",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          width: "45px",
          height: "45px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#1d3557";
          e.currentTarget.style.color = "white";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
          e.currentTarget.style.color = "#1d3557";
          e.currentTarget.style.transform = "translateY(-50%) scale(1)";
        }}
      >
        <i className="bi bi-chevron-right" style={{ fontSize: "24px" }}></i>
      </div>

      {/* Paginación */}
      <div
        className={`custom-pagination-${uniqueId}`}
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      ></div>
    </div>
  );
};

export default SwiperCustom;
