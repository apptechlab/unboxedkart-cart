// import { Head } from "next/document";
import Image from "next/image";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";
import BrandsBlock from "../../components/common/brand-block";
import CategoriesBlock from "../../components/common/categories-block";
import ConditionsBlock from "../../components/common/conditions-block";
import BestSellingProductsBlock from "../../components/common/products/best-selling-products-block";
import FeaturedProductsBlock from "../../components/common/products/featured-products-block";
import StorePickUpWidget from "../../components/home/store-pickup-widget";
import Layout from "../../components/layout/layout";
const CategoryPage = () => {
  const router = useRouter();
  const category: string = router.query.category as string;

  const [categories, setCategories] = useState<Array<any>>([]);

  useEffect(() => {
    if (category == "mobile-phone") {
      setCategories(_data["mobile-phone"]["brands"]);
    } else if (category == "laptop") {
      setCategories(_data["laptop"]["brands"]);
    } else if (category == "earphones") {
      setCategories(_data["earphones"]["brands"]);
    } else if (category == "watch") {
      setCategories(_data["watch"]["brands"]);
    }
  }, [category, setCategories]);


  const _data = {
    "mobile-phone": {
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
    },
    laptop: {
      brands: [
        {
          brandName: "Apple",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/apple.webp",
          slug: "apple",
        },
        {
          brandName: "Dell",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/dell.webp",
          slug: "dell",
        },
      ],
    },
    earphones: {
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
      ],
    },
    tablet: {
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
      ],
    },
    speaker: {
      brands: [
        {
          brandName: "Apple",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/apple.webp",
          slug: "apple",
        },
        {
          brandName: "marshall",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/marshall.webp",
          slug: "marshall",
        },
      ],
    },
    accessories: {
      brands: [
        {
          brandName: "Apple",
          imageUrl:
            "https://unboxedkart-india.s3.ap-south-1.amazonaws.com/brands/apple.webp",
          slug: "apple",
        },
      ],
    },
    watch: {
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
          slug: "apple",
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
        <title>Shop by Category</title>
        <meta name="description" content="Shop By Category - Unboxedkart" />
      </Head> */}
      <div>
        <StorePickUpWidget />
        <BrandsBlock
          brands={categories}
          slug={`/search?category=${category}&brand=`}
        />
        <ConditionsBlock slug={`/search?category=${category}&condition=`} />
        <div className="px-2">
          <BestSellingProductsBlock
            category={category}
            condition={null}
            brand={null} />
        </div>
        <div className="px-2">
          <FeaturedProductsBlock
            category={category}
            brand={null}
            condition={null}
          />
        </div>
        <div className="h-10"></div>
      </div>
    </>
  );
};

export default CategoryPage;

CategoryPage.Layout = Layout;
