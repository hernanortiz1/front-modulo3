import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import React from "react";

const ProtegerRutaPago = ({ children }) => {
  const navigate = useNavigate();
  const [accesoPermitido, setAccesoPermitido] = useState(false);

  useEffect(() => {
    const verificarAcceso = () => {
      const pedidoId = localStorage.getItem("ultimoPedidoId");
      const vieneDePago = sessionStorage.getItem("flujoPagoCompleto");

      if (!pedidoId || !vieneDePago) {
        navigate("/");
        return;
      }

      sessionStorage.removeItem("flujoPagoCompleto");
      setAccesoPermitido(true);
    };

    verificarAcceso();
  }, [navigate]);

  if (!accesoPermitido) {
    return (
      <div className="text-center p-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Verificando acceso...</span>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtegerRutaPago;
