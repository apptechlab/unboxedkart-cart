
import React from "react";
import Image from "next/image";
import { ProductType } from "../../types/product.type";
import Link from "../widgets/link";

interface ProductWidgetProps {
  product: ProductType;
}

const ProductWidgetVertical = (props: ProductWidgetProps) => {
  const product = props.product;

  function navigateToProductPage() {
    window.open(`/products/${product._id}`);
  }


  return (
    // <button onClick={navigateToProductPage}>
    <Link href={`/products/${product._id}`}>
      <div className="group hover:shadow-product flex rounded-2xl cursorpointer flex-col p-4 bg-white">
        <div className="object-contain  w-200 h-300 place-self-center">
          <Image
            src={product.imageUrls.desktopCoverImage}
            alt={product.title}
            width="300"
            height="450"
            className="object-contain"
          />
          {/* </button> */}
        </div>
        <div className="h-20">
          <p className="text-sm lg:text-lg 2xl:text-lg font-bold group-hover:text-unboxedkartBlue text-left">
            {product.title}
          </p>
          {/* <div className="bg-green-500 text-white justify-self-center flex p-1 m-0 w-10 my-1 text-xs">
                {4.5}★
              </div> */}
          <div className="h-2"></div>
          <p className="text-sm lg:text-lg xl:text-md 2xl:text-lg font-bold text-left">
            ₹{product.pricing.sellingPrice}
            <span className="text-xs line-through md:text-base lg:text-base xl:text-base 2xl-text-base px-2 my-1 text-gray-700 font-normal">
              ₹{product.pricing.price}
            </span>
          </p>
        </div>
      </div>
    </Link>
    // </button>
  );
};

export default ProductWidgetVertical;
