
import { useQuery } from "react-query";
import http from "../../../rest-api/utils/http";
import { ProductType } from "../../../types/product.type";


export const fetchProduct = async (productId: any) => {
  const url = `https://server.unboxedkart.com/products?q=${productId}`;
  const response = await http.get(url);
  console.log("single product response", response);
  const data = response.data;
  console.log("single product data", data);
  return data as ProductType;
};

export const useProductQuery = (slug: any) => {
  return useQuery<ProductType, Error>([fetchProduct], () =>
    fetchProduct(slug)
  );
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
