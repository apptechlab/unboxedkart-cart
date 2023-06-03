
import { useQuery } from "react-query";
import http from "../../../rest-api/utils/http";
import { ProductType } from "../../../types/product.type";


export const fetchProductSpecs = async (productId: any) => {
  const url = `https://server.unboxedkart.com/product-details/specs/${productId}`;
  const response = await http.get(url);
  console.log("single product response", response);
  const data = response.data;
  console.log("single product data", data);
  return data;
};

export const getProductSpecs = (slug: any) => {
  return useQuery<any, Error>([fetchProductSpecs], () =>
  fetchProductSpecs(slug)
  );
};

