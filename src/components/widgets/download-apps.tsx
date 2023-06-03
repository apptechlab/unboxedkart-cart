import Image from "next/image";
import cn from "classnames";
import Link from "./link";

const data = {
  title: "app-heading",
  subTitle: "app-sub-heading",
  appImage: "/assets/images/app-screenshot.png",
  appButtons: [
    {
      id: 1,
      slug: "https://apps.apple.com/in/app/unboxedkart/id1550972969",
      altText: "button-app-store",
      appButton: "/assets/images/app-store.svg",
      buttonWidth: 209,
      buttonHeight: 60,
    },
    {
      id: 2,
      slug: "https://play.google.com/store/apps/details?id=com.unboxedkart",
      altText: "button-play-store",
      appButton: "/assets/images/play-store.svg",
      buttonWidth: 209,
      buttonHeight: 60,
    },
  ],
};

interface Props {
  className?: string;
}

const DownloadApps: React.FC<Props> = ({ className }) => {
  const { appButtons, title, subTitle, appImage } = data;

  return (
    <div
      className={cn(
        "m-2 flex justify-between items-end rounded-lg bg-canvaYellow pt-5 md:pt-8 lg:pt-10 xl:pt-14 px-6 md:px-12 lg:px-20 2xl:px-24 3xl:px-36",
        className
      )}
    >
      <div className="flex-shrink-0 w-full sm:w-60 md:w-96 lg:w-auto lg:max-w-lg xl:max-w-xl lg:flex lg:items-center pb-5 md:pb-8 lg:pb-12 xl:pb-16">
        {/* <p className="font-bold text-xl text-white">The Unboxedkart App </p> */}
        <div className="py-4 md:py-6 xl:py-8 sm:text-start">
          <p className="font-bold text-xl text-black">Buy</p>
          <p className="font-bold text-xl text-unboxedkartBlue">PRE-OWNED</p>
          <p className="font-bold text-xl text-black">products at</p>
          <p className="font-bold text-xl text-unboxedkartBlue">AFFORDABLE PRICES</p>
          <div className="h-5"></div>
          <div className="flex justify-center sm:justify-start space-s-2 md:space-s-3 px-6 sm:px-0">
            {appButtons?.map((item) => (
              <Link
                key={item.id}
                href={item.slug}
                className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
              >
                <Image
                  src={item.appButton}
                  alt={`${item.altText}`}
                  className="w-36 lg:w-44 xl:w-auto p-1"
                  width={item.buttonWidth}
                  height={item.buttonHeight}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden sm:flex items-end ps-4 -me-0.5 2xl:-me-1.5 w-60 md:w-72 lg:w-96 xl:w-auto">
        <Image
          src={appImage}
          alt={"text-app-thumbnail"}
          width={450}
          height={430}
        />
      </div>
    </div>
  );
};

export default DownloadApps;
