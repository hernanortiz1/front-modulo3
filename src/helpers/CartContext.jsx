// helpers/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("lannister-cart");

      if (savedCart && savedCart !== "undefined") {
        const parsedCart = JSON.parse(savedCart);

        // Validar que sea un array
        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
        } else {
          console.warn("Datos del carrito no válidos, inicializando vacío");
          setCartItems([]);
        }
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error("Error al cargar el carrito:", error);
      setCartItems([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("lannister-cart");

      if (savedCart && savedCart !== "undefined") {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
        } else {
          setCartItems([]);
        }
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error("Error al cargar el carrito:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem("lannister-cart", JSON.stringify(cartItems));
      } catch (error) {
        console.error("Error al guardar el carrito:", error);
      }
    }
  }, [cartItems, isLoading]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item._id === product._id && item.size === product.size
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item._id === product._id && item.size === product.size
            ? { ...item, quantity: item.quantity + product.quantity || 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: product.quantity || 1 }];
      }
    });
  };

  const removeFromCart = (productId, size) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item._id === productId && item.size === size)
      )
    );
  };

  const updateQuantity = (productId, size, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, size);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === productId && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const increaseQuantity = (productId, size) => {
    const item = cartItems.find(
      (item) => item._id === productId && item.size === size
    );
    if (item) {
      updateQuantity(productId, size, item.quantity + 1);
    }
  };

  const decreaseQuantity = (productId, size) => {
    const item = cartItems.find(
      (item) => item._id === productId && item.size === size
    );
    if (item) {
      updateQuantity(productId, size, item.quantity - 1);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.precio * item.quantity,
      0
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
