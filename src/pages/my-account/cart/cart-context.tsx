import React, { createContext, useState, useContext, ReactNode } from 'react';
import { CartItem, CartItemWithDetails } from '../../../types/product.type';
import { fetchProduct } from '../../../handler-functions/products/single-product/get-product';

interface CartContextType {
  cart: CartItem[];
  cartItems: CartItemWithDetails[];
  total: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  fetchCartItems: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartItems, setCartItems] = useState<CartItemWithDetails[]>([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.productId === item.productId);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.productId === item.productId ? { ...cartItem, count: cartItem.count + 1 } : cartItem
        );
      } else {
        return [...prevCart, item];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter(item => item.productId !== id));
    setCartItems((prevCartItems) => prevCartItems.filter(item => item._id !== id));
  };

  const fetchCartItems = async () => {
    const itemsWithCount: CartItemWithDetails[] = await Promise.all(
      cart.map(async (item) => {
        const product = await fetchProduct(item.productId);
        return { ...product, count: item.count };
      })
    );
    setCartItems(itemsWithCount);
    setTotal(itemsWithCount.reduce((acc, item) => acc + item.pricing.sellingPrice * item.count, 0));
  };

  return (
    <CartContext.Provider value={{ cart, cartItems, total, addToCart, removeFromCart, fetchCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
