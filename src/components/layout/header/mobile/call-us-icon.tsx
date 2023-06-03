import React from "react";
import { IoCallOutline } from "react-icons/io5";
import Link from "../../../widgets/link";

const CallUsIcon = () => {
  return (
    <Link href={"tel:+91-8508484848"}>
      <div>
        <IoCallOutline className="h-6 w-6 text-white" />
      </div>
    </Link>
  );
};

export default CallUsIcon;
