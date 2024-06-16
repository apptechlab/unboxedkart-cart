import React from "react";
import Image from "next/image";
import { ProductType } from "../../types/product.type";
import { useWindowSize } from "../../utils/use-window-size";
import Link from "../widgets/link";

interface ProductWidgetProps {
  product: ProductType;
}

const ProductWidgetHorizontal = (props: ProductWidgetProps) => {
  const { width, height } = useWindowSize();

  function navigateToProductPage() {
    window.open(`/products/${product._id}`);
  }

  const product = props.product;

  const ProductCardHorizontalForDesktop = () => {
    return (
      <Link href={`/products/${product._id}`}>
        <div className="group flex flex-row w-80% m-0 justify-between rounded-2xl cursor-pointer bg-white my-2 mx-0 hover:shadow-product">
          <div className="flex flex-row justify-start ">
            <div className="object-contain w-20 h-30 md:w-40 md:h-50 lg:w-40 lg:h-50 bg-gray m-5 p-2 pt-5">
              <Image
                src={product.imageUrls.desktopCoverImage}
                width="150"
                height="225"
                className="object-contain"
                alt="desktop cover image"
              />
            </div>
            <div className="flex flex-col my-6 mx-4 pt-5">
              {/* <button onClick={navigateToProductPage}> */}
                <p className="text-sm md:text-lg lg:text-xl text-black 2xl:text-lg font-bold group-hover:text-unboxedkartBlue text-left">
                  {product.title}
                </p>
              {/* </button> */}
              {/* <div className="bg-green-500 text-white justify-self-center flex p-1 m-0 w-10 my-1 text-xs">
                {4.5} ★
              </div> */}
              <div className="ml-4 mt-2">
                <ul className="list-disc">
                  {product.aboutProduct.map((highlight, index) => {
                    return (
                      <li
                        className="text-xs md:text-base lg:text-base text-black"
                        key={index}
                      >
                        {highlight}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-6 mr-4 pt-5">
            <Image
              src={"/assets/images/unboxedkart_certified.png"}
              height={30}
              width={50}
              className={"self-center"}
              alt={"unboxedkart certified"}
            />
            {/* <p className="self-end text-xs py-1 m-0 text-blue-500 font-semibold md:text-base md:font-bold lg:font-bold lg:text-base text-right">
              Certified ✅
            </p> */}
            <p className="text-sm lg:text-lg xl:text-xl text-black 2xl:text-lg font-bold my-0 self-end">
              ₹{Number(product.pricing.sellingPrice).toLocaleString()}
            </p>
            <p className="text-xs line-through md:text-base lg:text-base xl:text-base 2xl-text-base  text-gray-700 font-normal self-end">
              ₹{Number(product.pricing.price).toLocaleString()}
            </p>
          </div>
        </div>
      </Link>
    );
  };

  const ProductCardHorizontalForMobile = () => {
    return (
      <Link href={`/products/${product._id}`}>
        <div className="group flex flex-col w-80% m-0 justify-between rounded-2xl cursor-pointer bg-white my-2 hover:shadow-product p-4">
          <Image
            src={product.imageUrls.coverImage}
            width="100"
            height="100"
            className="object-contain self-center"
            alt="cover image"
          />
          <p className="pt-2 text-sm md:text-lg lg:text-xl text-black 2xl:text-lg font-bold group-hover:text-unboxedkartBlue text-left">
            {product.title}
          </p>
          {/* <div className="bg-green-500 text-white justify-self-center flex p-1 w-10 text-xs my-1 rounded-sm">
            {4.5} ★
          </div> */}
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-x-2">
              <p className="text-sm lg:text-lg xl:text-xl text-black 2xl:text-lg font-bold my-0 ">
                ₹{Number(product.pricing.sellingPrice).toLocaleString()}
              </p>
              <p className="text-sm line-through md:text-base lg:text-base xl:text-base 2xl-text-base text-gray-700 font-bold">
                ₹{Number(product.pricing.price).toLocaleString()}
              </p>
              <p className="text-sm lg:text-lg xl:text-xl text-black 2xl:text-lg font-bold text-green-500 my-0">
                ₹
                {Number(
                  product.pricing.price - product.pricing.sellingPrice
                ).toLocaleString()}{" "}
                off
              </p>

            </div>
            <Image
              src={"/assets/images/unboxedkart_certified.png"}
              height={15}
              width={50}
              className={"align-right"}
              alt="unboxedkart certified"
            />
          </div>

        </div>
      </Link>
    );
  };

  return (
    <>
      {width > 800 ? (
        <ProductCardHorizontalForDesktop />
      ) : (
        <ProductCardHorizontalForMobile />
      )}
    </>
  );
};

export default ProductWidgetHorizontal;
