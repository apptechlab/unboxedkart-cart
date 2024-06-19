import React, { useEffect } from 'react';
import ShowCartItems from './show-cart-items';
import { useCart } from './cart-context';

const CartItems = () => {
  const { cartItems, total, fetchCartItems, removeFromCart } = useCart();

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className="flex flex-col md:flex-row lg:flex-row md:space-x-5 lg:space-x-5 mx-5">
      <div className="bg-white w-full md:w-3/4 lg:w-3/4 min-h-screen">
        <ShowCartItems cartItems={cartItems} handleRemoveItem={removeFromCart} />
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
