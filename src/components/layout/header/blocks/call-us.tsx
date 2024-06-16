import React from "react";
import { IoCallOutline } from "react-icons/io5";

const CallUsButton = () => {
  // return (
  //   <div className="flex flex-row px-4">
  //     <IoCallOutline className="h-6 w-6 text-white" />
  //     <p className="text-white font-bold hover:underline px-2 font-trebuchet">
  //       {/* +91 850-8484848 */}
  //       +91 7-05-05-05-05-9
  //     </p>
      
  //   </div>
  // );
  return (
    <div className="flex flex-row justify-center">
      <IoCallOutline className="h-6 w-6 text-white " />
      <p className="text-white font-bold text-lg pl-2 self-center font-trebuchet pb-2">
        +91 850-8484848
      </p>
    </div>
  );
};

export default CallUsButton;
