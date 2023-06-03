import http from "../../../rest-api/utils/http";
import { ProductType } from "../../../types/product.type";
import { useQuery } from "react-query";


export const fetchRelatedProducts = async (_slug: string) => {
	const response = await http.get(`https://server.unboxedkart.com/products/related-products/${_slug}`);
	console.log("got related products", response.data as ProductType[]);
	const data = response.data;
	return response.data as ProductType[];
};

export const getRelatedProducts = (slug: string) => {
	return useQuery<ProductType[], Error>(
		"fetchRelatedProducts", () =>
		fetchRelatedProducts(slug)
	);
};

