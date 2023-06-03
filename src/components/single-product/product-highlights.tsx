import React from "react";
import ProductHighlight from "./product-highlight";

interface HighlightsProps {
  highlightsData: any;
}

const ProductHighlights = (props: HighlightsProps) => {
  const highlights = props.highlightsData;
  
  return (
    <div>
      <div className=" my-3 font-semibold text-black text-md">Highlights</div>
      {highlights.map((highlight: string, index:number) => {
        return <ProductHighlight key={index} highlight={highlight} />
      })}
    </div>
  );
};

export default ProductHighlights;
