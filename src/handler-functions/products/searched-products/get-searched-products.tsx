import { title } from "process";
import { useQuery } from "react-query";
import http from "../../../rest-api/utils/http";

type searchParameters = {
  title: string;
  brand: string;
  category: string;
  condition: string;
};

export const fetchSearchedProducts = async (params: searchParameters) => {
  const url = `search?title=${params.title}&brand=${params.brand}&category=${params.category}&condition=${params.condition}`;
  const response = await http.get(url);
  const data = response.data.products;
  const p = response.data.params;
  return data;
};

export const getSearchedProducts = (params: searchParameters) => {
  return useQuery<any, Error>("fetchSearchedProducts", () =>
    fetchSearchedProducts({
      title: params.title,
      brand: params.brand,
      category: params.category,
      condition: params.condition,
    })
  );
};
