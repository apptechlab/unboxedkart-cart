import React from "react";
import CategoryWidget from "../models/category.widget";

type CategoriesBlockProps = {
  categories: any;
  url: string;
};

const CategoriesBlock = (props: CategoriesBlockProps) => {
  const categories = props.categories;
  const url = props.url;
  return (
    <div className="flex flex-col m-2 ">
      <h1 className="font-semibold text-black text-xl font-bold mx-2 py-4 sm:ml-3">
        Shop By Category
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-0 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
        {categories.map((category: any, index:number) => {
          return (
            <CategoryWidget
              key={index}
              url={`${url}${category.slug}`}
              imageUrl={category.imageUrl}
              title={category.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesBlock;
