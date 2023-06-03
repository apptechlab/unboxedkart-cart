// import { useUI } from "@contexts/ui.context";
// import { useAuth } from "contexts/authContext";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";

type Props = {
  handleLogin: any;
};

const SigninButton = (props: Props) => {
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

  function handlePushToAccount() {
    // console.log("userName",userName);
    router.push("/my-account");
  }

  // console.log("user status", isAuth);
  
  return (
    // <button onClick={!isAuth ? handleLogin : handlePushToAccount}>
      <div className="flex flex-row">
        <AiOutlineUser className="h-5 w-5 md:h-8 lg:h-8 md:w-8 lg:w-8 text-white" />
        <p className="text-sm md:text-lg lg:text-lg text-white font-bold pl-2 self-center pb-2">
          {/* {!isAuth ? "Sign In" : userName} */}
        </p>
      </div>
    // </button>
  );
};

export default SigninButton;
