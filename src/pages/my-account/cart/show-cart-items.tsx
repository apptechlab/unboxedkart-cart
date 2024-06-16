import React from "react";
import CartItem from "./cart-item";
import { Console } from "console";
import { CartItemWithDetails, ProductType } from "../../../types/product.type";

interface Props {
  cartItems: CartItemWithDetails[];
  handleRemoveItem:any,
}

const ShowCartItems = (props: Props) => {
  const cartItems = props.cartItems;
  const handleRemoveCartItem = props.handleRemoveItem;
  console.log(`meow: ${cartItems}`);

  return (
    <div className="h-full">
      {cartItems.map((cartItem: CartItemWithDetails, index: any) => {
        return (
          <CartItem
            productId={cartItem._id}
            key={index}
            productCount={cartItem.count}
            //cartItemId={cartItem.cartItemId}
            handleRemove={handleRemoveCartItem(cartItem._id)}
            productData={cartItem}
          />
        );
      })}
    </div>
  );
};

export default ShowCartItems;
