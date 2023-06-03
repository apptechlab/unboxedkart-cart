interface HighlightProps {
  highlight: string;
}

const ProductHighlight = (props: HighlightProps) => {
  const higlight = props.highlight;
  return (
    <div>
      <li className="text-black list-disc">{higlight}</li>
    </div>
  );
};

export default ProductHighlight;
