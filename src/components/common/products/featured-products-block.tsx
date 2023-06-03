import React from "react";
import { getFeaturedProducts } from "../../../handler-functions/products/featured-products/get-all-featured-products";
import ProductsBlockGrid from "../products-block-grid";

interface FeaturedProductsBlockProps {
  brand: any;
  category: any;
  condition: any;
}

const FeaturedProductsBlock = (props: FeaturedProductsBlockProps) => {
  const brand = props.brand;
  const category = props.category;
  const condition = props.condition;

  const { data, isLoading, error } = getFeaturedProducts(
    category,
    brand,
    condition
  );

  // return <p>Hello world</p>;

  return (
    <ProductsBlockGrid
      //   className="bg-white"
      heading={"Featured Products"}
      products={data}
      isLoading={isLoading}
      //   error={error?.message}
      uniqueKey="featured-products"
    />
  );
};

export default FeaturedProductsBlock;
