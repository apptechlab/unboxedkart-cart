import Image from "next/image";
import type { FC } from "react";
import React from "react";
import { Product } from "src/blue-prints/product-model";
import { ROUTES } from "src/utils/routes";

interface ProductProps {
  product: Product;
}

const ProductCardHorizontal: FC<ProductProps> = ({ product }) => {


  function navigateToProductPage() {
    window.open(`${ROUTES.PRODUCT}/${product.productId}`);
  }

  return (
    <div className="group flex flex-row w-80% m-0 justify-between rounded-2xl cursor-pointer my-4 mx-0 hover:shadow-product">
      <div className="flex flex-row justify-start">
        <div className="object-contain w-20 h-30 md:w-40 md:h-50 lg:w-40 lg:h-50 bg-gray my-6 ml-8 mr-14">
          <Image
            src={product.imageUrl}
            width="120"
            height="180"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col my-6">
          <button onClick={navigateToProductPage}>
            <p className="text-sm md:text-lg lg:text-xl text-black 2xl:text-lg font-bold group-hover:text-blue-500">
              {product.title}
            </p>
          </button>
          <div className="bg-green-500 text-white justify-self-center flex p-1 m-0 w-10 my-1 text-xs">
            {4.5}★
          </div>
          <div className="ml-4 mt-2">
            <ul className="list-disc">
              {product.highlights.map((highlight, index) => {
                return (
                  <li className="text-xs md:text-base lg:text-base text-black" key={index}>
                    {highlight}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-6 mr-4">
        <p className="self-end text-xs py-1 m-0 text-blue-500 font-semibold md:text-base md:font-bold lg:font-bold lg:text-base">Certified ✅</p>
        <p className="text-sm lg:text-lg xl:text-xl text-black 2xl:text-lg font-bold my-0 self-end">
          ₹{Number(product.sellingPrice).toLocaleString()}
        </p>
        <p className="text-xs line-through md:text-base lg:text-base xl:text-base 2xl-text-base  text-gray-700 font-normal self-end">
          ₹{Number(product.MRP).toLocaleString()}
        </p>
      </div>
    </div>
  );

  return (
    <div className="group flex flex-row w-80% m-0 justify-around rounded-2xl cursor-pointer my-4 mx-0">
      <div className="flex flex-row">
        <div className=" hover:shadow-product object-contain w-120 h-180 bg-gray my-6 mx-0">
          <Image
            src={product.imageUrl}
            width="w-full"
            height="h-full"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col my-6">
          <p className="text-sm md:text-lg lg:text-xl text-black 2xl:text-lg font-bold group-hover:text-blue-500">
            {product.title}
          </p>
          <div className="bg-green-500 text-white justify-self-center flex p-1 m-0 rounded-md w-10 my-1 text-xs">
            {4.5}★
          </div>
          <div className="ml-4 mt-2">
            <ul className="list-disc">
              {product.highlights.map((highlight, index) => {
                return (
                  <li className="text-xs md:text-base lg:text-base" key={index}>
                    {highlight}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-6">
        <p className="text-sm lg:text-lg xl:text-xl text-black 2xl:text-lg font-bold my-0">
          ₹{product.sellingPrice}
        </p>
        <p className="text-xs line-through md:text-base lg:text-base xl:text-base 2xl-text-base px-2  text-gray-700 font-normal">
          1,29,000
        </p>
      </div>
    </div>
  );

  return (
    <div className="group hover:shadow-product flex rounded-2xl cursorpointer flex-col p-4 m-4 ">
      <div className="object-contain w-200 h-300 bg-gray">
        {/* <img src={product.imageUrl} alt={product.title}/> */}
        <Image
          src={product.imageUrl}
          width="300"
          height="450"
          className="object-contain"
        />
      </div>
      <div>
        <p className="text-sm lg:text-lg 2xl:text-lg font-bold group-hover:text-blue-500 my-1">
          {product.title}{" "}
        </p>
        <div className="bg-green-500 text-white justify-self-center flex p-1 m-0 rounded-md w-10 my-1 text-xs">
          {4.5}★
        </div>
        <p className="text-sm lg:text-lg xl:text-md 2xl:text-lg font-bold">
          ₹{product.sellingPrice}
          <span className="text-xs line-through md:text-base lg:text-base xl:text-base 2xl-text-base px-2 my-1 text-gray-700 font-normal">
            1,29,000
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCardHorizontal;
