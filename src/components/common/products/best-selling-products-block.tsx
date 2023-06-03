import React from "react";
import { getBestSellerProducts } from "../../../handler-functions/products/best-seller-products/get-all-best-seller-products";
import { getFeaturedProducts } from "../../../handler-functions/products/featured-products/get-all-featured-products";
import ProductsBlockGrid from "../products-block-grid";

interface BestSellingProductsBlockProps {
  brand: any;
  category: any;
  condition: any;
}

const BestSellingProductsBlock = (props: BestSellingProductsBlockProps) => {
  const brand = props.brand;
  const category = props.category;
  const condition = props.condition;

  const { data, isLoading, error } = getBestSellerProducts(
    category,
    brand,
    condition
  );

  // return <p>Hello world</p>;

  return (
    <ProductsBlockGrid
      //   className="bg-white"
      heading={"Best Selling Products"}
      products={data}
      isLoading={isLoading}
      //   error={error?.message}
      uniqueKey="best-sellers"
    />
  );
};

export default BestSellingProductsBlock;
