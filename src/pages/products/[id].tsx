import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import RelatedProducts from "../../components/common/products/related-products";
import SimilarProducts from "../../components/common/products/similar-products";
import Layout from "../../components/layout/layout";
import ProductListCardLoader from "../../components/loaders/product-list-card-loader";
import { ProductImages } from "../../components/single-product/product-images";
import { ProductInfo } from "../../components/single-product/product-info";
import { ProductSpecs } from "../../components/single-product/product-specs";
import {
  fetchProduct
} from "../../handler-functions/products/single-product/get-product";
import { ProductType } from "../../types/product.type";
import Button from "../../components/widgets/button";

export default function ProductDetails() {
  const router = useRouter();
  const productId = router.query.id;
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<ProductType>();

  async function fetchproduct(pId: String) {
    console.log("getting product data");
    if (pId != null) {
      const data = await fetchProduct(pId);
      console.log("fetched data", typeof data);
      setProduct(data);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchproduct(productId as string);
  }, [productId]);

  return (
    <>
      {isLoading == false ? (
        <>
          <div className="">
            <div className="flex flex-col md:flex-row lg:flex-row h-full w-full pb-5 px-4">
              <div className="w-full md:w-2/5 lg:2/5 relative">
                <div className="sticky top-28 left-0 rounded-2xl bg-white mx-0 md:mx-4 p-4">
                  <ProductImages images={product?.imageUrls.images} />
                </div>
              </div>
              <div className="w-full md:w-3/5 lg:w-3/5 min-h-screen flex flex-col ">
                <ProductInfo product={product} />
                <ProductSpecs />
                {/* <ProductReviews />
                <div className="h-5" />
                <QuestionAndAnswers />
                <div className="h-5" /> */}
              </div>
            </div>
          </div>
          <RelatedProducts id={productId as string} />
          <SimilarProducts id={productId as string} />
          <div className="h-5"></div>
        </>
      ) : (
        <ProductListCardLoader />
      )}
    </>
  );
};



ProductDetails;


ProductDetails.Layout = Layout;