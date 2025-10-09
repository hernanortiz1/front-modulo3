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

  // Guardar en localStorage cuando cambie el carrito
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
        (item) => item.id === product.id && item.size === product.size
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId, size) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.id === productId && item.size === size))
    );
  };

  const updateQuantity = (productId, size, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, size);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const increaseQuantity = (productId, size) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === productId && item.size === size) {
          return { ...item, quantity: (item.quantity || 0) + 1 };
        }
        return item;
      });
    });
  };

  const decreaseQuantity = (productId, size) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.id === productId && item.size === size) {
            const newQuantity = (item.quantity || 1) - 1;
            if (newQuantity <= 0) {
              return null; // Será filtrado después
            }
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item !== null); // Filtrar items eliminados
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 0;
      return total + price * quantity;
    }, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce(
      (total, item) => total + (Number(item.quantity) || 0),
      0
    );
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
