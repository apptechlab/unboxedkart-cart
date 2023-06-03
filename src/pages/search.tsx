
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaBoxOpen } from "react-icons/fa";
import ProductsList from "../components/common/products-list";
import Layout from "../components/layout/layout";
import { ProductType } from "../types/product.type";
import { ProductsApi } from "./api/products.api";


export default function Search() {
  const router = useRouter();
  const query = router.query.q;
  const brand = router.query.brand;
  const category = router.query.category;
  const condition = router.query.condition;
  const productCode = router.query.productCode;
  const [isLoading, setIsLoading] = useState(true);
  const [searchedProducts, setSearchedProducts] =
    useState<Array<ProductType>>([]);


  useEffect(() => {
    const productsApi: ProductsApi = new ProductsApi();

    async function updateSearchedProducts(
      title: string,
      productCode: string,
      category: string,
      brand: string,
      condition: string,
    ) {
      const data = await productsApi.getSearchedProducts(
        title,
        productCode as string,
        category as string,
        brand as string,
        condition as string
      );
      console.log(
        "updating search results",
        title,
        productCode,
        category,
        brand,
        condition
      );
      setSearchedProducts(data);
      setIsLoading(false);
    }
    console.log("getting search");
    if (router.isReady) {
      console.log("query terms", query, brand, category, condition, productCode);
      const searchTerm: any = query;
      const newsearchTerm =
        searchTerm == undefined ? searchTerm : searchTerm.replace(/\s/g, "");
      setIsLoading(true);
      updateSearchedProducts(
        newsearchTerm,
        productCode as string,
        category as string,
        brand as string,
        condition as string
      );
    }
  }, [query, brand, category, condition, productCode, router.isReady]);

  return (
    (searchedProducts == null ?
      (<div className="flex flex-col place-items-center align-center pt-48">
        <FaBoxOpen className="text-unboxedkartBlue text-8xl" />
        <p className="text-center mx-10 my-2">Please try searching for the products you like.</p>
      </div>)
      :
      (<ProductsList
        isLoading={isLoading}
        // error={""}
        products={searchedProducts}
        uniqueKey="searched-products"
      />)
    )
  );
}

Search.Layout = Layout;

// export default function Search() {
//   return (
//     <div>

//     </div>
//   );
// }

// Search.Layout = Layout;
