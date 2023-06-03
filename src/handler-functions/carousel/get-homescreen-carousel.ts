import { useQuery } from "react-query";
import http from "../../rest-api/utils/http";
// import { API_ENDPOINTS } from "src/rest-api/utils/api-endpoints";
// import http from "src/rest-api/utils/http";

export const fetchHomeScreenCarouselItems = async () => {
  const { data } = await http.get('');
  return data;
};
export const useHomescreenCarouselQuery = () => {
  return useQuery<any, Error>(
    ["fetcHomeScreenCarouselItems"],
    fetchHomeScreenCarouselItems
  );
};
