import React from "react";
import { SwiperSlide } from "swiper/react";
import Carousel from "../carousel/carousel";
import ProductFeedLoader from "../loaders/product-feed-loader";
import ProductWidgetVertical from "../models/product-vertical.widget";
import Divider from "../widgets/divider";

interface ProductsBlockScrollProps {
  heading: string;
  products: any;
  isLoading: boolean;
  uniqueKey: string;
}

const ProductsBlockScroll = (props: ProductsBlockScrollProps) => {
  const { isLoading, products, uniqueKey, heading } = props;

  const breakpoints = {
    "1720": {
      slidesPerView: 5,
      spaceBetween: 28,
    },
    "1400": {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    "1025": {
      slidesPerView: 4,
      spaceBetween: 28,
    },
    "768": {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    "500 ": {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    "0": {
      slidesPerView: 2,
      spaceBetween: 12,
    },
  };

  return (
    <div className="">
      <p className="text-xl font-bold text-black pb-4">{heading}</p>
      {/* <SectionHeader
        className="m-4"
        sectionHeading={sectionHeading}
      /> */}
      <Divider className="m-0" />
      <Carousel breakpoints={breakpoints} buttonClassName="-mt-8 md:-mt-10">
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 p-4">
            <ProductFeedLoader limit={5} uniqueKey="search-product" />
          </div>
        ) : (
          products?.map((product: any) => (
            <SwiperSlide key={`category--key-`}>
              <p>hello world</p>
              {/* <ProductWidgetVertical
                key={`product--key${product.id}`}
                product={product}
              /> */}
            </SwiperSlide>
          ))
        )}
      </Carousel>
    </div>
  );
};

export default ProductsBlockScroll;
