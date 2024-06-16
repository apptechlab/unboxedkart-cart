import Link from 'next/link'
import React from 'react'
import { CartItem } from "../../types/product.type";

type ProductBlockProps = {
  slug: any;
};

const StorePickUpWidget = (props: ProductBlockProps) => {
  
  return (
    <div className="bg-white p-4 my-0 md:my-2 mx-2 rounded-2xl">
      <h2 className="text-unboxedkartBlue text-l font-bold">Introducing Store Pickup</h2>
      <h3 className='text-sm py-1'>Now, you can reserve a product without making an upfront payment and visit our store within next 48 hours to check (or Inspect) and purchase it</h3>
      <Link href={'/my-account/cart/cart-items'}>
        <h3 className="text-sm font-bold text-yellow-600">Know more...</h3>
      </Link>
    </div>
  )
}

export default StorePickUpWidget