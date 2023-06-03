const SingleSpec = (props: any) => {
    const { title, value } = props;
  
    return (
      <div className="flex items-start flex-row space-between">
        <p className="text-sm py-0 my-2 mr-2 w-1/3">{title}</p>
        <p className="text-sm text-black py-0 my-2 ml-2 w-2/3">{value}</p>
      </div>
    );
  };
  
  export { SingleSpec };
  