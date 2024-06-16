import React, { useEffect, useState } from "react";
import ShowCartItems from "./show-cart-items";
import { fetchProduct } from "../../../handler-functions/products/single-product/get-product";
import { CartItemWithDetails, CartItem } from "../../../types/product.type";

const CartItems = () => {
  const [cartItems, setCartItems] = useState<CartItemWithDetails[]>([]);
  const [total, setTotal] = useState(0);
  const isBrowser = typeof window !== 'undefined';

  console.log(`isBrowser: ${isBrowser}`);

  
  useEffect(() => {
    if (!isBrowser) return;

    const fetchCartItems = async () => {
      const localStoredData = localStorage.getItem('cart');
      let cart: CartItem[] = [];
      if (localStoredData) {
        cart = JSON.parse(localStoredData);
      }
      console.log(`cart:`, cart);

      const itemsWithCount: CartItemWithDetails[] = await Promise.all(
        cart.map(async (item) => {
          const product = await fetchProduct(item.productId);
          return { ...product, count: item.count };
        })
      );

      setCartItems(itemsWithCount);
      setTotal(itemsWithCount.reduce((acc, item) => acc + item.pricing.sellingPrice * item.count, 0));
    };

    fetchCartItems();
  }, [isBrowser]);

  

  const removeFromCart = (id: string) => {
    if (isBrowser) {
      const updatedCartItems = cartItems.filter(item => item._id !== id);
      setCartItems(updatedCartItems);
      setTotal(updatedCartItems.reduce((acc, item) => acc + item.pricing.sellingPrice * item.count, 0));

      const updatedCart = JSON.parse(localStorage.getItem('cart') || '[]').filter((item: CartItem) => item.productId !== id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row md:space-x-5 lg:space-x-5 mx-5">
      <div className="bg-white w-full md:w-3/4 lg:w-3/4 min-h-screen">
        <ShowCartItems
          cartItems={cartItems}
          handleRemoveItem={removeFromCart}
        />
      </div>
      {/* <div className="w-full md:w-1/4 lg:w-1/4 relative mt-0">
        <div className="sticky top-0 bg-white">
          <CartPriceDetails cartItems={cartItems} />
        </div>
      </div> */}
    </div>
  );
};

export default CartItems;
