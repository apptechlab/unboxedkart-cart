import React from "react";
import { getFeaturedProducts } from "../../../handler-functions/products/featured-products/get-all-featured-products";
import { getRelatedProducts } from "../../../handler-functions/products/related-products/get-related-product";
import ProductsBlockGrid from "../products-block-grid";
import ProductsBlockScroll from "../products-block-scroll";

interface SimilarProductsBlockProps {
  id: string;
}

const SimilarProductsBlock = (props: SimilarProductsBlockProps) => {
  const id = props.id;

  const { data, isLoading, error } = getRelatedProducts(id);

  return (
    <div className="">
      <ProductsBlockGrid
        //   className="bg-white"
        heading={"Similar Products"}
        products={data}
        isLoading={isLoading}
        //   error={error?.message}
        uniqueKey="best-sellers"
      />
    </div>
  );

  return (
    <ProductsBlockScroll
      //   className="bg-white"
      heading={"Similar Products"}
      products={data}
      isLoading={isLoading}
      //   error={error?.message}
      uniqueKey="similar-products"
    />
  );
};

export default SimilarProductsBlock;
