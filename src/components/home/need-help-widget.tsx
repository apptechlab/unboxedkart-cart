import React from "react";

const NeedHelpWidget = () => {
  return (
    <div className="bg-white p-4 my-4 mx-2 rounded-2xl flex flex-col">
      <h2 className="text-unboxedkartBlue text-l font-bold">
        Need help while shopping with us ?{" "}
      </h2>
      <h3 className="text-sm pt-2">Hello 👋</h3>
      <h3 className="text-sm pb-2">
        Do you have any concerns as you shop? We&quot; ll work with you to improve
        your shopping experience with us
      </h3>
      <div className="self-center">
        <button className="bg-unboxedkartBlue text-white rounded-2xl py-1 px-4 text-sm font-bold">
          CALL NOW
        </button>
        <h3 className="text-unboxedkartBlue text-sm self-center px-3">
          850-8484848
        </h3>
      </div>
    </div>
  );
};

export default NeedHelpWidget;
