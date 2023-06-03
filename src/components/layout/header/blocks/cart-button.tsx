// import { useUI } from "@contexts/ui.context";
// import { useAuth } from "contexts/authContext";
import { useRouter } from "next/router";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

const CartButton = () => {
  // const { isAuth, login, userName } = useAuth();
  const router = useRouter();

  // const {
  //   openSidebar,
  //   setDrawerView,
  //   openSearch,
  //   openModal,
  //   setModalView,
  //   isAuthorized,
  // } = useUI();

  function handleLogin() {
    // setModalView("LOGIN_VIEW");
    // return openModal();
  }

  function handlePushToCart() {
    router.push("my-account/cart");
  }

  return (
    // <button onClick={!isAuth ? handleLogin : handlePushToCart}>
      <div className="flex flex-row justify-center">
        <IoCartOutline className="h-5 w-5 md:h-8 lg:h-8 md:w-8 lg:w-8 text-white " />
        <p className="text-sm md:text-lg lg:text-lg text-white font-bold pl-2 self-center pb-2">
          Cart
        </p>
      </div>
    // </button>
  );
};

export default CartButton;
