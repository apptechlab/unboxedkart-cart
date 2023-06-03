import React from "react";
import ConditionWidget from "../models/condition.widget";

type ConditionBlockProps = {
  slug: any;
};

const ConditionsBlock = (props: ConditionBlockProps) => {
  const conditions = [
    {
      conditionName: "UnBoxed",
      imageUrl:
        "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/conditions/unboxed.webp",
      slug: "unboxed",
    },
    {
      conditionName: "Grade A",
      imageUrl:
        "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/conditions/grade-a.webp",
      slug: "grade-a",
    },
    {
      conditionName: "Grade B",
      imageUrl:
        "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/conditions/grade-b.webp",
      slug: "grade-b",
    },
    {
      conditionName: "Grade C",
      imageUrl:
        "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/conditions/grade-c.webp",
      slug: "grade-c",
    },
  ];

  return (
    <div className="flex flex-col m-2">
      <h1 className="font-semibold text-black text-xl font-bold mx-2 py-4 sm:ml-3">
        Shop By Product Condition
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-0 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 m-0">
        {conditions.map((condition: any, index) => {
          return (
            <ConditionWidget
              key={index}
              url={`${props.slug}${condition.slug}`}
              imageUrl={condition.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ConditionsBlock;
