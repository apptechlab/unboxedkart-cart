import React from "react";
import { getFeaturedProducts } from "../../../handler-functions/products/featured-products/get-all-featured-products";
import { getRelatedProducts } from "../../../handler-functions/products/related-products/get-related-product";
import ProductsBlockGrid from "../products-block-grid";
import ProductsBlockScroll from "../products-block-scroll";

interface RelatedProductsBlockProps {
  id: string;
}

const RelatedProductsBlock = (props: RelatedProductsBlockProps) => {
  const id = props.id;

  const { data, isLoading, error } = getRelatedProducts(id);

  return (
    <div className="">
      <ProductsBlockGrid
        //   className="bg-white"
        heading={"Products you may also like"}
        products={data}
        isLoading={isLoading}
        //   error={error?.message}
        uniqueKey="best-sellers"
      />
    </div>

  );

  return (
    // <div className="bg-red-500"><p>{data?.length}</p></div>


    <ProductsBlockScroll
      //   className="bg-white"
      heading={"Related Products"}
      products={data}
      isLoading={isLoading}
      //   error={error?.message}
      uniqueKey="related-products"
    />
  );
};

export default RelatedProductsBlock;
