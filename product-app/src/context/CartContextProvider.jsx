import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (!product || !product.id) {
      console.error("Invalid product data:", product);
      return;
    }
// optimized solution to add product to cart
    const newCartItems = cartItems
      .map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      )
      .concat(
        cartItems.some((item) => item.id === product.id) ? [] : [product]
      );

    console.log("Updated Cart Items:", newCartItems);
    setCartItems(newCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
