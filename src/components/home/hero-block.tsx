import { getCarouselItemsQuery } from "../../handler-functions/carousel/get-carousels";
import { useWindowSize } from "../../utils/use-window-size";
import Carousel from "../carousel/carousel";
import CarouselWidget from "../models/carousel.widget";
import { SwiperSlide } from "swiper/react";

const breakpoints = {
  "1500": {
    slidesPerView: 2,
  },
  "0": {
    slidesPerView: 1,
  },
};

const HeroBlock: React.FC = () => {
  const { width } = useWindowSize();
  // const { data } = useHomescreenCarouselQuery();
  // const carouselItems = data?.homescreenCarouselItems;
  const { data, isLoading, error } = getCarouselItemsQuery("home");
  return (
    <div className="heroBannerOne relative max-w-[1920px] mb-7 pt-5 mx-auto overflow-hidden px-4 md:px-4 2xl:px-0">
      <Carousel
        breakpoints={breakpoints}
        centeredSlides={width < 1500 ? false : true}
        autoplay={{ delay: 5000 }}
        className="mx-0"
        buttonClassName="hidden"
        pagination={{
          clickable: true,
        }}
      >
        {isLoading ? (
          <p>Loading</p>
        ) : (
          data?.map((carouselItem: any) => (
            <SwiperSlide
              className="carouselItem px-0 2xl:px-3.5"
              key={`carouselItem--key-${carouselItem?.id}`}
            >
              <CarouselWidget carouselItem={carouselItem} />
            </SwiperSlide>
          ))
        )}
      </Carousel>
    </div>
  );
};

export default HeroBlock;

// {data?.map((carouselItem: any) => (
//   <SwiperSlide
//     className="carouselItem px-0 2xl:px-3.5"
//     key={`carouselItem--key-${carouselItem?.id}`}
//   >
//     {/* <p>hello world</p> */}
//     <CarouselWidget carouselItem={carouselItem} />
//   </SwiperSlide>
// ))}
