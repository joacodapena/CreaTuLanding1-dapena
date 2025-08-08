import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart(prevCart => {
      const itemInCart = prevCart.find(prod => prod.id === item.id);
      if (itemInCart) {
        // Si ya está, actualizo la cantidad
        return prevCart.map(prod =>
          prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
        );
      } else {
        // Si no está, agrego nuevo
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(prod => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getTotalQuantity, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
