import React, { useEffect } from "react";
import { BiBox } from "react-icons/bi";
import { CgBox } from "react-icons/cg";
import { FaBox, FaBoxOpen } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { ProductType } from "../../types/product.type";
import ProductFeedLoader from "../loaders/product-feed-loader";
import SearchResultLoader from "../loaders/search-result-loader";
import ProductWidgetHorizontal from "../models/product-horizontal.widget";
import ProductWidgetVertical from "../models/product-vertical.widget";

interface ProductsListProps {
  //   heading: string;
  products: ProductType[];
  isLoading: boolean;
  uniqueKey: string;
}

const ProductsList = (props: ProductsListProps) => {
  const { products, isLoading, uniqueKey } = props;


  useEffect(() => {
    console.log("getting search", products);
  });




  return (
    <div className="">
      <div className="grid grid-row mx-5">
        {isLoading && !products?.length ? (
          <ul>
            <SearchResultLoader />
            <SearchResultLoader />
            <SearchResultLoader />
            <SearchResultLoader />
            <SearchResultLoader />
          </ul>
        ) : products.length > 0 && Array.isArray(products) ? (
          <div>
            {products.map((product: ProductType) => (
              <ProductWidgetHorizontal
                key={`product--key${product._id}`}
                product={product}
              />
            )
            )}
          </div>
        ) : (
          <div className="flex flex-col place-items-center align-center pt-48">
            <FaBoxOpen className="text-unboxedkartBlue text-8xl" />
            <p className="text-center mx-10 my-2">We&apos;re sorry, but the items you were looking for are no longer available. Please try looking up similar products.</p> 
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsList;


