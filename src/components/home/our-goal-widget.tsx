import React from "react";
import { AiOutlineAccountBook } from "react-icons/ai";
import { FaStore, FaStoreAlt, FaUser } from "react-icons/fa";
import Image from "next/image";
import {
  IoCalendar,
  IoCallOutline,
  IoPhonePortraitOutline,
  IoStorefront,
} from "react-icons/io5";
import { siteSettings } from "../../settings/site-settings";

const OurGoalWidget = () => {
  interface customListTileProps {
    title: string;
    value: string;
    icon: any;
  }

  const CustomListTile = (props: customListTileProps) => {
    const { title, value, icon } = props;
    return (
      <div className="p-4">
        <div className="mb-2">{icon}</div>

        <p className="text-gray-800 font-semibold">{title}</p>
        <p className="text-3xl font-bold ">{value}</p>
      </div>
    );
  };

  const _data = [
    {
      title: "Our Customers",
      value: "5000+",
      icon: <FaUser className="text-unboxedkartBlue text-2xl" />,
    },
    {
      title: "Devices Sold",
      value: "7000+",
      icon: (
        <IoPhonePortraitOutline className="text-unboxedkartBlue text-2xl" />
      ),
    },
    {
      title: "Years in Service",
      value: "7+",
      icon: <IoCalendar className="text-unboxedkartBlue text-2xl " />,
    },
    {
      title: "Our Stores",
      value: "3",
      icon: <FaStoreAlt className="text-unboxedkartBlue text-2xl" />,
    },
  ];

  const AboutService = () => {
    return (
      <div className="my-4 mx-2 px-4 py-10">
        <p className="text-xl px-4 mb-5">
          We&lsquo;ve been in the reselling business for 7 years and our dedication to
          our customers has resulted in a fantastic community. We currently have
          5000+ customers across the country and still growing.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-x-0 md:gap-x-3 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
          {_data.map((data, index) => {
            return (
              <CustomListTile
                key={index}
                title={data.title}
                icon={data.icon}
                value={data.value}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <AboutService />
      <div className="bg-unboxedkartBlue pb-20 p-4 mb-4 rounded-2xl m-2">
        <div className="flex flex-row pl-2 my-4">
          <Image
            src={siteSettings.logo.url}
            alt={siteSettings.logo.alt}
            height={siteSettings.logo.height}
            width={siteSettings.logo.width}
            layout="fixed"
            loading="eager"
          />
          {/* <h1 className="font-alegreya text-3xl text-white font-bold pl-4 my-4">
            Unboxedkart
          </h1> */}
        </div>
        <h1 className="text-white text-xl pl-4 mr-20">
          We are passionate about technology and our goal is to build a bridge
          with solid foundation of trust and authenticity{" "}
        </h1>
        <h1 className="text-white text-sm pl-4 pt-4">
          Made by Team Unboxedkart @ Bengaluru{" "}
        </h1>
        <p></p>
      </div>
    </div>
  );
};

export default OurGoalWidget;
