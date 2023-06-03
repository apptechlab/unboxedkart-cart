import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BrandsBlock from "../../components/common/brand-block";
import CategoriesBlock from "../../components/common/categories-block";
import ConditionsBlock from "../../components/common/conditions-block";
import BestSellingProductsBlock from "../../components/common/products/best-selling-products-block";
import FeaturedProductsBlock from "../../components/common/products/featured-products-block";
import StorePickUpWidget from "../../components/home/store-pickup-widget";
import Layout from "../../components/layout/layout";

const ConditionPage = () => {
  const router = useRouter();
  const condition: string = router.query.condition as string;

  const _data = {
    unboxed: {
      brands: [
        {
          brandName: "Apple",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/apple.webp",
          slug: "apple",
        },
        {
          brandName: "Samsung",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/samsung.webp",
          slug: "samsung",
        },
        {
          brandName: "Google",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/google.webp",
          slug: "google",
        },
        {
          brandName: "Oneplus",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/oneplus.webp",
          slug: "oneplus",
        },
      ],
      categories: [
        {
          categoryName: "Phone",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/mobile-phone.webp",
          slug: "mobile-phone",
        },
        {
          categoryName: "Laptop",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/laptop.webp",
          slug: "laptop",
        },
        {
          categoryName: "Earphones",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/earphones.webp",
          slug: "earphones",
        },
        {
          categoryName: "Tablet",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/tablet.webp",
          slug: "tablet",
        },
        {
          categoryName: "Speakers",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/speaker.webp",
          slug: "speaker",
        },
        {
          categoryName: "Accesories",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/accessories.webp",
          slug: "accessories",
        },
      ],
    },
    "grade-a": {
      brands: [
        {
          brandName: "Apple",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/apple.webp",
          slug: "apple",
        },
        {
          brandName: "Samsung",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/samsung.webp",
          slug: "samsung",
        },
        {
          brandName: "Huawei",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/huawei.webp",
          slug: "huawei",
        },
        {
          brandName: "Oneplus",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/oneplus.webp",
          slug: "oneplus",
        },
      ],
      categories: [
        {
          categoryName: "Phone",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/mobile-phone.webp",
          slug: "mobile-phone",
        },
        {
          categoryName: "Laptop",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/laptop.webp",
          slug: "laptop",
        },
        {
          categoryName: "Earphones",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/earphones.webp",
          slug: "earphones",
        },
        {
          categoryName: "Tablet",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/tablet.webp",
          slug: "tablet",
        },
        {
          categoryName: "Speakers",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/speaker.webp",
          slug: "speaker",
        },
        {
          categoryName: "Accesories",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/accessories.webp",
          slug: "accessories",
        },
      ],
    },
    "grade-b": {
      brands: [
        {
          brandName: "Apple",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/apple.webp",
          slug: "apple",
        },
        {
          brandName: "Samsung",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/samsung.webp",
          slug: "samsung",
        },
        {
          brandName: "Huawei",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/huawei.webp",
          slug: "huawei",
        },
        {
          brandName: "Oneplus",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/oneplus.webp",
          slug: "oneplus",
        },
      ],
      categories: [
        {
          categoryName: "Phone",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/mobile-phone.webp",
          slug: "mobile-phone",
        },
        {
          categoryName: "Laptop",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/laptop.webp",
          slug: "laptop",
        },
        {
          categoryName: "Earphones",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/earphones.webp",
          slug: "earphones",
        },
        {
          categoryName: "Tablet",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/tablet.webp",
          slug: "tablet",
        },
        {
          categoryName: "Speakers",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/speaker.webp",
          slug: "speaker",
        },
        {
          categoryName: "Accesories",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/accessories.webp",
          slug: "accessories",
        },
      ],
    },
    "grade-c": {
      brands: [
        {
          brandName: "Apple",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/apple.webp",
          slug: "apple",
        },
        {
          brandName: "Samsung",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/samsung.webp",
          slug: "samsung",
        },
        {
          brandName: "Huawei",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/huawei.webp",
          slug: "huawei",
        },
        {
          brandName: "Oneplus",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/oneplus.webp",
          slug: "oneplus",
        },
      ],
      categories: [
        {
          categoryName: "Phone",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/mobile-phone.webp",
          slug: "mobile-phone",
        },
        {
          categoryName: "Laptop",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/laptop.webp",
          slug: "laptop",
        },
        {
          categoryName: "Earphones",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/earphones.webp",
          slug: "earphones",
        },
        {
          categoryName: "Tablet",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/tablet.webp",
          slug: "tablet",
        },
        {
          categoryName: "Speakers",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/speaker.webp",
          slug: "speaker",
        },
        {
          categoryName: "Accesories",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/categories/accessories.webp",
          slug: "accessories",
        },
      ],
    },
  };
  // const { width } = useWindowSize();

  // const CoverImage = () => {
  //   return (
  //     <>
  //       <div className="flex mx-auto flex-col relative">
  //         <div className="flex">
  //           <Image
  //             src={`/assets/images/brand-covers/apple-cover.png`}
  //             alt={`apple-cover` || "text-card-thumbnail"}
  //             width={width}
  //             height={width / 3}
  //             className="bg-gray-300 object-cover sm:rounded-md transition duration-200 ease-in-out group-hover:opacity-90"
  //           />
  //         </div>
  //       </div>
  //     </>
  //   );
  // };

  return (
    <>
      {/* <Head>
        <title>Shop by Condition</title>
        <meta name="description" content="Shop By Condition - Unboxedkart" />
      </Head> */}
      <div>
        <StorePickUpWidget />
        <BrandsBlock brands={_data["grade-a"]["brands"]} slug={`/search?condition=${condition}&brand=`} />
        <CategoriesBlock categories={_data["grade-a"]["categories"]} url={`/search?condition=${condition}&category=`} />
        <div className="px-2">
          <BestSellingProductsBlock
            category={null}
            condition={condition}
            brand={null} />
        </div>
        <div className="px-2">
          <FeaturedProductsBlock
            category={null}
            brand={null}
            condition={condition}
          />
        </div>
        <div className="h-10"></div>
        {/* <BestSellingProductsBlock
        condition={condition}
        brand={undefined}
        category={undefined}
      /> */}
      </div>
    </>
  );
};

export default ConditionPage;

ConditionPage.Layout = Layout;
