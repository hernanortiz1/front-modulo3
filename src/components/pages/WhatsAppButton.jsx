import React from "react";

const WhatsAppButton = () => {
  const phone = import.meta.env.VITE_API_WHATSAPP_PHONE;
  const message = import.meta.env.VITE_API_WHATSAPP_MESSAGE;
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
