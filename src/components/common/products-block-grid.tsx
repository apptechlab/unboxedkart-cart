import React from "react";
import { ProductType } from "../../types/product.type";
import ProductFeedLoader from "../loaders/product-feed-loader";
import ProductWidgetVertical from "../models/product-vertical.widget";

interface ProductsBlockGridProps {
  heading: string;
  products: any;
  isLoading: boolean;
  uniqueKey: string;
}

const ProductsBlockGrid = (props: ProductsBlockGridProps) => {
  const heading = props.heading;
  const products = props.products;
  const isLoading = props.isLoading;
  const uniqueKey = props.uniqueKey;

  return (
    products != undefined && products?.length > 0 ?
      <div className="bg-backgroundGrey m-4">
        <p className="text-xl font-bold text-black py-4 px-2">{heading}</p>
        {/* <Divider className="m-0" /> */}
        {
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
            {isLoading && !products?.length ? (
              <ProductFeedLoader limit={10} uniqueKey={uniqueKey} />
            ) : (
              // (
              //   <p>{products}</p>
              // )
              products?.map((product: ProductType) => (
                <ProductWidgetVertical
                  key={`product--key${product._id}`}
                  product={product}
                />
              ))
            )}
          </div>
        }
      </div> : <div></div>
  );
};

export default ProductsBlockGrid;
