
import router, { useRouter } from "next/router";
import Drawer from "rc-drawer";
import { BiDownload, BiHome, BiHomeCircle, BiHomeHeart } from "react-icons/bi";
import { CgHomeAlt } from "react-icons/cg";
import { FaDownload, FaHome } from "react-icons/fa";
import { IoDownload, IoDownloadOutline, IoHomeOutline, IoMenuOutline, IoSearch } from "react-icons/io5";
import { useUI } from "../../../../../contexts/ui.context";
import { siteSettings } from "../../../../../settings/site-settings";
// import { useUI } from "../../../../../contexts/ui.context";
import { getDirection } from "../../../../../utils/get-direction";
import DownloadNowIcon from "../../../../icons/download-icon";
import HomeIcon from "../../../../icons/home-icon";
import MenuIcon from "../../../../icons/menu-icon";
import SearchIcon from "../../../../icons/search-icon";
import UserIcon from "../../../../icons/user-icon";
import Link from "../../../../widgets/link";
import HeaderMenu from "../../desktop/desktop-menu";
import CartIcon from "../cart-icon";
import MobileMenu from "../mobile-menu";
import SideNavbar from "./side-bar";

const BottomNavigation: React.FC = () => {
  const { site_header } = siteSettings;
  const {
    openSidebar,
    setDrawerView,
    openModal,
    setModalView,
    closeSidebar,
    displaySidebar,
  } = useUI();

  const { locale } = useRouter();
  const dir = getDirection(locale);
  const contentWrapperCSS = dir === "ltr" ? { left: 0 } : { right: 0 };

  function handleMobileMenu() {
    setDrawerView("MOBILE_MENU");
    return openSidebar();
  }

  // const { isAuth } = useAuth();

  function handleLogin() {
    setModalView("LOGIN_VIEW");
    return openModal();
  }

  function handlePushToCart() {
    router.push("/my-account/cart");
  }

  const scrollToTop = () => {
    // openSearch();
    // setModalView("SEARCH");
    // return openModal();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const MenuButton = () => {
    return (
      <button
        aria-label="Menu"
        className="menuBtn flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none"
        onClick={handleMobileMenu}
      >
        <MenuIcon className="text-white" />
      </button>
    );
  };

  const SearchButton = () => {
    return (
      <button
        className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
        onClick={scrollToTop}
        aria-label="search-button"
      >
        <SearchIcon className="text-white" />
      </button>
    );
  };

  // const CartButton = () => {
  //   return (
  //     <button
  //       className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
  //       onClick={!isAuth ? handleLogin : handlePushToCart}
  //       aria-label="search-button"
  //     >
  //       <CartIcon />
  //     </button>
  //   );
  // };

  const HomeButton = () => {
    return (
      <Link href="/">
        <HomeIcon color="white" />
      </Link>
    );
  };

  const DownloadNowButton = () => {
    return (
      <Link href="/">
        {/* <FontAwesomeIcon icon={"fa-solid fa-arrow-down-to-line"} /> */}
        {/* <DownloadNowIcon/> */}
        <IoDownloadOutline className="text-white text-2xl" />
      </Link>
    );
  };

  const ProfileButton = () => {
    return (
      <button
        className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
        onClick={scrollToTop}
        aria-label="search-button"
      >
        <UserIcon />
      </button>
    );
  };

  // function handleMobileMenu() {
  //   setDrawerView("MOBILE_MENU");
  //   return openSidebar();
  // }

  return (
    <>
      <div className="md:hidden bg-unboxedkartBlue fixed z-10 bottom-0 flex items-center justify-between shadow-bottomNavigation text-gray-700 body-font bg-white w-full h-14 sm:h-16 px-4">
        {/* <button
          aria-label="Menu"
          className="menuBtn flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none"
          onClick={handleMobileMenu()}
        >
          <MenuIcon />
        </button> */}
        {/* <MenuButton/> */}
        {/* <SideNavbar></SideNavbar> */}
        {/* <MobileMenu
          data={site_header.menu} 
        /> */}

        {/* <MenuButton /> */}
        {/* <button onClick={() => displaySidebar}>
          <IoMenuOutline className="text-white text-2xl" />
        </button> */}
         <Link href={'/'}>
          <BiHome className="text-white text-2xl" />
        </Link>
        <Link href={'/search-page'}>
          <IoSearch className="text-white text-2xl" />
        </Link>
       
        <Link href={'/download'}>
          <IoDownloadOutline className="text-white text-2xl" />
        </Link>
      </div>
      <Drawer
        placement={dir === "rtl" ? "right" : "left"}
        open={displaySidebar}
        onClose={closeSidebar}
        handler={false}
        showMask={true}
        level={null}
        contentWrapperStyle={contentWrapperCSS}
      >
        <MobileMenu />
      </Drawer>
    </>
  );
};

export default BottomNavigation;

{
  /* <AuthMenu
isAuthorized={isAuthorized}
href={ROUTES.ACCOUNT}
className="flex-shrink-0"
btnProps={{
  className: "flex-shrink-0 focus:outline-none",
  children: <UserIcon />,
  onClick: handleLogin,
}}
></AuthMenu> */

  {
    /* <Drawer
        placement={dir === "rtl" ? "right" : "left"}
        open={displaySidebar}
        onClose={closeSidebar}
        handler={false}
        showMask={true} 
        level={null}
        contentWrapperStyle={contentWrapperCSS}
      >
        <MobileMenu /> 
      </Drawer> */
  }

  //   const AuthMenu = dynamic(
  // 	() => import("src/Components/layout/header/auth-menu"),
  // 	{
  // 	  ssr: false,
  // 	}
  //   );
  //   const MobileMenu = dynamic(
  // 	() => import("src/Components/layout/header/mobile-menu")
  //   );
}

// const CartButton = dynamic(() => import("@components/cart/cart-button"), {
// 	ssr: false,
// });


{/* <MenuButton /> */ }
{/* <SearchButton /> */ }
{/* <HomeButton /> */ }
{/* <DownloadNowButton /> */ }

{/* DownloadNowButton */ }
{/* <CartButton /> */ }
{/* <ProfileButton /> */ }


{/* <Drawer
placement={dir === "rtl" ? "right" : "left"}
open={displaySidebar}
onClose={closeSidebar}
handler={false}
showMask={true}
level={null}
contentWrapperStyle={contentWrapperCSS}
>
<MobileMenu />
</Drawer> */}