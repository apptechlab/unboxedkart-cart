import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsChatDots, BsPhoneLandscape, BsStarHalf } from "react-icons/bs";
import {BiMap} from "react-icons/bi"
import {
	IoCartOutline, IoLogOutOutline, IoPersonOutline
} from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import myAccount from "../../../public/strings/my-account.json";
import { ROUTES } from "../../utils/routes";


// ACCOUNT_DETAILS: "/my-account/account-details",
// ORDERS: "/my-account/orders",
// ADDRESSES : "/my-account/addresses",
// ADD_ADDRESS : "/my-account/add-address",
// WISHLIST : "/my-account/wishlist",
// CHATS : "/my-account/chats",
// REVIEWS_AND_RATINGS:"/my-account/reviews-and-ratings",

const accountMenu = [
  {
    slug: ROUTES.ACCOUNT_DETAILS,
    name: myAccount["text-account-details"],
    icon: <IoPersonOutline className="w-5 h-5" />,
  },
  {
    slug: ROUTES.ADDRESSES,
    name: myAccount["text-addresses"],
    icon: <BiMap className="w-5 h-5" />,
  },
  {
    slug: ROUTES.ORDERS,
    name: myAccount["text-orders"],
    icon: <IoCartOutline className="w-5 h-5" />,
  },
  {
    slug: ROUTES.WISHLIST,
    name: myAccount["text-wishlist"],
    icon: <MdFavoriteBorder className="w-5 h-5" />,
  },
  {
    slug: ROUTES.CHATS,
    name: myAccount["text-chats"],
    icon: <BsChatDots className="w-5 h-5" />,
  },
  {
    slug: ROUTES.CHATS,
    name: myAccount["text-help"],
    icon: <BsPhoneLandscape className="w-5 h-5" />,
  },
  {
    slug: ROUTES.REVIEWS_AND_RATINGS,
    name: myAccount["text-reviews-and-ratings"],
    icon: <BsStarHalf className="w-5 h-5" />,
  },
];

export default function AccountNav() {
  // const { mutate: logout } = useLogoutMutation();
  const { pathname } = useRouter();
  // const {logout} = useAuth();
  const newPathname = pathname.split("/").slice(2, 3);
  const mainPath = `/${newPathname[0]}`;

  
  return (
    <nav className="bg-white py-4 p-0 md:p-4 lg:p-4 2xl:p-4 m-0 md:m-4 lg:m-4 2xl:m-4 h-full">
      {accountMenu.map((item) => {
        const menuPathname = item.slug.split("/").slice(2, 3);
        const menuPath = `/${menuPathname[0]}`;

        return (
          <Link key={item.slug} href={item.slug}>
            <a
              className={
                mainPath === menuPath
                  ? "bg-blue-100 font-semibold text-blue-500 flex items-center cursor-pointer text-sm lg:text-sm py-3.5 px-4 lg:px-5"
                  : "flex items-center cursor-pointer text-sm lg:text-sm text-heading font-normal py-3.5 px-4 lg:px-5 rounded mb-2 hover:bg-blue-100"
              }
            >
              {item.icon}
              <span className="ps-2">{(`${item.name}`)}</span>
            </a>
          </Link>
        );
      })}
      <button
        className="flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 focus:outline-none"
      >
        <IoLogOutOutline className="w-5 h-5" />
        <span className="ps-2 text-sm">{myAccount["text-logout"]}</span>
      </button>
      <div className="h-80"></div>
    </nav>
  );
}

// return (
//   <nav className="m-8 py-8 bg-white flex flex-col md:w-2/6 2xl:w-4/12 md:pe-8 lg:pe-12 xl:pe-16 2xl:pe-20 pb-2 md:pb-0">
//     {accountMenu.map((item) => {
//       const menuPathname = item.slug.split("/").slice(2, 3);
//       const menuPath = `/${menuPathname[0]}`;

//       return (
//         <Link key={item.slug} href={item.slug}>
//           <a
//             className={
//               mainPath === menuPath
//                 ? "bg-gray-100 font-semibold text-blue-500 flex items-center cursor-pointer text-sm lg:text-base py-3.5 px-4 lg:px-5"
//                 : "flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 rounded mb-2"
//             }
//           >
//             {item.icon}
//             <span className="ps-2">{(`${item.name}`)}</span>
//           </a>
//         </Link>
//       );
//     })}
//     <button
//       className="flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 focus:outline-none"
//       onClick={() => logout()}
//     >
//       <IoLogOutOutline className="w-5 h-5" />
//       <span className="ps-2">{("text-logout")}</span>
//     </button>
//   </nav>
// );
