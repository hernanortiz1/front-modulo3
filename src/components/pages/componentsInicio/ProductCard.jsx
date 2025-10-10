// ProductCard con selección de talle
import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useCart } from "../../../helpers/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("M");

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: product.color || "Negro",
      vendor: product.vendor || "Lannister",
    });

    Swal.fire({
      title: "¡Agregado al carrito!",
      text: `${product.name} (Talle: ${selectedSize}) se agregó a tu carrito`,
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const tallesDisponibles = ["XS", "S", "M", "L", "XL"];

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-6">{product.name}</Card.Title>
        <Card.Text className="text-primary fw-bold">
          ${product.price.toLocaleString()}
        </Card.Text>

        {/* Selector de talle */}
        <Form.Group className="mb-3">
          <Form.Label>Talle:</Form.Label>
          <Form.Select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            size="sm"
          >
            {tallesDisponibles.map((talle) => (
              <option key={talle} value={talle}>
                {talle}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button variant="primary" className="mt-auto" onClick={handleAddToCart}>
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
