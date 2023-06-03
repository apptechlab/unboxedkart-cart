
import React from "react";
import { FaStoreAlt } from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";
import Link from "../../../widgets/link";

const StoreLocatorIcon = () => {
  return (
    <Link href={"/stores"}>
      <div>
        <FaStoreAlt className="h-6 w-6 text-white" />
      </div>
    </Link>
  );
};

export default StoreLocatorIcon;
