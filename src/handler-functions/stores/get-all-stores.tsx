import { useQuery } from "react-query";
import http from "../../rest-api/utils/http";
import { StoreType } from "../../types/store.type";

export const fetchStores = async () => {
  const url = "https://server.unboxedkart.com/store-location";
  const response = await http.get(url);
  console.log("single product response", response);
  const data = response.data;
  console.log("single product data", data);
  return data as StoreType[];
};                       

export const getStoresQuery = () => {
  return useQuery<StoreType[], Error>([fetchStores], () => fetchStores());
};

// export const fetchProduct = async (_slug: string) => {
// 	const { data } = await http.get(`${API_ENDPOINTS.PRODUCT}`);
// 	return data;
// };
// export const useProductQuery = (slug: string) => {
// 	return useQuery<Product, Error>([API_ENDPOINTS.PRODUCT, slug], () =>
// 		fetchProduct(slug)
// 	);
// };
