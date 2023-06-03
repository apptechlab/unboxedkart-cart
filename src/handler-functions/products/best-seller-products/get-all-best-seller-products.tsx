import { useQuery } from "react-query";
import http from "../../../rest-api/utils/http";
import { ProductType } from "../../../types/product.type";


export const fetchBestSellingProducts = async (
  category?: string,
  brand?: string,
  condition?: string
) => {
  let url = "";
  if (category != null) {
    url = `https://server.unboxedkart.com/products/best-sellers?category=${category}`;
  } else if (brand != null) {
    url = `https://server.unboxedkart.com/products/best-sellers?brand=${brand}`;
  } else if (condition != null) {
    url = `https://server.unboxedkart.com/products/best-sellers?condition=${condition}`;
  }
  const response = await http.get(url);
  console.log(response);
  return response.data as ProductType[];
};

export const getBestSellerProducts = (
  category?: string,
  brand?: string,
  condition?: string
) => {
  return useQuery<ProductType[], Error>("fetchBestSellerProducts", () =>
    fetchBestSellingProducts(category, brand, condition)
  );
};
