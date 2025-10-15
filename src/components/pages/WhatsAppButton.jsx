import React from "react";

const WhatsAppButton = () => {
  const phone = "5493811234567"; // Cambia por tu número
  const message = "Hola! Quiero más info sobre un producto";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <i className="bi bi-whatsapp fs-1 d-flex justify-content-center align-content-center"></i>
    </a>
  );
};

export default WhatsAppButton;
