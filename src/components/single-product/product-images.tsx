import React, { useState } from "react";
import Image from "next/image";
import { useWindowSize } from "react-use";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductImages = (props: any) => {
  const productGalleryCarouselResponsive = {
    "768": {
      slidesPerView: 2,
    },
    "0": {
      slidesPerView: 1,
    },
  };

  const images = props.images;
  console.log("images", images);
  const [image, setImage] = useState(images[0]);
  const { width } = useWindowSize();

  console.log(images);


  // return (
  //   <div className="flex flex-row">
  //     <div className="flex flex-col pb-40">
  //       {images.map((imageUrl: string, index: number) => {
  //         const isSelected = imageUrl == image ? true : false;
  //         return (
  //           <div
  //             className={`my-1 ${isSelected
  //               ? "border-blue-500 border-4"
  //               : "border-black border-2 border-opacity-30 "
  //               }`}
  //           >
  //             <button
  //               className="m-1"
  //               onClick={() => setImage(images[index])}
  //             >
  //               <Image
  //                 src={imageUrl}
  //                 height="50"
  //                 width="50"
  //                 className="object-contain"
  //               />
  //             </button>
  //           </div>
  //         );
  //       })}
  //     </div>
  //     <div className="flex w-7/8 my-2 mx-5 border-2 border-gray-500 p-2 border-opacity-10">
  //       <Image
  //         src={image}
  //         width="500"
  //         height="500"
  //         className="object-contain"
  //       />
  //     </div>
  //   </div>
  // )

  return (
    <div>
      {width < 1025 ? (
        <div className="flex flex-col">
          <div className="flex flex-row pb-0 self-center">
            {images.map((imageUrl: string, index: number) => {
              const isSelected = imageUrl == image ? true : false;
              return (
                <div
                  key={index}
                  className={`mx-1 ${isSelected
                    ? "border-blue-500 border-4"
                    : "border-black border-1.5 border-opacity-30 "
                    }`}
                >
                  <button
                    className="m-1"
                    onClick={() => setImage(images[index])}
                  >
                    <Image
                      src={imageUrl}
                      height="50"
                      width="50"
                      className="object-cover"
                      alt="image thumbnail"
                    />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="flex w-7/8 my-2 mx-5 border-0 border-gray-500 p-2 border-opacity-10">
            <Image
              src={image}
              width="500"
              height="500"
              className="object-contain"
              alt="Product Image"
            />
          </div>
        </div>





        //   <Image
        //   src={images[3]}
        //   width="500"
        //   height="500"
        //   className="object-contain"
        // />
        // <></>
        // <div className="w-600 h-600 bg-red-500">
        //   <Swiper
        //     className="w-600 h-600"
        //     direction={"vertical"}
        //     pagination={{
        //       // clickable: true,
        //     }}>
        //     {images?.map((image: string, index: number) => (
        //       <SwiperSlide key={`product-gallery-key-${index}`} className={h1}>
        //         <p>Hello world</p>
        //         {/* <Image
        //           src={image}
        //           width="500"
        //           height="500"
        //           className="object-cover"
        //         /> */}
        //       </SwiperSlide>
        //     ))}
        //   </Swiper>
        // </div>
      ) : (
        <div className="flex flex-row">
          <div className="flex flex-col pb-40">
            {images.map((imageUrl: string, index: number) => {
              const isSelected = imageUrl == image ? true : false;
              return (
                <div
                  key={index}
                  className={`my-1 ${isSelected
                    ? "border-blue-500 border-4"
                    : "border-black border-2 border-opacity-30 "
                    }`}
                >
                  <button
                    className="m-1"
                    onClick={() => setImage(images[index])}
                  >
                    <Image
                      src={imageUrl}
                      height="50"
                      width="50"
                      className="object-contain"
                      alt="Image thumbnail"
                    />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="flex w-7/8 my-2 mx-5 border-2 border-gray-500 p-2 border-opacity-10">
            <Image
              src={image}
              width="500"
              height="500"
              className="object-contain"
              alt="Product Image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export { ProductImages };




 //   <Slider
        //   slides={images}
        //   size="medium"
        //   slideInterval={6}
        //   inContainer
        //   className="mt-20 mb-20"
        // />
        // <Carousel
        // pagination={{
        //   clickable: true,
        // }}
        // breakpoints={productGalleryCarouselResponsive}
        // className="product-gallery pt-0"
        // buttonClassName="hidden"
        // >
        //   {images?.map((image: string, index: number) => (
        // <SwiperSlide key={`product-gallery-key-${index}`}>
        //   <Image
        //     src={image}
        //     width="100"
        //     height="100"
        //     className="object-contain self-center"
        //   />
        // </SwiperSlide>
        //   ))}
        // </Carousel>

        // <div className="p-12 flex justify-center w-screen md:w-1/2 items-center">
        //   <div className="relative w-full">
        //     <div className="carousel">
        //       {images.map((img: any)=> (
        //         <div className="w-full flex-shrink-0 self-center" key={img}>
        //           <img src={img} className="w-full object-contain" />
        //         </div>
        //       ))}
        //     </div>
        //   </div>
        // </div>
