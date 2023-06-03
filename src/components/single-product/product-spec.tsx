import { SingleSpec } from "./single-spec";

const ProductSpec = (props: any) => {

  const specs = props.specs;
  const title = specs.title;
  const values = specs.values;
  const organisedValues = Object.entries(values);



  return (
    <div className="border-t-2 border-gray-500 border-opacity-30 p-2 my-1">
      <p className="font-semibold text-black py-2">{title} : </p>
      <div>
        {organisedValues.map(([key, value]) => {
          return <SingleSpec title={key} value={value} key={key}/>;
        })}
      </div>
     
    </div>
  );
};

export { ProductSpec };

