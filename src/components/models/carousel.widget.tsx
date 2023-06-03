import Image from "next/image";
import React from "react";
import { CarouselType } from "../../types/carousel.type";

interface CarouselWidgetProps {
  carouselItem: CarouselType;
}

const CarouselWidget = (props: CarouselWidgetProps) => {
  const carouselItem = props.carouselItem;
  return (
    <div className="bg-black">
      <Image src={carouselItem.imageUrl} width={100} height={100} alt={props.carouselItem.title} />
      {/* <p>Hello world</p> */}
    </div>
  );
};

export default CarouselWidget;
