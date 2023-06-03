// const apiCalls: ApiCalls;

import { ProductType } from "../../types/product.type";
import { ApiCalls } from "./api_calls";

export class ProductsApi {
  apiCalls: ApiCalls = new ApiCalls();

  getProductSpecs = async (productId: string) => {
    const url = `https://server.unboxedkart.com/product-details/specs/${productId}`;
    const response = await this.apiCalls.get(url);
    return response;
  };

  getSearchedProducts = async (
    title?: string,
    productCode?: String,
    category?: string,
    brand?: string,
    condition?: string,
    pageNumber?: string
  ) => {
    console.log(
      "query terms final",
      title,
      productCode,
      category,
      brand,
      condition,
      pageNumber
    );
    let url = "";
    if (productCode != null) {
      url = `https://server.unboxedkart.com/search?productCode=${productCode}&p=1`;
    } else if (title != null) {
      url = `https://server.unboxedkart.com/search?title=${title}&p=1`;
    }
    else if (brand != null && category != null) {
      url = `https://server.unboxedkart.com/search?category=${category}&brand=${brand}&p=1`;
    } else if (brand != null && condition != null) {
      url = `https://server.unboxedkart.com/search?brand=${brand}&condition=${condition}&p=1`;
    } else if (condition != null && category != null) {
      url = `https://server.unboxedkart.com/search?category=${category}&condition=${condition}&p=1`;
    }
    console.log("searching", url);
    const response = await this.apiCalls.get(url);
    console.log("response from server", response);
    console.log("searched products", response);
    return response as ProductType[];
  };

  // getProductDescription = async (productId: string) => {
  //   const url = `https://server.unboxedkart.com/product-details/description/${productId}`;
  //   const { data } = await this.apiCalls.get(url);
  //   return data;
  // };

  // getProductReviews = async (productId: string) => {
  //   const url = `https://server.unboxedkart.com/reviews/product/${productId}`;
  //   const response = await this.apiCalls.get(url);
  //   console.log("product reviews", response.reviews);
  //   console.log("product reviews dtaa", response.reviewsData);
  //   return response;
  // };

  // getProductQandA = async (productId: string) => {
  //   const url = `https://server.unboxedkart.com/q-and-a/product/${productId}`;
  //   const response = await this.apiCalls.get(url);
  //   console.log("product questions", response);
  //   return response;
  // };
}

// console.log("terms", title, category, brand, condition);
//     if (title == undefined) {
//       if (category != undefined && brand != undefined) {
//         url = `https://server.unboxedkart.com/search?category=${category}&brand=${brand}`;
//       } else if (category != undefined && condition != undefined) {
//         url = `https://server.unboxedkart.com/search?category=${category}&condition=${condition}`;
//       } else if (brand != undefined && condition != undefined) {
//         url = `https://server.unboxedkart.com/search?brand=${brand}&condition=${condition}`;
//       }
//     } else {
//       url = `https://server.unboxedkart.com/search?title=${title}`;
//     }
