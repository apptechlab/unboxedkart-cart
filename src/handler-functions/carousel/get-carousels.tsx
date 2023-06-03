
import { useQuery } from "react-query";
import http from "../../rest-api/utils/http";
import { CarouselType } from "../../types/carousel.type";


export const fetchCarouselItems = async (placement?: string) => {
  let url = `https://server.unboxedkart.com/carousel-items?placement=${placement}`;
  const response = await http.get(url);
  return response.data as CarouselType[];
};

export const getCarouselItemsQuery = (placement: string) => {
  return useQuery<CarouselType[], Error>("fetchCarouselItems", () =>
    fetchCarouselItems(placement)
  );
};
