import React from "react";
import BrandWidget from "../models/brand.widget";

type BrandBlockProps = {
  brands: any;
  slug: any;
};

const BrandsBlock = (props: BrandBlockProps) => {
  const brands = props.brands;
  return (
    <div className="flex flex-col m-2 ">
      <h1 className="font-semibold text-black text-xl font-bold mx-2 py-4 sm:ml-3">
        Shop By Brand
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-0 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
        {brands.map((brand: any, index:number) => {
          return (
            <BrandWidget
            key={index}
              url={`${props.slug}${brand.slug}`}
              // url={props.slug == '/brand/' ? `${props.slug}${brand.slug}` : `search?`}
              imageUrl={brand.imageUrl}
              slug={brand.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BrandsBlock;
