
import Image from "next/image";
import Link from "../../widgets/link";

export const ServicesBox = () => {
  const services = [
    {
      id: 1,
      img: "assets/images/service/mobile-phone.webp",
      title: "Apple iPhone",
    },
    {
      id: 2,
      img: "assets/images/service/laptop.webp",
      title: "Apple Macbook",
    },
    {
      id: 3,
      img: "assets/images/service/tablet.webp",
      title: "Apple iPad",
    },
    {
      id: 4,
      img: "assets/images/service/imac.png",
      title: "Apple iMac",
    },
    {
      id: 5,
      img: "assets/images/service/mac_mini.png",
      title: "Mac Mini",
    },
    {
      id: 6,
      img: "assets/images/service/watch.webp",
      title: "Apple Watch",
    },
  ];

  return (
    // <div className="w-full md:w-auto h-auto flex flex-col md:grid md:grid-cols-3 gap-1 pt-5 px-0 md:px-28">
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-x-0 md:gap-x-3 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 m-0">
      {services.map((service: any, index) => {
        return (
          <Link href={`/service/${service.slug}`} key={index}>
            <div className="shadow-2xl">
              <>
                <div className="group hover:shadow-product flex rounded-2xl cursorpointer flex-col py-0 px-0 m-2 bg-white">
                  <div className="object-contain w-100 h-150 lg:m-4 xs:m-2 sm:m-4 md:m-4">
                    <Image
                      src={service.img}
                      width="300"
                      height="300"
                      className="object-contain p-2"
                      alt={"Service name"}
                    />
                  </div>
                  <div className="text-center">
                    <button>
                      <p className="text-black text-sm lg:text-lg 2xl:text-lg font-bold text-right group-hover:text-blue-500 my-1 pb-2 ">
                        {service.title}
                      </p>
                    </button>
                  </div>
                </div>
              </>
            </div>
          </Link>
        );
      })}
      <div className="h-30"></div>
    </div>
    // </div>
  );
};
