import React, { useLayoutEffect, useRef, useState } from "react";
import { siteSettings } from "../../../../settings/site-settings";
import Logo from "../../../widgets/logo";
import CallUsButton from "../blocks/call-us";
import CartButton from "../blocks/cart-button";
import LocateStoreButton from "../blocks/locate-store-button";
import Search from "../blocks/search";
import SigninButton from "../blocks/signin-button";
import MobileHeader from "../mobile/mobile-header";
import HeaderMenu from "./desktop-menu";

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const { site_header } = siteSettings;

const Header: React.FC = () => {
  // const { openSidebar, setDrawerView, openModal, setModalView } = useUI();

  const [width, height] = useWindowSize();
  console.log("windowSize", width, height);

  const siteHeaderRef = useRef() as DivElementRef;
  // addActiveScroll(siteHeaderRef);

  // function handleLogin() {
  //   setModalView("LOGIN_VIEW");
  //   return openModal();
  // }

  // function handleMobileMenu() {
  //   setDrawerView("MOBILE_MENU");
  //   return openSidebar();
  // }

  // return <div>{width < 800 ? <MobileHeader /> : <DesktopHeader />}</div>;

  return (
    <header
      id="siteHeader"
      ref={siteHeaderRef}
      className="h-5 h-20 relative z-10"
    >
      <div>
        {width > 1200 ? (
          <div className="flex flex-col bg-unboxedkartBlue h-100 innerSticky fixed top-0 left-0 right-0 w-full px-10">
            <div className="flex flex-row justify-between pt-2 w-full">
              <div className="flex flex-row justify-start w-1/2">
                <div className="">
                  <Logo />
                </div>
                <div className="pl-4 w-100 w-3/4 h-1">
                  <Search />
                </div>
              </div>
              <div className="flex flex-row mx-4 justify-end w-1/2">
                <div className="mx-4">
                  {/* <SigninButton handleLogin={handleLogin} /> */}
                </div>
                {width > 800 ? (
                  <div className="mx-4">
                    {/* <CartButton /> */}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {/* <Divider className="py-0 bg-gray-500" /> */}
            <div className="flex flex-row justify-between">
              <div className="flex flex-row px-0 ">
                <HeaderMenu
                  data={site_header.menu}
                  className="hidden lg:flex md:ms-6 xl:ms-10"
                />
              </div>
              <div className="flex flex-row justify-between">
                <div>
                  <CallUsButton />
                </div>
                <div>
                  <LocateStoreButton />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <MobileHeader/>
        )}
      </div>
    </header>
  );
};

export default Header;

// const AuthMenu = dynamic(() => import("../auth-menu"), { ssr: false });
// const CartButton = dynamic(() => import("@components/cart/cart-button"), {
//   ssr: false,
// });

// const productGalleryCarouselResponsive = {
//   "768": {
//     slidesPerView: 2,
//   },
//   "0": {
//     slidesPerView: 1,
//   },
// };

// return (
//   <header
//     id="siteHeader"
//     ref={siteHeaderRef}
//     className="w-full h-16 sm:h-20 lg:h-24 relative z-20"
//   >
//     <div className="innerSticky text-gray-700 body-font fixed bg-white w-full h-16 sm:h-20 lg:h-24 z-20 ps-4 md:ps-0 lg:ps-6 pe-4 lg:pe-6 transition duration-200 ease-in-out">
//       <div className="flex items-center justify-center mx-auto max-w-[1920px] h-full w-full">
//         <button
//           aria-label="Menu"
//           className="menuBtn hidden md:flex lg:hidden flex-col items-center justify-center px-5 2xl:px-7 flex-shrink-0 h-full outline-none focus:outline-none"
//           onClick={handleMobileMenu}
//         >
//           <span className="menuIcon">
//             <span className="bar" />
//             <span className="bar" />
//             <span className="bar" />
//           </span>
//         </button>
//         <Logo />

//         <div className="flex-shrink-0 ms-auto lg:me-5 xl:me-8 2xl:me-10">
//           <h1>Call us : 850 8484848</h1>
//           {/* <LanguageSwitcher /> */}
//         </div>
//         <div className="hidden md:flex justify-end items-center space-s-6 lg:space-s-5 xl:space-s-8 2xl:space-s-10 ms-auto flex-shrink-0">
//           <button
//             className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
//             onClick={openSearch}
//             aria-label="search-button"
//           ></button>
//           <div className="-mt-0.5 flex-shrink-0">
//             <AuthMenu
//               isAuthorized={isAuthorized}
//               href={ROUTES.ACCOUNT}
//               className="text-sm xl:text-base text-heading font-semibold"
//               btnProps={{
//                 className:
//                   "text-sm xl:text-base text-heading font-semibold focus:outline-none",
//                 children: "text-sign-in",
//                 onClick: handleLogin,
//               }}
//             >
//               {"text-account"}
//             </AuthMenu>
//           </div>
//           <CartButton />
//         </div>
//       </div>
//     </div>
//   </header>
// );

// return (
//   <header
//     id="siteHeader"
//     ref={siteHeaderRef}
//     className="w-full h-16 sm:h-20 lg:h-24 relative z-20"
//   >
//     <div className="flex flex-col bg-blueDark h-100 innerSticky fixed w-full">
//       <div className="flex flex-row justify-between pt-2 w-full">
//         <div className="flex flex-row justify-start w-1/2">
//           <div className="pt-2 pl-4 pr-4 w-1/4">
//             <Logo />
//           </div>
//           <div className="pl-4 w-100 w-3/4 h-1">
//             <Search />
//           </div>
//         </div>
//         <div className="flex flex-row mx-4 justify-end w-1/2">
//           <div className="mx-4">
//             <SigninButton />
//           </div>
//           <div className="mx-4">
//             <CartButton />
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-row justify-between">
//         <div className="flex flex-row px-0 ">
//           <HeaderMenu
//             data={site_header.menu}
//             className="hidden lg:flex md:ms-6 xl:ms-10"
//           />
//         </div>
//         <div className="flex flex-row px-0">
//           <div className="flex flex-row px-4">
//             <IoStorefrontOutline className="h-6 w-6 text-white" />
//             <p className="text-white font-bold hover:underline px-2">
//               Locate our store
//             </p>
//           </div>
//           <div className="flex flex-row px-4">
//             <IoCallOutline className="h-6 w-6 text-white" />
//             <p className="text-white font-bold hover:underline px-2 ">
//               +91 850-8484848
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </header>
// );
