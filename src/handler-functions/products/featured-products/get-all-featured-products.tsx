import http from "../../../rest-api/utils/http";
import { ProductType } from "../../../types/product.type";
import { useQuery } from "react-query";

export const fetchFeaturedProducts = async (
  category?: string,
  brand?: string,
  condition?: string
) => {
  let url = "";
  if (category != null) {
    url = `https://server.unboxedkart.com/products/featured-products?category=${category}`;
  } else if (brand != null) {
    url = `https://server.unboxedkart.com/products/featured-products?brand=${brand}`;
  } else if (condition != null) {
    url = `https://server.unboxedkart.com/products/featured-products?condition=${condition}`;
  }
  console.log("getting featured products");
  const response = await http.get(url);
  console.log("response from server", response.data);
  return response.data as ProductType[];
};
export const getFeaturedProducts = (
  category?: string,
  brand?: string,
  condition?: string
) => {
  return useQuery<ProductType[], Error>(["fetchFeaturedProducts"], () =>
    fetchFeaturedProducts(category, brand, condition)
  );
};
