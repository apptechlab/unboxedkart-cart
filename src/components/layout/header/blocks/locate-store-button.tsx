import Cookies from "js-cookie";
import React from "react";
import { IoStorefrontOutline } from "react-icons/io5";

function getCookie() {
  const authId = Cookies.get("authId");
  console.log("authID", authId);
  Cookies.remove("authId");
}

function navigateToStoresPage() {
  window.open(`/stores`);
}

const LocateStoreButton = () => {
  return (
    <button onClick={navigateToStoresPage}>
      <div className="flex flex-row px-4">
        <IoStorefrontOutline className="h-6 w-6 text-white" />
        <p className="text-white font-bold hover:underline px-2 font-trebuchet">
          Store locator
        </p>
      </div>
    </button>
  );

  return (
    <div className="flex flex-row">
      <IoStorefrontOutline className="h-8 w-8 text-white" />
      <p className="text-white font-bold pl-2 text-lg self-center pb-2">
        Locate our store
      </p>
    </div>
  );
};

export default LocateStoreButton;
