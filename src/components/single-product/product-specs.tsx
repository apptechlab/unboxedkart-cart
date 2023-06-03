import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProductsApi } from "../../pages/api/products.api";
import { ProductSpec } from "./product-spec";

const ProductSpecs = () => {
  const router = useRouter();
  const productId = router.query.id;
  //   const { data, isLoading, error } = getProductSpecs(productId);

  const [isLoading, setIsLoading] = useState(true);
  const [productSpecs, setProductSpecs] = useState<Array<any>>();



  useEffect(() => {
    const productsApi: ProductsApi = new ProductsApi();
    async function getProductsSpecs(productId: string) {
      console.log("getting product data");
      if (productId != null) {
        const data = await productsApi.getProductSpecs(productId);
        console.log("fetched data", typeof data);
        setProductSpecs(data);
        setIsLoading(false);
      }
    }
    getProductsSpecs(productId as string);
  }, [productId]);

  return (
    <div className="border-2 border-gray-500 border-opacity-30 bg-white rounded-2xl p-4">
      <p className="font-semibold text-md text-black p-2 my-0">Product Specs</p>
      {/* <Divider/> */}
      <div>
        {productSpecs?.map((spec: any, index: number) => {
          console.log(spec.title);
          console.log(spec.values);
          return <ProductSpec specs={spec} key={`${index}`} />;
        })}
      </div>
    </div>
  );
};

export { ProductSpecs };
